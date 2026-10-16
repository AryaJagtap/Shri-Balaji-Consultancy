import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { companyInfo } from './data';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('sbc_theme');
    if (saved) return saved === 'dark';
    return true; // Default to luxury dark theme as requested by user
  });
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('sbc_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />

      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <Home 
            setActivePage={setActivePage} 
            onOpenLightbox={(img) => setLightboxImage(img)} 
          />
        )}
        {activePage === 'about' && (
          <About 
            setActivePage={setActivePage} 
            onOpenLightbox={(img) => setLightboxImage(img)} 
          />
        )}
        {activePage === 'contact' && (
          <Contact />
        )}
      </main>

      <Footer setActivePage={setActivePage} />

      {/* Floating WhatsApp Action */}
      <a 
        href={companyInfo.whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float-btn"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Lightbox Modal */}
      <Lightbox 
        image={lightboxImage} 
        onClose={() => setLightboxImage(null)} 
      />
    </div>
  );
}
