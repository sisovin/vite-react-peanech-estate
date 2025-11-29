import { query } from '../utils/database.js';
import bcrypt from 'bcrypt';
import authConfig from '../config/auth.js';

class User {
  /**
   * Create a new user
   */
  static async create(userData) {
    const { username, email, password, role = 'user', full_name, phone } = userData;

    // Hash password
    const password_hash = await bcrypt.hash(password, authConfig.saltRounds);

    const sql = `
      INSERT INTO users (username, email, password_hash, role, full_name, phone)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const result = await query(sql, [username, email, password_hash, role, full_name, phone]);
    return result.insertId;
  }

  /**
   * Find user by ID
   */
  static async findById(id) {
    const sql = 'SELECT id, username, email, role, full_name, phone, avatar, is_active, email_verified, created_at FROM users WHERE id = ?';
    const results = await query(sql, [id]);
    return results[0];
  }

  /**
   * Find user by email
   */
  static async findByEmail(email) {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const results = await query(sql, [email]);
    return results[0];
  }

  /**
   * Find user by username
   */
  static async findByUsername(username) {
    const sql = 'SELECT * FROM users WHERE username = ?';
    const results = await query(sql, [username]);
    return results[0];
  }

  /**
   * Verify password
   */
  static async verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  /**
   * Update user
   */
  static async update(id, userData) {
    const { full_name, phone, avatar } = userData;
    const sql = `
      UPDATE users 
      SET full_name = COALESCE(?, full_name),
          phone = COALESCE(?, phone),
          avatar = COALESCE(?, avatar)
      WHERE id = ?
    `;
    await query(sql, [full_name, phone, avatar, id]);
    return await this.findById(id);
  }

  /**
   * Get all users (admin)
   */
  static async findAll(filters = {}, pagination = {}) {
    let sql = 'SELECT id, username, email, role, full_name, phone, is_active, created_at FROM users';
    const params = [];

    if (filters.role) {
      sql += ' WHERE role = ?';
      params.push(filters.role);
    }

    if (pagination.limit) {
      sql += ' LIMIT ? OFFSET ?';
      params.push(pagination.limit, pagination.offset || 0);
    }

    return await query(sql, params);
  }

  /**
   * Delete user
   */
  static async delete(id) {
    const sql = 'DELETE FROM users WHERE id = ?';
    await query(sql, [id]);
  }

  /**
   * Toggle user active status
   */
  static async toggleActive(id) {
    const sql = 'UPDATE users SET is_active = NOT is_active WHERE id = ?';
    await query(sql, [id]);
    return await this.findById(id);
  }
}

export default User;
