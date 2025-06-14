import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const redisClient = createClient({
  username: 'default',
  password: process.env.REDIS_PASS,
  socket: {
    host: 'redis-15119.crce179.ap-south-1-1.ec2.redns.redis-cloud.com',
    port: 15119
  }
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

export default redisClient;
