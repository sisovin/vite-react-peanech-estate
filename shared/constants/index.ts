// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Property Types
export const PROPERTY_TYPES = {
  SALE: 'sale',
  RENT: 'rent',
} as const;

export const PROPERTY_CATEGORIES = {
  APARTMENT: 'apartment',
  HOUSE: 'house',
  CONDO: 'condo',
  VILLA: 'villa',
  LAND: 'land',
  COMMERCIAL: 'commercial',
  OFFICE: 'office',
} as const;

export const PROPERTY_STATUS = {
  ACTIVE: 'active',
  PENDING: 'pending',
  SOLD: 'sold',
  RENTED: 'rented',
  INACTIVE: 'inactive',
} as const;

export const FURNISHING_TYPES = {
  FURNISHED: 'furnished',
  SEMI_FURNISHED: 'semi-furnished',
  UNFURNISHED: 'unfurnished',
} as const;

// User Roles
export const USER_ROLES = {
  USER: 'user',
  AGENT: 'agent',
  ADMIN: 'admin',
} as const;

// Payment Methods
export const PAYMENT_METHODS = {
  CARD: 'card',
  CASH: 'cash',
  QR: 'qr',
  BANK_TRANSFER: 'bank_transfer',
} as const;

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded',
} as const;

// Pagination
export const DEFAULT_PAGE_SIZE = 12;
export const MAX_PAGE_SIZE = 100;

// File Upload
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];

// Local Storage Keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'peanech_access_token',
  REFRESH_TOKEN: 'peanech_refresh_token',
  USER_DATA: 'peanech_user_data',
} as const;

// Display Labels
export const PROPERTY_TYPE_LABELS = {
  [PROPERTY_TYPES.SALE]: 'For Sale',
  [PROPERTY_TYPES.RENT]: 'For Rent',
};

export const PROPERTY_CATEGORY_LABELS = {
  [PROPERTY_CATEGORIES.APARTMENT]: 'Apartment',
  [PROPERTY_CATEGORIES.HOUSE]: 'House',
  [PROPERTY_CATEGORIES.CONDO]: 'Condo',
  [PROPERTY_CATEGORIES.VILLA]: 'Villa',
  [PROPERTY_CATEGORIES.LAND]: 'Land',
  [PROPERTY_CATEGORIES.COMMERCIAL]: 'Commercial',
  [PROPERTY_CATEGORIES.OFFICE]: 'Office',
};

export const PROPERTY_STATUS_LABELS = {
  [PROPERTY_STATUS.ACTIVE]: 'Active',
  [PROPERTY_STATUS.PENDING]: 'Pending',
  [PROPERTY_STATUS.SOLD]: 'Sold',
  [PROPERTY_STATUS.RENTED]: 'Rented',
  [PROPERTY_STATUS.INACTIVE]: 'Inactive',
};

// Cities in Cambodia
export const CAMBODIA_CITIES = [
  'Phnom Penh',
  'Siem Reap',
  'Battambang',
  'Sihanoukville',
  'Kampong Cham',
  'Kampong Thom',
  'Kampong Speu',
  'Kampong Chhnang',
  'Pursat',
  'Prey Veng',
  'Takeo',
  'Kandal',
  'Kampot',
  'Kep',
  'Banteay Meanchey',
  'Pailin',
  'Koh Kong',
  'Preah Vihear',
  'Ratanakiri',
  'Mondulkiri',
  'Stung Treng',
  'Kratie',
  'Oddar Meanchey',
  'Preah Sihanouk',
  'Tbong Khmum',
];

// Currency
export const DEFAULT_CURRENCY = 'USD';
export const SUPPORTED_CURRENCIES = ['USD', 'KHR'];

export default {
  API_BASE_URL,
  PROPERTY_TYPES,
  PROPERTY_CATEGORIES,
  PROPERTY_STATUS,
  FURNISHING_TYPES,
  USER_ROLES,
  PAYMENT_METHODS,
  PAYMENT_STATUS,
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
  MAX_FILE_SIZE,
  ALLOWED_IMAGE_TYPES,
  STORAGE_KEYS,
  PROPERTY_TYPE_LABELS,
  PROPERTY_CATEGORY_LABELS,
  PROPERTY_STATUS_LABELS,
  CAMBODIA_CITIES,
  DEFAULT_CURRENCY,
  SUPPORTED_CURRENCIES,
};
