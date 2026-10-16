import React, { useState } from 'react';
import { Sun, Moon, Menu, X, PhoneCall } from 'lucide-react';
import { companyInfo } from '../data';

export default function Navbar({ activePage, setActivePage, isDark, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCall = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(companyInfo.phone).catch(() => {});
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'var(--bg-navbar)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      transition: 'var(--transition)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '88px'
      }}>
        {/* Brand Logo - Made larger and clearly legible */}
        <button 
          onClick={() => handleNav('home')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            cursor: 'pointer',
            textAlign: 'left',
            padding: 0
          }}
        >
          <img 
            src="/Shri Balaji Consultancy logo.jpeg" 
            alt="Shri Balaji Consultancy Logo" 
            className="brand-logo-img"
            style={{ 
              height: '66px', 
              width: 'auto', 
              borderRadius: '6px',
              boxShadow: 'var(--shadow-sm)'
            }}
          />
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.35rem',
              fontWeight: 800,
              color: 'var(--text-heading)',
              lineHeight: 1.15
            }}>
              Shri Balaji
            </div>
            <div style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--gold)'
            }}>
              Consultancy
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav style={{
          display: 'none',
          gap: '2.5rem',
          alignItems: 'center'
        }} className="desktop-nav">
          <button 
            onClick={() => handleNav('home')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.98rem',
              fontWeight: activePage === 'home' ? 700 : 500,
              color: activePage === 'home' ? 'var(--gold)' : 'var(--text-heading)',
              borderBottom: activePage === 'home' ? '2px solid var(--gold)' : '2px solid transparent',
              padding: '0.5rem 0',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('about')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.98rem',
              fontWeight: activePage === 'about' ? 700 : 500,
              color: activePage === 'about' ? 'var(--gold)' : 'var(--text-heading)',
              borderBottom: activePage === 'about' ? '2px solid var(--gold)' : '2px solid transparent',
              padding: '0.5rem 0',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
          >
            About Us
          </button>
          <button 
            onClick={() => handleNav('contact')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.98rem',
              fontWeight: activePage === 'contact' ? 700 : 500,
              color: activePage === 'contact' ? 'var(--gold)' : 'var(--text-heading)',
              borderBottom: activePage === 'contact' ? '2px solid var(--gold)' : '2px solid transparent',
              padding: '0.5rem 0',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
          >
            Contact Us
          </button>
        </nav>

        {/* Actions: Theme Toggle, Mobile Call, Desktop Call, Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-surface)',
              color: 'var(--gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition)'
            }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Call Now button - visible on desktop and mobile */}
          <a 
            href={`tel:${companyInfo.phoneRaw}`}
            onClick={handleCall}
            className="btn btn-primary"
            style={{ 
              padding: '0.65rem 1.35rem', 
              fontSize: '0.9rem',
              display: 'inline-flex'
            }}
            id="nav-cta-btn"
            title="Call Shri Balaji Consultancy"
          >
            <PhoneCall size={16} />
            <span>Call Now</span>
          </a>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-heading)',
              cursor: 'pointer',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center'
            }}
            className="mobile-toggle"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '2px solid var(--gold)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <button 
            onClick={() => handleNav('home')}
            style={{
              background: 'none',
              border: 'none',
              textAlign: 'left',
              fontSize: '1.15rem',
              fontWeight: 600,
              color: activePage === 'home' ? 'var(--gold)' : 'var(--text-heading)',
              padding: '0.5rem 0'
            }}
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('about')}
            style={{
              background: 'none',
              border: 'none',
              textAlign: 'left',
              fontSize: '1.15rem',
              fontWeight: 600,
              color: activePage === 'about' ? 'var(--gold)' : 'var(--text-heading)',
              padding: '0.5rem 0'
            }}
          >
            About Us
          </button>
          <button 
            onClick={() => handleNav('contact')}
            style={{
              background: 'none',
              border: 'none',
              textAlign: 'left',
              fontSize: '1.15rem',
              fontWeight: 600,
              color: activePage === 'contact' ? 'var(--gold)' : 'var(--text-heading)',
              padding: '0.5rem 0'
            }}
          >
            Contact Us
          </button>

          <a 
            href={`tel:${companyInfo.phoneRaw}`}
            onClick={handleCall}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
          >
            <PhoneCall size={18} />
            <span>Call Now (+91 81082 60262)</span>
          </a>

          <a 
            href={companyInfo.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <i className="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
          #nav-cta-btn { display: inline-flex !important; }
        }
        @media (max-width: 768px) {
          .brand-logo-img { height: 54px !important; }
          #nav-cta-btn { padding: 0.5rem 0.9rem !important; font-size: 0.82rem !important; }
          #nav-cta-btn span { display: inline !important; }
        }
        @media (max-width: 480px) {
          .brand-logo-img { height: 48px !important; }
          #nav-cta-btn { padding: 0.45rem 0.75rem !important; font-size: 0.78rem !important; }
        }
      `}</style>
    </header>
  );
}
