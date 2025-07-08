import express from 'express';
import Artisan from '../models/artisans.js';

const router = express.Router();

// Create a new artisan
router.post('/', async (req, res) => {
  try {
    const artisan = new Artisan(req.body);
    await artisan.save();
    res.status(201).json(artisan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all artisans
router.get('/', async (req, res) => {
  try {
    const artisans = await Artisan.find();
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a review to an artisan
router.post('/:id/reviews', async (req, res) => {
  try {
    const artisan = await Artisan.findById(req.params.id);
    if (!artisan) return res.status(404).json({ message: 'Artisan not found' });

    const { author, comment, rating } = req.body;

    artisan.reviews.push({ author, comment, rating });
    await artisan.save();

    res.status(201).json(artisan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
