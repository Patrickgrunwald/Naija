import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { FAQ } from './pages/FAQ';
import { Favorites } from './pages/Favorites';
import { Compare } from './pages/Compare';
import { Reviews } from './pages/Reviews';
import { Blog } from './pages/Blog';
import { Messages } from './pages/Messages';
import { Settings } from './pages/Settings';
import { ArchitectDashboard } from './pages/architect/Dashboard';
import { ArchitectProfile } from './pages/architect/Profile';
import { ArchitectReviews } from './pages/architect/Reviews';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/architect/dashboard" element={<ArchitectDashboard />} />
            <Route path="/architect/profile" element={<ArchitectProfile />} />
            <Route path="/architect/reviews" element={<ArchitectReviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
