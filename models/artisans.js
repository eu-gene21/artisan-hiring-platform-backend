import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  author: String,
  comment: String,
  rating: { type: Number, min: 1, max: 5 },
  date: { type: Date, default: Date.now }
});

const artisanSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  trade: { type: String, required: true },
  location: { type: String, required: true },
  experienceYears: { type: Number, required: true, min: 0 },
  bio: { type: String, required: true, minlength: 10 },
  reviews: [{
    author: { type: String, required: true },
    comment: { type: String, required: true, minlength: 5 },
    rating: { type: Number, required: true, min: 1, max: 5 }
  }]
}, { timestamps: true });


export default mongoose.model('Artisan', artisanSchema);
