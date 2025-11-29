export default {
  jwtSecret: process.env.JWT_SECRET || 'your_super_secret_jwt_key',
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || 'your_super_secret_refresh_key',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  saltRounds: 10
};
