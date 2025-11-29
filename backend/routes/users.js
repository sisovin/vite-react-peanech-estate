import express from 'express';
import { authenticate } from '../middleware/auth.js';
import User from '../models/User.js';
import { query } from '../utils/database.js';

const router = express.Router();

// Get user profile
router.get('/profile', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Update user profile
router.put('/profile', authenticate, async (req, res) => {
  try {
    const { full_name, phone } = req.body;
    const user = await User.update(req.user.id, { full_name, phone });
    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// Get user favorites
router.get('/favorites', authenticate, async (req, res) => {
  try {
    const sql = `
      SELECT p.*, 
             (SELECT path FROM images WHERE property_id = p.id AND is_primary = 1 LIMIT 1) as primary_image
      FROM favorites f
      JOIN properties p ON f.property_id = p.id
      WHERE f.user_id = ?
      ORDER BY f.created_at DESC
    `;
    const favorites = await query(sql, [req.user.id]);
    res.json({ favorites });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
});

// Add to favorites
router.post('/favorites', authenticate, async (req, res) => {
  try {
    const { property_id } = req.body;
    await query(
      'INSERT IGNORE INTO favorites (user_id, property_id) VALUES (?, ?)',
      [req.user.id, property_id]
    );
    res.json({ message: 'Added to favorites' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add favorite' });
  }
});

// Remove from favorites
router.delete('/favorites/:id', authenticate, async (req, res) => {
  try {
    await query(
      'DELETE FROM favorites WHERE user_id = ? AND property_id = ?',
      [req.user.id, req.params.id]
    );
    res.json({ message: 'Removed from favorites' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove favorite' });
  }
});

export default router;
