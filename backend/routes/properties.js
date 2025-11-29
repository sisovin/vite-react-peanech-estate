import express from 'express';
import PropertyController from '../controllers/PropertyController.js';
import { authenticate, authorize, optionalAuth } from '../middleware/auth.js';
import { validateProperty, validateId, validatePagination } from '../middleware/validation.js';

const router = express.Router();

// Public routes
router.get('/', validatePagination, optionalAuth, PropertyController.index);
router.get('/:id', validateId, PropertyController.show);

// Protected routes - Agent and Admin
router.post('/',
  authenticate,
  authorize('agent', 'admin'),
  validateProperty,
  PropertyController.create
);

router.put('/:id',
  authenticate,
  authorize('agent', 'admin'),
  validateId,
  PropertyController.update
);

router.delete('/:id',
  authenticate,
  authorize('agent', 'admin'),
  validateId,
  PropertyController.delete
);

// Agent routes
router.get('/agent/my-properties',
  authenticate,
  authorize('agent'),
  PropertyController.myProperties
);

// Admin routes
router.patch('/:id/featured',
  authenticate,
  authorize('admin'),
  validateId,
  PropertyController.toggleFeatured
);

export default router;
