import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import { uploadMultiple, deleteFile } from '../middleware/upload.js';
import Image from '../models/Image.js';
import path from 'path';

const router = express.Router();

// Upload images for property
router.post('/upload',
  authenticate,
  authorize('agent', 'admin'),
  uploadMultiple('images', 10),
  async (req, res) => {
    try {
      const { property_id } = req.body;
      const files = req.files;

      if (!files || files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
      }

      const images = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageId = await Image.create({
          property_id,
          filename: file.filename,
          path: `/uploads/${file.filename}`,
          is_primary: i === 0,
          display_order: i
        });
        images.push(await Image.findById(imageId));
      }

      res.status(201).json({
        message: 'Images uploaded successfully',
        images
      });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Failed to upload images' });
    }
  }
);

// Get image
router.get('/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json({ image });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

// Delete image
router.delete('/:id',
  authenticate,
  authorize('agent', 'admin'),
  async (req, res) => {
    try {
      const image = await Image.findById(req.params.id);
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }

      // Delete file from filesystem
      const filePath = path.join(process.cwd(), 'uploads', image.filename);
      deleteFile(filePath);

      // Delete from database
      await Image.delete(req.params.id);

      res.json({ message: 'Image deleted successfully' });
    } catch (error) {
      console.error('Delete image error:', error);
      res.status(500).json({ error: 'Failed to delete image' });
    }
  }
);

// Set primary image
router.patch('/:id/primary',
  authenticate,
  authorize('agent', 'admin'),
  async (req, res) => {
    try {
      const image = await Image.findById(req.params.id);
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }

      await Image.setPrimary(req.params.id, image.property_id);
      res.json({ message: 'Primary image updated' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update primary image' });
    }
  }
);

export default router;
