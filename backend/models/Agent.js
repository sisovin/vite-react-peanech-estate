import { query } from '../utils/database.js';

class Agent {
  /**
   * Create a new agent
   */
  static async create(agentData) {
    const {
      user_id, agency_name, agency_logo, phone, license_number,
      bio, specialization, years_experience
    } = agentData;

    const sql = `
      INSERT INTO agents (
        user_id, agency_name, agency_logo, phone, license_number,
        bio, specialization, years_experience
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const result = await query(sql, [
      user_id, agency_name, agency_logo, phone, license_number,
      bio, specialization, years_experience
    ]);

    return result.insertId;
  }

  /**
   * Find agent by ID
   */
  static async findById(id) {
    const sql = `
      SELECT a.*, u.username, u.email, u.full_name, u.avatar
      FROM agents a
      LEFT JOIN users u ON a.user_id = u.id
      WHERE a.id = ?
    `;
    const results = await query(sql, [id]);
    return results[0];
  }

  /**
   * Find agent by user ID
   */
  static async findByUserId(userId) {
    const sql = `
      SELECT a.*, u.username, u.email, u.full_name, u.avatar
      FROM agents a
      LEFT JOIN users u ON a.user_id = u.id
      WHERE a.user_id = ?
    `;
    const results = await query(sql, [userId]);
    return results[0];
  }

  /**
   * Get all agents
   */
  static async findAll() {
    const sql = `
      SELECT a.*, u.username, u.email, u.full_name, u.avatar,
             (SELECT COUNT(*) FROM properties WHERE agent_id = a.id) as property_count
      FROM agents a
      LEFT JOIN users u ON a.user_id = u.id
      ORDER BY a.created_at DESC
    `;
    return await query(sql);
  }

  /**
   * Update agent
   */
  static async update(id, agentData) {
    const fields = [];
    const params = [];

    Object.entries(agentData).forEach(([key, value]) => {
      if (value !== undefined && key !== 'id') {
        fields.push(`${key} = ?`);
        params.push(value);
      }
    });

    if (fields.length === 0) return null;

    params.push(id);
    const sql = `UPDATE agents SET ${fields.join(', ')} WHERE id = ?`;
    await query(sql, params);

    return await this.findById(id);
  }

  /**
   * Delete agent
   */
  static async delete(id) {
    const sql = 'DELETE FROM agents WHERE id = ?';
    await query(sql, [id]);
  }

  /**
   * Verify agent
   */
  static async verify(id) {
    const sql = 'UPDATE agents SET is_verified = TRUE WHERE id = ?';
    await query(sql, [id]);
    return await this.findById(id);
  }
}

export default Agent;
