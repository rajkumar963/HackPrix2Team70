import { Router, Request, Response } from 'express';
import userMiddleware from '../middleware/userMiddleware';
import { login, logout, register } from '../controllers/userAuthent';


const authRouter = Router();

// Register
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', userMiddleware, logout);



export default authRouter;
