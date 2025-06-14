import express, { Application } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import main from './config/db';
import redisClient from './config/redis';
import authRouter from './routes/userAuth';

dotenv.config();

// console.log('JWT_KEY exists?', !!process.env.JWT_KEY);
// console.log('Environment:', process.env.NODE_ENV);

const app: Application = express();

// app.use(cors({
//   origin: 'http://localhost:8080',
//   credentials: true
// }));

app.use(express.json());
app.use(cookieParser());

app.use('/user', authRouter );


const initializeConnection = async (): Promise<void> => {
  try {
    await Promise.all([main(), redisClient.connect()]);
    console.log('DB and Redis connected');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server listening at port number: ${PORT}`);
    });
  } catch (err) {
    console.error('Error:', err);
  }
};

initializeConnection();
