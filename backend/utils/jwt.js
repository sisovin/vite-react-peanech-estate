import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.js';

/**
 * Generate access token
 */
export const generateAccessToken = (payload) => {
  return jwt.sign(payload, authConfig.jwtSecret, {
    expiresIn: authConfig.jwtExpiresIn
  });
};

/**
 * Generate refresh token
 */
export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, authConfig.jwtRefreshSecret, {
    expiresIn: authConfig.jwtRefreshExpiresIn
  });
};

/**
 * Verify access token
 */
export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, authConfig.jwtSecret);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

/**
 * Verify refresh token
 */
export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, authConfig.jwtRefreshSecret);
  } catch (error) {
    throw new Error('Invalid refresh token');
  }
};

export default {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken
};
