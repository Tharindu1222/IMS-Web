import express from 'express';
import multer from 'multer';
import path from 'path';
import { protect, admin } from '../middleware/authMiddleware.js';
import Portfolio from '../models/Portfolio.js';

const router = express.Router();

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// Get all portfolio items
router.get('/', async (req, res) => {
  try {
    const portfolioItems = await Portfolio.find({}).sort({ createdAt: -1 });
    res.json(portfolioItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create portfolio item (admin only)
router.post('/', protect, admin, upload.array('images'), async (req, res) => {
  try {
    const { title, description, category, client } = req.body;
    const images = req.files.map(file => `/uploads/${file.filename}`);
    
    const portfolioItem = await Portfolio.create({
      title,
      description,
      images,
      category,
      client,
    });
    
    res.status(201).json(portfolioItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update portfolio item (admin only)
router.put('/:id', protect, admin, upload.array('images'), async (req, res) => {
  try {
    const portfolioItem = await Portfolio.findById(req.params.id);
    
    if (portfolioItem) {
      portfolioItem.title = req.body.title || portfolioItem.title;
      portfolioItem.description = req.body.description || portfolioItem.description;
      portfolioItem.category = req.body.category || portfolioItem.category;
      portfolioItem.client = req.body.client || portfolioItem.client;
      
      if (req.files?.length > 0) {
        const newImages = req.files.map(file => `/uploads/${file.filename}`);
        portfolioItem.images = [...portfolioItem.images, ...newImages];
      }
      
      const updatedItem = await portfolioItem.save();
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Portfolio item not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete portfolio item (admin only)
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const portfolioItem = await Portfolio.findById(req.params.id);
    
    if (portfolioItem) {
      await portfolioItem.deleteOne();
      res.json({ message: 'Portfolio item removed' });
    } else {
      res.status(404).json({ message: 'Portfolio item not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;