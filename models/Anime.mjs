import mongoose from 'mongoose';

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
  },
  averageScore: {
    type: Number,
    required: true,
  },
});

export const Anime = mongoose.model('Anime', animeSchema);
