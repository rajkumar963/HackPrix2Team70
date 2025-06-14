import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/user';
import redisClient from '../config/redis';

interface JwtPayload {
  _id: string;
  emailId: string;
  role: string;
}

interface AuthenticatedRequest extends Request {
  result?: IUser;
}

const userMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error('Token is not present');

    const payload = jwt.verify(token, process.env.JWT_KEY!) as JwtPayload;

    const { _id } = payload;
    if (!_id) throw new Error('Invalid Token');

    const result = await User.findById(_id);
    if (!result) throw new Error("User Doesn't Exist");

    const isBlocked = await redisClient.exists(`token:${token}`);
    if (isBlocked) throw new Error('Invalid token');

    req.result = result;
    next();
  } catch (error) {
    res.status(401).send('Error: ' + (error as Error).message);
  }
};

export default userMiddleware;
