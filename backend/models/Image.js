import { query } from '../utils/database.js';

class Image {
  /**
   * Create a new image
   */
  static async create(imageData) {
    const { property_id, filename, path, alt_text, is_primary = false, display_order = 0 } = imageData;

    const sql = `
      INSERT INTO images (property_id, filename, path, alt_text, is_primary, display_order)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const result = await query(sql, [property_id, filename, path, alt_text, is_primary, display_order]);
    return result.insertId;
  }

  /**
   * Find images by property ID
   */
  static async findByPropertyId(propertyId) {
    const sql = 'SELECT * FROM images WHERE property_id = ? ORDER BY is_primary DESC, display_order ASC';
    return await query(sql, [propertyId]);
  }

  /**
   * Find image by ID
   */
  static async findById(id) {
    const sql = 'SELECT * FROM images WHERE id = ?';
    const results = await query(sql, [id]);
    return results[0];
  }

  /**
   * Set primary image
   */
  static async setPrimary(id, propertyId) {
    // First, unset all primary images for this property
    await query('UPDATE images SET is_primary = FALSE WHERE property_id = ?', [propertyId]);

    // Then set the new primary image
    await query('UPDATE images SET is_primary = TRUE WHERE id = ?', [id]);

    return await this.findById(id);
  }

  /**
   * Delete image
   */
  static async delete(id) {
    const sql = 'DELETE FROM images WHERE id = ?';
    await query(sql, [id]);
  }

  /**
   * Delete all images for a property
   */
  static async deleteByPropertyId(propertyId) {
    const sql = 'DELETE FROM images WHERE property_id = ?';
    await query(sql, [propertyId]);
  }
}

export default Image;
