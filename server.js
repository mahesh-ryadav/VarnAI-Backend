// server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
import connectDB from './configs/mongodb.js';

const app = express();

// Connect to database
await connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

// Root test route
app.get('/', (req, res) => res.send('API Working'));

// Export for Vercel
export const handler = serverless(app);
