import Property from '../models/Property.js';
import Image from '../models/Image.js';
import Agent from '../models/Agent.js';
import { buildPagination } from '../utils/database.js';

class PropertyController {
  /**
   * Get all properties with filters
   */
  static async index(req, res) {
    try {
      const { page = 1, limit = 12, ...filters } = req.query;
      const pagination = buildPagination(parseInt(page), parseInt(limit));

      const properties = await Property.findAll(filters, pagination);
      const total = await Property.count(filters);

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
      console.error('Get properties error:', error);
      res.status(500).json({ error: 'Failed to fetch properties' });
    }
  }

  /**
   * Get property by ID
   */
  static async show(req, res) {
    try {
      const { id } = req.params;
      const property = await Property.findById(id);

      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }

      // Get images
      const images = await Image.findByPropertyId(id);

      res.json({
        property: {
          ...property,
          images
        }
      });
    } catch (error) {
      console.error('Get property error:', error);
      res.status(500).json({ error: 'Failed to fetch property' });
    }
  }

  /**
   * Create new property
   */
  static async create(req, res) {
    try {
      const propertyData = req.body;

      // If user is an agent, get their agent_id
      if (req.user.role === 'agent') {
        const agent = await Agent.findByUserId(req.user.id);
        if (!agent) {
          return res.status(400).json({ error: 'Agent profile not found' });
        }
        propertyData.agent_id = agent.id;
      } else if (req.user.role === 'admin' && !propertyData.agent_id) {
        return res.status(400).json({ error: 'Agent ID is required' });
      }

      const propertyId = await Property.create(propertyData);
      const property = await Property.findById(propertyId);

      res.status(201).json({
        message: 'Property created successfully',
        property
      });
    } catch (error) {
      console.error('Create property error:', error);
      res.status(500).json({ error: 'Failed to create property' });
    }
  }

  /**
   * Update property
   */
  static async update(req, res) {
    try {
      const { id } = req.params;
      const propertyData = req.body;

      // Check if property exists
      const existingProperty = await Property.findById(id);
      if (!existingProperty) {
        return res.status(404).json({ error: 'Property not found' });
      }

      // Check authorization
      if (req.user.role === 'agent') {
        const agent = await Agent.findByUserId(req.user.id);
        if (existingProperty.agent_id !== agent.id) {
          return res.status(403).json({ error: 'Not authorized to update this property' });
        }
      }

      const property = await Property.update(id, propertyData);

      res.json({
        message: 'Property updated successfully',
        property
      });
    } catch (error) {
      console.error('Update property error:', error);
      res.status(500).json({ error: 'Failed to update property' });
    }
  }

  /**
   * Delete property
   */
  static async delete(req, res) {
    try {
      const { id } = req.params;

      // Check if property exists
      const property = await Property.findById(id);
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }

      // Check authorization (only admin or property owner)
      if (req.user.role === 'agent') {
        const agent = await Agent.findByUserId(req.user.id);
        if (property.agent_id !== agent.id) {
          return res.status(403).json({ error: 'Not authorized to delete this property' });
        }
      }

      await Property.delete(id);

      res.json({ message: 'Property deleted successfully' });
    } catch (error) {
      console.error('Delete property error:', error);
      res.status(500).json({ error: 'Failed to delete property' });
    }
  }

  /**
   * Toggle featured status
   */
  static async toggleFeatured(req, res) {
    try {
      const { id } = req.params;

      const property = await Property.toggleFeatured(id);

      res.json({
        message: 'Featured status updated',
        property
      });
    } catch (error) {
      console.error('Toggle featured error:', error);
      res.status(500).json({ error: 'Failed to update featured status' });
    }
  }

  /**
   * Get properties by current agent
   */
  static async myProperties(req, res) {
    try {
      const agent = await Agent.findByUserId(req.user.id);
      if (!agent) {
        return res.status(400).json({ error: 'Agent profile not found' });
      }

      const properties = await Property.findByAgent(agent.id);

      res.json({ properties });
    } catch (error) {
      console.error('Get my properties error:', error);
      res.status(500).json({ error: 'Failed to fetch properties' });
    }
  }
}

export default PropertyController;
