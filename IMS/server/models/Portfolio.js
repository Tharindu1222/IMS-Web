import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [{
    type: String,
    required: true,
  }],
  category: {
    type: String,
    required: true,
    enum: ['project', 'lecture', 'training'],
  },
  client: {
    type: String,
  },
}, {
  timestamps: true,
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;