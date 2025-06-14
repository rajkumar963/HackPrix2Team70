import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const main = async (): Promise<void> => {
  try {
    const dbUri = process.env.DB_CONNECT_STRING;
    if (!dbUri) {
      throw new Error('DB_CONNECT_STRING is not defined in environment variables.');
    }

    await mongoose.connect(dbUri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export default main;
