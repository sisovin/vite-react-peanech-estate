import app from './app.js';
import dotenv from 'dotenv';
import './config/database.js'; // Initialize database connection

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   🏠 Peanech Real Estate API Server                  ║
║                                                       ║
║   🚀 Server running on port ${PORT}                      ║
║   🌍 Environment: ${process.env.NODE_ENV || 'development'}                   ║
║   📡 API Base URL: http://localhost:${PORT}/api          ║
║                                                       ║
║   Endpoints:                                          ║
║   - POST   /api/auth/register                         ║
║   - POST   /api/auth/login                            ║
║   - GET    /api/properties                            ║
║   - GET    /api/health                                ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
  `);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
