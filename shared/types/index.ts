// User Types
export interface User {
  id: number;
  username: string;
  email: string;
  role: 'user' | 'agent' | 'admin';
  full_name?: string;
  phone?: string;
  avatar?: string;
  is_active: boolean;
  email_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface Agent {
  id: number;
  user_id: number;
  agency_name?: string;
  agency_logo?: string;
  phone?: string;
  license_number?: string;
  bio?: string;
  specialization?: string;
  years_experience?: number;
  is_verified: boolean;
  created_at: string;
}

// Property Types
export interface Property {
  id: number;
  title: string;
  description?: string;
  price: number;
  location: string;
  address?: string;
  city?: string;
  province?: string;
  latitude?: number;
  longitude?: number;
  type: 'sale' | 'rent';
  category: 'apartment' | 'house' | 'condo' | 'villa' | 'land' | 'commercial' | 'office';
  bedrooms: number;
  bathrooms: number;
  area: number;
  floor_number?: number;
  total_floors?: number;
  parking_spaces: number;
  year_built?: number;
  furnishing?: 'furnished' | 'semi-furnished' | 'unfurnished';
  agent_id: number;
  status: 'active' | 'pending' | 'sold' | 'rented' | 'inactive';
  featured: boolean;
  views: number;
  created_at: string;
  updated_at: string;
  // Joined fields
  agency_name?: string;
  agency_logo?: string;
  agent_name?: string;
  agent_email?: string;
  agent_phone?: string;
  primary_image?: string;
  images?: PropertyImage[];
}

export interface PropertyImage {
  id: number;
  property_id: number;
  filename: string;
  path: string;
  alt_text?: string;
  is_primary: boolean;
  display_order: number;
  created_at: string;
}

export interface PropertyFilter {
  type?: 'sale' | 'rent';
  category?: Property['category'];
  city?: string;
  province?: string;
  min_price?: number;
  max_price?: number;
  bedrooms?: number;
  bathrooms?: number;
  status?: Property['status'];
  featured?: boolean;
  search?: string;
}

// Message Types
export interface Message {
  id: number;
  sender_id: number;
  receiver_id: number;
  property_id?: number;
  subject?: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

// Payment Types
export interface Payment {
  id: number;
  user_id: number;
  property_id?: number;
  amount: number;
  currency: string;
  payment_method: 'card' | 'cash' | 'qr' | 'bank_transfer';
  transaction_id?: string;
  payment_reference?: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  payment_date?: string;
  description?: string;
  created_at: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  data?: T;
  message?: string;
  error?: string;
  errors?: Array<{ field: string; message: string }>;
}

export interface PaginationResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  role?: 'user' | 'agent';
  full_name?: string;
  phone?: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  message: string;
}

export type { User as UserType, Property as PropertyType, Agent as AgentType };
