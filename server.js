// server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
import connectDB from './configs/mongodb.js';

// Initialize Express App
const app = express();
const cors = require('cors');

app.use(cors({
  origin: ['https://your-vercel-frontend.vercel.app'], // ← replace with your actual Vercel frontend domain
  credentials: true
}));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

// Root Route
app.get('/', (req, res) => {
  res.send("API is working - Render Deployment");
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
