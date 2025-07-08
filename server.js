import artisanRoutes from './routes/artisans.js';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mount artisan routes here
app.use('/api/artisans', artisanRoutes);

// ✅ Your MongoDB connection string
const MONGO_URI = 'mongodb+srv://WENGER:bZuJmY2MXnWCC9p8@cluster0.sdmzobk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// ✅ Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Test route
app.get('/', (req, res) => {
  res.send('API is running ✅');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
