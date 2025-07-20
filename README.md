# React PeanechEstate

A modern, full-stack real estate platform built with React, TypeScript, and Tailwind CSS. PeanechEstate offers seamless property discovery, advanced booking management, agent analytics, and cutting-edge UI/UX. Designed for responsiveness, scalability, and optimal performance.

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technical Stack](#technical-stack)
- [Core Components](#core-components)
- [Dashboards](#dashboards)
- [Marketing & Business Features](#marketing--business-features)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### 1. Complete UI Structure

- **TopBar:** Contact information and social media icons.
- **Header:** Logo, navigation links, dark mode toggle, user avatar dropdown.
- **Footer:** Responsive, includes contact info, newsletter signup, and quick links.

### 2. Main Sections

- **Hero Section:** Futuristic design, animated elements, and property search form.
- **Core Features:** 8 key functionalities with elegant icons.
- **Technical Stack:** Showcases modern technologies and app performance.
- **Properties Section:** Featured listings with integrated booking system.
- **Agents Section:** Detailed agent profiles, ratings, and contact.
- **Marketing Features:** Social media integration and newsletter subscription.
- **Payment Plans:** Three transparent subscription tiers for users.

### 3. Advanced Functionality

- **Dark Mode:** Toggle with system preference detection.
- **User Authentication:** Context-driven, with role-based access (User/Agent/Admin).
- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Booking Modal:** Schedule property viewings directly from listings.
- **Interactive Elements:** Framer Motion-powered animations for engagement.

### 4. Dashboard System

- **User Dashboard:** Saved properties, scheduled tours, and messages.
- **Agent Dashboard:** Manage listings, leads, and view sales performance.
- **Admin Dashboard:** Analytics, property evaluation, asset management.

### 5. Technical Features

- **TypeScript:** End-to-end type safety.
- **React Router:** Intuitive navigation.
- **Faker.js:** Mock data for development and testing.
- **Tailwind CSS:** Custom themes and animations.
- **Context API:** Streamlined global state management.
- **Modular Components:** Reusable and maintainable code structure.

### 6. Marketing & Business Features

- **Newsletter Signup:** Email validation and subscription.
- **Social Media Integration:** Live follower counts displayed.
- **Performance Analytics:** Real-time metrics and market insights.
- **Subscription Plans:** Feature comparisons and secure payment-ready.
- **Payment Integration:** Secure, modern payment setup (Stripe-ready).

---

## Screenshots

> _Add screenshots/gifs here to showcase UI, Dashboards, and Responsiveness._

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Installation

```bash
git clone https://github.com/sisovin/react-peanech-estate.git
cd react-peanech-estate
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm start
# or
yarn start
```

Visit [http://localhost:3000](http://localhost:3000) to explore the app.

---

## Project Structure

```
src/
│
├── components/      # Reusable UI components (Header, Footer, TopBar, etc.)
├── sections/        # Main page sections (Hero, Features, Properties, Agents, etc.)
├── dashboards/      # User, Agent, and Admin dashboard components
├── context/         # Global state providers (AuthContext, ThemeContext, etc.)
├── hooks/           # Custom React hooks
├── routes/          # App routing definitions
├── utils/           # Utility functions (e.g., with Faker.js)
├── assets/          # Static assets (images, icons, etc.)
└── App.tsx          # App root
```

---

## Technical Stack

- **Frontend:** React 18+, TypeScript, Tailwind CSS (custom theme)
- **Routing:** React Router DOM
- **State Management:** Context API
- **Mock Data:** Faker.js
- **Animations:** Framer Motion
- **Testing:** Jest, React Testing Library (recommended)
- **Build Tool:** Vite or Create React App

---

## Core Components

- **TopBar:** Social links, contact info
- **Header:** Navigation, logo, avatar, dark mode
- **Footer:** Newsletter, contact, links
- **HeroSection:** Animated main landing
- **FeaturesSection:** 8 core features with icons
- **TechStackSection:** Logos and performance metrics
- **PropertiesSection:** Property cards, search, booking modal
- **AgentsSection:** Profiles, ratings, contact
- **PaymentPlans:** Subscription tiers, comparison table
- **NewsletterSignup:** Form with validation
- **SocialMediaWidget:** Live follower stats

---

## Dashboards

- **User Dashboard:** Saved listings, tours, inbox
- **Agent Dashboard:** Manage properties, track leads
- **Admin Dashboard:** Analytics, manage assets/evaluations

---

## Marketing & Business Features

- Newsletter capture (email validation)
- Social media feeds and counts
- Performance and market analytics display
- Subscription plans with secure checkout (Stripe-ready)

---

## Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

MIT © [sisovin](https://github.com/sisovin)

---

**Questions?**  
Open an issue or contact the maintainer at [GitHub](https://github.com/sisovin).

---
