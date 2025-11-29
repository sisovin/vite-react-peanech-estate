import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import User from '../models/User.js';
import Property from '../models/Property.js';
import Agent from '../models/Agent.js';
import { query } from '../utils/database.js';
import { buildPagination } from '../utils/database.js';

const router = express.Router();

// All routes require admin authentication
router.use(authenticate, authorize('admin'));

// Get analytics
router.get('/analytics', async (req, res) => {
  try {
    const stats = await query(`
      SELECT 
        (SELECT COUNT(*) FROM users) as total_users,
        (SELECT COUNT(*) FROM properties) as total_properties,
        (SELECT COUNT(*) FROM properties WHERE status = 'active') as active_properties,
        (SELECT COUNT(*) FROM agents) as total_agents,
        (SELECT COUNT(*) FROM messages) as total_messages
    `);

    res.json({ stats: stats[0] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

// User management
router.get('/users', async (req, res) => {
  try {
    const { page = 1, limit = 20, role } = req.query;
    const pagination = buildPagination(parseInt(page), parseInt(limit));
    const users = await User.findAll({ role }, pagination);
    const total = await query('SELECT COUNT(*) as total FROM users')[0];

    res.json({
      users,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: total.total,
        totalPages: Math.ceil(total.total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.patch('/users/:id/toggle-active', async (req, res) => {
  try {
    const user = await User.toggleActive(req.params.id);
    res.json({ message: 'User status updated', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    await User.delete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Property management
router.get('/properties', async (req, res) => {
  try {
    const { page = 1, limit = 20, status } = req.query;
    const pagination = buildPagination(parseInt(page), parseInt(limit));
    const properties = await Property.findAll({ status }, pagination);
    const total = await Property.count({ status });

    res.json({
      properties,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

router.patch('/properties/:id/approve', async (req, res) => {
  try {
    const property = await Property.update(req.params.id, { status: 'active' });
    res.json({ message: 'Property approved', property });
  } catch (error) {
    res.status(500).json({ error: 'Failed to approve property' });
  }
});

// Agent management
router.get('/agents', async (req, res) => {
  try {
    const agents = await Agent.findAll();
    res.json({ agents });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch agents' });
  }
});

router.patch('/agents/:id/verify', async (req, res) => {
  try {
    const agent = await Agent.verify(req.params.id);
    res.json({ message: 'Agent verified', agent });
  } catch (error) {
    res.status(500).json({ error: 'Failed to verify agent' });
  }
});

export default router;
