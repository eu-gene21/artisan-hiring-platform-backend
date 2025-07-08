import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import artisanRoutes from './routes/artisans.js';

// ✅ Load environment variables from .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mount artisan routes
app.use('/api/artisans', artisanRoutes);

// ✅ MongoDB connection string from environment
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Test root route
app.get('/', (req, res) => {
  res.send('API is running ✅');
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
