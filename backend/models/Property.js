import { query } from '../utils/database.js';

class Property {
  /**
   * Create a new property
   */
  static async create(propertyData) {
    const {
      title, description, price, location, address, city, province,
      latitude, longitude, type, category, bedrooms, bathrooms, area,
      floor_number, total_floors, parking_spaces, year_built, furnishing,
      agent_id, status = 'pending'
    } = propertyData;

    const sql = `
      INSERT INTO properties (
        title, description, price, location, address, city, province,
        latitude, longitude, type, category, bedrooms, bathrooms, area,
        floor_number, total_floors, parking_spaces, year_built, furnishing,
        agent_id, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const result = await query(sql, [
      title, description, price, location, address, city, province,
      latitude, longitude, type, category, bedrooms, bathrooms, area,
      floor_number, total_floors, parking_spaces, year_built, furnishing,
      agent_id, status
    ]);

    return result.insertId;
  }

  /**
   * Find property by ID with agent info
   */
  static async findById(id) {
    const sql = `
      SELECT p.*, 
             a.agency_name, a.agency_logo, a.phone as agent_phone,
             u.full_name as agent_name, u.email as agent_email
      FROM properties p
      LEFT JOIN agents a ON p.agent_id = a.id
      LEFT JOIN users u ON a.user_id = u.id
      WHERE p.id = ?
    `;
    const results = await query(sql, [id]);

    if (results[0]) {
      // Increment views
      await query('UPDATE properties SET views = views + 1 WHERE id = ?', [id]);
    }

    return results[0];
  }

  /**
   * Find all properties with filters
   */
  static async findAll(filters = {}, pagination = {}) {
    let sql = `
      SELECT p.*, 
             a.agency_name, a.agency_logo,
             u.full_name as agent_name,
             (SELECT path FROM images WHERE property_id = p.id AND is_primary = 1 LIMIT 1) as primary_image
      FROM properties p
      LEFT JOIN agents a ON p.agent_id = a.id
      LEFT JOIN users u ON a.user_id = u.id
      WHERE 1=1
    `;
    const params = [];

    // Apply filters
    if (filters.type) {
      sql += ' AND p.type = ?';
      params.push(filters.type);
    }

    if (filters.category) {
      sql += ' AND p.category = ?';
      params.push(filters.category);
    }

    if (filters.city) {
      sql += ' AND p.city = ?';
      params.push(filters.city);
    }

    if (filters.min_price) {
      sql += ' AND p.price >= ?';
      params.push(filters.min_price);
    }

    if (filters.max_price) {
      sql += ' AND p.price <= ?';
      params.push(filters.max_price);
    }

    if (filters.bedrooms) {
      sql += ' AND p.bedrooms >= ?';
      params.push(filters.bedrooms);
    }

    if (filters.bathrooms) {
      sql += ' AND p.bathrooms >= ?';
      params.push(filters.bathrooms);
    }

    if (filters.status) {
      sql += ' AND p.status = ?';
      params.push(filters.status);
    } else {
      sql += ' AND p.status = "active"';
    }

    if (filters.featured) {
      sql += ' AND p.featured = 1';
    }

    if (filters.search) {
      sql += ' AND MATCH(p.title, p.description, p.location) AGAINST(? IN NATURAL LANGUAGE MODE)';
      params.push(filters.search);
    }

    // Order by
    sql += ' ORDER BY p.created_at DESC';

    // Pagination
    if (pagination.limit) {
      sql += ' LIMIT ? OFFSET ?';
      params.push(pagination.limit, pagination.offset || 0);
    }

    return await query(sql, params);
  }

  /**
   * Update property
   */
  static async update(id, propertyData) {
    const fields = [];
    const params = [];

    Object.entries(propertyData).forEach(([key, value]) => {
      if (value !== undefined && key !== 'id') {
        fields.push(`${key} = ?`);
        params.push(value);
      }
    });

    if (fields.length === 0) return null;

    params.push(id);
    const sql = `UPDATE properties SET ${fields.join(', ')} WHERE id = ?`;
    await query(sql, params);

    return await this.findById(id);
  }

  /**
   * Delete property
   */
  static async delete(id) {
    const sql = 'DELETE FROM properties WHERE id = ?';
    await query(sql, [id]);
  }

  /**
   * Get property count
   */
  static async count(filters = {}) {
    let sql = 'SELECT COUNT(*) as total FROM properties WHERE 1=1';
    const params = [];

    if (filters.status) {
      sql += ' AND status = ?';
      params.push(filters.status);
    }

    const results = await query(sql, params);
    return results[0].total;
  }

  /**
   * Toggle featured status
   */
  static async toggleFeatured(id) {
    const sql = 'UPDATE properties SET featured = NOT featured WHERE id = ?';
    await query(sql, [id]);
    return await this.findById(id);
  }

  /**
   * Get properties by agent
   */
  static async findByAgent(agentId) {
    const sql = `
      SELECT p.*,
             (SELECT path FROM images WHERE property_id = p.id AND is_primary = 1 LIMIT 1) as primary_image
      FROM properties p
      WHERE p.agent_id = ?
      ORDER BY p.created_at DESC
    `;
    return await query(sql, [agentId]);
  }
}

export default Property;
