import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

// Components
import TopBar from './components/ui/TopBar';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

// Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <TopBar />
            <Header />
            
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard/:role" element={<DashboardPage />} />
                <Route path="/properties" element={<div>Properties Page</div>} />
                <Route path="/agents" element={<div>Agents Page</div>} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
