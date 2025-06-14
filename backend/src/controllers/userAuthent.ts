import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import redisClient from '../config/redis';
import User from '../models/user';
import validate from '../utils/validator';

// Runtime check for JWT_KEY
const getJwtKey = (): string => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY is not defined in environment variables');
  }
  return process.env.JWT_KEY;
};

interface AuthenticatedRequest extends Request {
  result?: {
    _id: string;
    role: string;
  };
}

const register = async (req: Request, res: Response): Promise<void> => {
  try {
    validate(req.body);
    const { firstName, emailId, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      ...req.body,
      password: hashedPassword,
      role: 'user',
    });

    const token = jwt.sign(
      { _id: user._id, emailId: user.emailId, role: user.role },
      getJwtKey(),
      { expiresIn: 3600 }
    );

    res.cookie('token', token, { maxAge: 60 * 60 * 1000 });
    res.send('User Created Successfully');
  } catch (error: any) {
    res.status(400).send('Error: ' + error.message);
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { emailId, password } = req.body;
    if (!emailId || !password) throw new Error('Invalid Credentials');

    const user = await User.findOne({ emailId });
    if (!user) throw new Error('Invalid Credentials');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Invalid Credentials');

    const token = jwt.sign(
      { _id: user._id, emailId: user.emailId, role: user.role },
      getJwtKey(),
      { expiresIn: 3600 }
    );

    res.cookie('token', token, { maxAge: 60 * 60 * 1000 });
    res.status(201).json({
      user: {
        firstName: user.firstName,
        emailId: user.emailId,
        _id: user._id,
        role: user.role,
      },
      message: 'Login Successfully'
    });
  } catch (error: any) {
    res.status(401).send('Error: ' + error.message);
  }
};

// logout remains unchanged

const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token } = req.cookies;

    const payload = jwt.decode(token) as JwtPayload;
    if (!payload || !payload.exp) throw new Error('Invalid token');

    await redisClient.set(`token:${token}`, 'Blocked');
    await redisClient.expireAt(`token:${token}`, payload.exp);

    res.cookie('token', null, { expires: new Date(Date.now()) });
    res.send(':Logged out Successfully');
  } catch (error: any) {
    res.status(503).send('Error: ' + error.message);
  }
};

export { register, login, logout };