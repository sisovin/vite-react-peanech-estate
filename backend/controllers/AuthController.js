import User from '../models/User.js';
import Agent from '../models/Agent.js';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt.js';
import { query } from '../utils/database.js';

class AuthController {
  /**
   * Register new user
   */
  static async register(req, res) {
    try {
      const { username, email, password, role, full_name, phone } = req.body;

      // Check if user already exists
      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      const existingUsername = await User.findByUsername(username);
      if (existingUsername) {
        return res.status(400).json({ error: 'Username already taken' });
      }

      // Create user
      const userId = await User.create({
        username,
        email,
        password,
        role: role || 'user',
        full_name,
        phone
      });

      // If role is agent, create agent profile
      if (role === 'agent') {
        await Agent.create({ user_id: userId });
      }

      const user = await User.findById(userId);
      const accessToken = generateAccessToken({ id: user.id, role: user.role });
      const refreshToken = generateRefreshToken({ id: user.id });

      // Store refresh token
      await query(
        'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 7 DAY))',
        [user.id, refreshToken]
      );

      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        },
        accessToken,
        refreshToken
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Registration failed' });
    }
  }

  /**
   * Login user
   */
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      // Find user
      const user = await User.findByEmail(email);
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Check if user is active
      if (!user.is_active) {
        return res.status(403).json({ error: 'Account is inactive' });
      }

      // Verify password
      const isValidPassword = await User.verifyPassword(password, user.password_hash);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Generate tokens
      const accessToken = generateAccessToken({ id: user.id, role: user.role });
      const refreshToken = generateRefreshToken({ id: user.id });

      // Store refresh token
      await query(
        'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 7 DAY))',
        [user.id, refreshToken]
      );

      res.json({
        message: 'Login successful',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          full_name: user.full_name,
          avatar: user.avatar
        },
        accessToken,
        refreshToken
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  }

  /**
   * Get current user
   */
  static async me(req, res) {
    try {
      const user = await User.findById(req.user.id);

      // If user is an agent, get agent info
      let agentInfo = null;
      if (user.role === 'agent') {
        agentInfo = await Agent.findByUserId(user.id);
      }

      res.json({
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          full_name: user.full_name,
          phone: user.phone,
          avatar: user.avatar,
          agentInfo
        }
      });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(500).json({ error: 'Failed to get user info' });
    }
  }

  /**
   * Refresh access token
   */
  static async refresh(req, res) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(400).json({ error: 'Refresh token required' });
      }

      // Verify refresh token
      const decoded = verifyRefreshToken(refreshToken);

      // Check if refresh token exists in database
      const tokenResult = await query(
        'SELECT * FROM refresh_tokens WHERE user_id = ? AND token = ? AND expires_at > NOW()',
        [decoded.id, refreshToken]
      );

      if (tokenResult.length === 0) {
        return res.status(401).json({ error: 'Invalid refresh token' });
      }

      // Get user
      const user = await User.findById(decoded.id);
      if (!user || !user.is_active) {
        return res.status(401).json({ error: 'User not found or inactive' });
      }

      // Generate new access token
      const accessToken = generateAccessToken({ id: user.id, role: user.role });

      res.json({ accessToken });
    } catch (error) {
      console.error('Refresh token error:', error);
      res.status(401).json({ error: 'Invalid refresh token' });
    }
  }

  /**
   * Logout user
   */
  static async logout(req, res) {
    try {
      const { refreshToken } = req.body;

      if (refreshToken) {
        // Delete refresh token from database
        await query('DELETE FROM refresh_tokens WHERE token = ?', [refreshToken]);
      }

      res.json({ message: 'Logout successful' });
    } catch (error) {
      console.error('Logout error:', error);
      res.status(500).json({ error: 'Logout failed' });
    }
  }
}

export default AuthController;
