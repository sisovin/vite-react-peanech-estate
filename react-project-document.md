# Peanech Real Estate Project Document

## Project Overview
**Project Name:** Peanech Real Estate (Cambodia PEANECH Estate)  
**Description:** A comprehensive full-stack real estate platform for Cambodia, featuring a modern React TSX frontend website, fully functional admin panel, database integration, authentication, and optional payment integrations. The platform allows users to browse properties, manage listings, and provides administrators with tools for content management, user management, and analytics.

**Key Features:**
- Complete frontend website with modern UI/UX
- Fully functional admin panel with comprehensive features
- Database with proper migrations and seed data
- Media library integration for images
- Authentication and authorization system
- Responsive design for all devices
- GitHub repository setup and maintained
- React 19.2 and React-dom 19.2 TSX compatibility achieved
- Optional: ABA PayWay integration, REST API for mobile apps

## Technology Stack
- **Frontend:** React 19.2, React-dom 19.2, TypeScript (TSX), Tailwind CSS (latest version), Shadcn UI
- **Backend:** Node.js/Express.js (for API), MySQL with connection pooling
- **Database:** MySQL with migrations and seed data
- **Version Control:** Git with GitHub repository
- **Optional Integrations:** ABA PayWay (Card Payments, Cash, JSQR for QR Code), REST API

## Project Structure
The project follows a modular structure separating frontend, backend, and database components.

### Root Directory Structure
```
peanech-real-estate/
├── frontend/                 # React TSX frontend application
├── backend/                  # Node.js/Express backend API
├── database/                 # Database migrations and seeds
├── shared/                   # Shared types and utilities
├── .gitignore
├── package.json              # Root package.json for monorepo
├── README.md
├── react-project-document.md # This document
```

### Detailed File and Folder Listing

#### 1. Frontend Files (React TSX Application)
**Location:** `frontend/`

**Core Files:**
- `frontend/package.json` - Frontend dependencies
- `frontend/tsconfig.json` - TypeScript configuration
- `frontend/tailwind.config.js` - Tailwind CSS configuration
- `frontend/vite.config.ts` - Vite build configuration
- `frontend/index.html` - Main HTML entry point
- `frontend/src/main.tsx` - React application entry point
- `frontend/src/App.tsx` - Main App component
- `frontend/src/index.css` - Global styles with Tailwind

**Components:**
- `frontend/src/components/ui/` - Shadcn UI components
- `frontend/src/components/layout/Header.tsx` - Header component
- `frontend/src/components/layout/Footer.tsx` - Footer component
- `frontend/src/components/layout/Navigation.tsx` - Navigation component
- `frontend/src/components/common/Button.tsx` - Reusable Button component
- `frontend/src/components/common/Input.tsx` - Input component
- `frontend/src/components/common/Modal.tsx` - Modal component
- `frontend/src/components/property/PropertyCard.tsx` - Property card component
- `frontend/src/components/property/PropertyGrid.tsx` - Property grid component
- `frontend/src/components/search/SearchForm.tsx` - Search form component
- `frontend/src/components/auth/LoginForm.tsx` - Login form
- `frontend/src/components/auth/RegisterForm.tsx` - Registration form

**Pages:**
- `frontend/src/pages/HomePage.tsx` - Home page (converted from HomePage.html and converted from *html from **includes** folder)
- `frontend/src/pages/PropertyDetails.tsx` - Property details page
- `frontend/src/pages/PropertyList.tsx` - Property listings page
- `frontend/src/pages/UserDashboard.tsx` - User dashboard (converted from UserDashboard.html)
- `frontend/src/pages/Login.tsx` - Login page
- `frontend/src/pages/Register.tsx` - Registration page
- `frontend/src/pages/SearchResults.tsx` - Search results page
- `frontend/src/pages/Favorites.tsx` - User favorites page
- `frontend/src/pages/About.tsx` - About page
- `frontend/src/pages/Contact.tsx` - Contact page



**Admin Panel Pages:**
- `frontend/src/pages/admin/Dashboard.tsx` - Admin dashboard
- `frontend/src/pages/admin/UserManagement.tsx` - User management
- `frontend/src/pages/admin/PropertyManagement.tsx` - Property management
- `frontend/src/pages/admin/ContentManagement.tsx` - CMS
- `frontend/src/pages/admin/AgentManagement.tsx` - Agent management
- `frontend/src/pages/admin/FinanceBilling.tsx` - Finance and billing
- `frontend/src/pages/admin/Reports.tsx` - Reports
- `frontend/src/pages/admin/Settings.tsx` - Settings
- `frontend/src/pages/admin/MarketAnalysis.tsx` - Market analysis

**Hooks and Utilities:**
- `frontend/src/hooks/useAuth.tsx` - Authentication hook
- `frontend/src/hooks/useProperties.tsx` - Properties data hook
- `frontend/src/hooks/useSearch.tsx` - Search functionality hook
- `frontend/src/utils/api.ts` - API utility functions
- `frontend/src/utils/auth.ts` - Authentication utilities
- `frontend/src/utils/validation.ts` - Form validation utilities

**Types:**
- `frontend/src/types/user.ts` - User type definitions
- `frontend/src/types/property.ts` - Property type definitions
- `frontend/src/types/api.ts` - API response types

#### 2. Backend Files (Node.js/Express API)
**Location:** `backend/`

**Core Files:**
- `backend/package.json` - Backend dependencies
- `backend/server.js` - Main server file
- `backend/app.js` - Express app configuration

**Routes:**
- `backend/routes/auth.js` - Authentication routes
- `backend/routes/properties.js` - Property routes
- `backend/routes/users.js` - User management routes
- `backend/routes/admin.js` - Admin routes
- `backend/routes/media.js` - Media library routes

**Controllers:**
- `backend/controllers/AuthController.js` - Authentication logic
- `backend/controllers/PropertyController.js` - Property operations
- `backend/controllers/UserController.js` - User operations
- `backend/controllers/AdminController.js` - Admin operations
- `backend/controllers/MediaController.js` - Media operations

**Models:**
- `backend/models/User.js` - User model
- `backend/models/Property.js` - Property model
- `backend/models/Agent.js` - Agent model
- `backend/models/Image.js` - Media model
- `backend/models/Message.js` - Message model

**Middleware:**
- `backend/middleware/auth.js` - Authentication middleware
- `backend/middleware/upload.js` - File upload middleware
- `backend/middleware/validation.js` - Request validation middleware

**Config:**
- `backend/config/database.js` - Database configuration
- `backend/config/auth.js` - Authentication configuration
- `backend/config/upload.js` - Upload configuration

**Utils:**
- `backend/utils/database.js` - Database utilities
- `backend/utils/jwt.js` - JWT utilities
- `backend/utils/email.js` - Email utilities

#### 3. Database Files
**Location:** `database/`

**Migrations:**
- `database/migrations/001_create_users_table.sql`
- `database/migrations/002_create_properties_table.sql`
- `database/migrations/003_create_agents_table.sql`
- `database/migrations/004_create_images_table.sql`
- `database/migrations/005_create_messages_table.sql`
- `database/migrations/006_create_favorites_table.sql`
- `database/migrations/007_create_payments_table.sql` (optional)

**Seeds:**
- `database/seeds/users_seed.sql`
- `database/seeds/properties_seed.sql`
- `database/seeds/agents_seed.sql`

**Schema:**
- `database/schema.sql` - Complete database schema

#### 4. Shared Files
**Location:** `shared/`

- `shared/types/index.ts` - Shared TypeScript types
- `shared/constants/index.ts` - Shared constants
- `shared/utils/index.ts` - Shared utilities

## Database Design

### Tables
1. **users**
   - id (PRIMARY KEY)
   - username
   - email
   - password_hash
   - role (user/admin/agent)
   - created_at
   - updated_at

2. **properties**
   - id (PRIMARY KEY)
   - title
   - description
   - price
   - location
   - type (sale/rent)
   - bedrooms
   - bathrooms
   - area
   - agent_id (FOREIGN KEY)
   - status (active/inactive)
   - created_at
   - updated_at

3. **agents**
   - id (PRIMARY KEY)
   - user_id (FOREIGN KEY)
   - agency_name
   - phone
   - license_number
   - created_at

4. **images**
   - id (PRIMARY KEY)
   - property_id (FOREIGN KEY)
   - filename
   - path
   - alt_text
   - created_at

5. **favorites**
   - id (PRIMARY KEY)
   - user_id (FOREIGN KEY)
   - property_id (FOREIGN KEY)
   - created_at

6. **messages** (for communication)
   - id (PRIMARY KEY)
   - sender_id (FOREIGN KEY)
   - receiver_id (FOREIGN KEY)
   - subject
   - message
   - created_at

7. **payments** (optional for ABA PayWay)
   - id (PRIMARY KEY)
   - user_id (FOREIGN KEY)
   - property_id (FOREIGN KEY)
   - amount
   - payment_method
   - transaction_id
   - status
   - created_at

## Authentication and Authorization
- **Frontend Auth:** React context for authentication state
- **Backend Auth:** JWT tokens with refresh tokens
- **Roles:** User, Agent, Admin with role-based access
- **Security:** Password hashing, input validation, CORS configuration

## Admin Panel Features
- Dashboard with analytics and metrics
- User management (CRUD operations)
- Property listings management
- Agent and agency management
- Content management system
- Communication tools
- Finance and billing management
- Reports and analytics
- Settings configuration
- Media library for image management

## Frontend Features
- Responsive property listings with Shadcn UI components
- Advanced search and filtering
- Property details with image galleries
- User dashboard for managing favorites and profile
- Contact forms and communication
- Location-based property search
- Real estate news and guides
- Partner agency logos display

## API Endpoints (Frontend to Backend)

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `POST /api/auth/refresh` - Refresh JWT token

### Property Endpoints
- `GET /api/properties` - List properties with filters
- `GET /api/properties/:id` - Get property details
- `POST /api/properties` - Create property (agent/admin)
- `PUT /api/properties/:id` - Update property (agent/admin)
- `DELETE /api/properties/:id` - Delete property (admin)

### User Endpoints
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/favorites` - Get user favorites
- `POST /api/users/favorites` - Add to favorites
- `DELETE /api/users/favorites/:id` - Remove from favorites

### Admin Endpoints
- `GET /api/admin/users` - List all users
- `GET /api/admin/properties` - List all properties
- `GET /api/admin/analytics` - Get analytics data
- `POST /api/admin/users/:id/block` - Block user
- `POST /api/admin/properties/:id/approve` - Approve property

### Media Endpoints
- `POST /api/media/upload` - Upload image
- `GET /api/media/:id` - Get image
- `DELETE /api/media/:id` - Delete image

## UI/UX Design

### Color Scheme
- **Primary:** #2563eb (Blue)
- **Primary Dark:** #1d4ed8
- **Secondary:** #059669 (Green)
- **Light:** #f8fafc
- **Dark:** #1e293b
- **Gray:** #64748b
- **Light Gray:** #e2e8f0
- **Border:** #e2e8f0

### Designed Pages
1. **Home Page** (`frontend/src/pages/HomePage.tsx`)
   - Hero section with search
   - Featured properties grid
   - Hot new developments
   - Location filters
   - CTA for property owners
   - News section
   - Partner logos

2. **User Dashboard** (`frontend/src/pages/UserDashboard.tsx`)
   - Dashboard header with analogy
   - Dashboard widgets
   - User perspectives tabs
   - Performance metrics
   - Featured properties

3. **Admin Dashboard** (`frontend/src/pages/admin/Dashboard.tsx`)
   - Analytics widgets
   - Quick actions
   - Recent activities
   - System status

4. **Property Details Page**
   - Image gallery with Shadcn Carousel
   - Property information cards
   - Agent contact modal
   - Similar properties grid

5. **Search Results Page**
   - Filter sidebar with Shadcn components
   - Property grid with pagination
   - Sort options dropdown
   - Map integration (optional)

## Optional Integrations

### ABA PayWay Integration
- **Frontend:** `frontend/src/components/payment/PaymentForm.tsx`
- **Backend:** `backend/routes/payment.js`, `backend/controllers/PaymentController.js`
- **Features:** Card payments, cash payments, QR code generation and reading with JSQR

### REST API for Mobile Apps
- **Endpoints:** As listed in API section
- **Authentication:** JWT tokens
- **Rate Limiting:** Implemented on backend
- **CORS:** Configured for mobile app domains

## Deployment and Setup
1. **Environment Setup:**
   - Node.js 18+
   - MySQL 8.0+
   - npm or yarn
   - Git

2. **Installation Steps:**
   - Clone repository
   - Install frontend dependencies: `cd frontend && npm install`
   - Install backend dependencies: `cd backend && npm install`
   - Set up MySQL database
   - Configure environment variables
   - Run database migrations
   - Seed initial data
   - Start backend: `cd backend && npm start`
   - Start frontend: `cd frontend && npm run dev`

3. **Build Commands:**
   - Frontend build: `cd frontend && npm run build`
   - Backend build: `cd backend && npm run build`

4. **GitHub Repository:**
   - Initialize Git repository
   - Create GitHub repository
   - Set up CI/CD pipeline (GitHub Actions)
   - Maintain version control with proper branching

## Development Guidelines
- Use TypeScript for type safety
- Follow React best practices and hooks
- Use Shadcn UI for consistent components
- Implement proper error boundaries
- Use React Query for data fetching
- Follow RESTful API design
- Implement proper validation on frontend and backend
- Use environment variables for configuration
- Maintain responsive design principles
- Optimize images and bundle size

## Conclusion
This document provides a comprehensive overview of the Peanech Real Estate project structure, features, and implementation details using React 19.2 TSX. The modular architecture ensures maintainability and scalability. The team can proceed with development based on this specification, focusing on clean code, security, and user experience.