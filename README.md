# 🏠 Peanech Real Estate Platform

<div align="center">

**Cambodia's Premier Full-Stack Real Estate Platform**

[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📋 Overview

Peanech Real Estate is a comprehensive full-stack platform designed for the Cambodian real estate market. It provides a modern solution for property buyers, sellers, agents, and administrators.

## 🎯 Key Features

- 🔍 Advanced Property Search & Filters
- ❤️ Favorites Management
- 📱 Fully Responsive Design
- 🗺️ Location-Based Search
- 📊 Analytics Dashboard
- 💬 Direct Messaging
- 🖼️ Media Management
- 🔐 Secure Authentication
- 👥 Role-Based Access Control

## 🛠️ Technology Stack

**Frontend:** React 19.1, TypeScript, Vite, Tailwind CSS, React Router DOM  
**Backend:** Node.js, Express.js, MySQL, JWT, Bcrypt  
**Tools:** ESLint, Concurrently, Nodemon

## 📁 Project Structure

```
peanech-real-estate/
├── frontend/          # React frontend
├── backend/           # Express backend
├── database/          # SQL migrations & seeds
├── shared/            # Shared types & utilities
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MySQL 8.0+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/sisovin/vite-react-peanech-estate.git
cd vite-react-peanech-estate

# Install all dependencies
npm run install:all

# Setup database
mysql -u root -p < database/schema.sql

# Configure environment variables
# Copy backend/.env.example to backend/.env and update values
# Copy frontend/.env.example to frontend/.env (if needed)

# Start development servers
npm run dev
```

## 🌐 Access

- Frontend: <http://localhost:5173>
- Backend API: <http://localhost:5000/api>
- Health Check: <http://localhost:5000/api/health>

## 📚 API Endpoints

### Authentication

- POST `/api/auth/register` - Register user
- POST `/api/auth/login` - Login
- GET `/api/auth/me` - Get current user
- POST `/api/auth/logout` - Logout

### Properties

- GET `/api/properties` - List properties
- GET `/api/properties/:id` - Get property details
- POST `/api/properties` - Create property (agent/admin)
- PUT `/api/properties/:id` - Update property
- DELETE `/api/properties/:id` - Delete property

### Users

- GET `/api/users/profile` - Get profile
- PUT `/api/users/profile` - Update profile
- GET `/api/users/favorites` - Get favorites
- POST `/api/users/favorites` - Add favorite
- DELETE `/api/users/favorites/:id` - Remove favorite

### Admin

- GET `/api/admin/analytics` - Get analytics
- GET `/api/admin/users` - List users
- GET `/api/admin/properties` - List properties
- PATCH `/api/admin/properties/:id/approve` - Approve property

## 🗄️ Database Schema

Main tables: users, agents, properties, images, favorites, messages, payments, refresh_tokens

See `database/schema.sql` for complete schema.

## 🔐 Security

- JWT authentication with refresh tokens
- Bcrypt password hashing
- Input validation & sanitization
- SQL injection prevention
- XSS protection
- CORS configuration
- Rate limiting

## 📦 Deployment

### Frontend

```bash
cd frontend
npm run build
# Deploy dist/ folder to Vercel, Netlify, etc.
```

### Backend

Deploy to Heroku, AWS, DigitalOcean, Railway, or Render

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📝 License

MIT License - see LICENSE file

## 👥 Authors

Peanech Development Team - [@sisovin](https://github.com/sisovin)

## 📞 Support

Open an issue on GitHub or email <support@peanech.com>

---

<div align="center">

**Made with ❤️ for Cambodia's Real Estate Market**

</div>
