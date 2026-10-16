import React from 'react';
import { companyInfo } from '../data';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-footer)',
      color: '#94a3b8',
      paddingTop: '5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          paddingBottom: '4rem'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img 
                src="/Shri Balaji Consultancy logo.jpeg" 
                alt="Shri Balaji Consultancy" 
                style={{ height: '48px', borderRadius: '4px' }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                  Shri Balaji
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Consultancy
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem', color: '#94a3b8' }}>
              Your premier RERA-certified real estate consultancy in Mumbai. Guiding clients with trust, integrity, and market expertise since 2021.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href={companyInfo.socials.instagram} target="_blank" rel="noopener noreferrer" style={socialBtnStyle} aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={companyInfo.socials.facebook} target="_blank" rel="noopener noreferrer" style={socialBtnStyle} aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={companyInfo.socials.youtube} target="_blank" rel="noopener noreferrer" style={socialBtnStyle} aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href={companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" style={socialBtnStyle} aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={footerHeadingStyle}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button onClick={() => handleNav('home')} style={footerLinkBtnStyle}>Home</button>
              <button onClick={() => handleNav('about')} style={footerLinkBtnStyle}>About Founder &amp; Story</button>
              <button onClick={() => handleNav('contact')} style={footerLinkBtnStyle}>Contact &amp; Visit Office</button>
              <a href={companyInfo.googleSiteUrl} target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
                <span>Google Site Profile</span>
                <ArrowUpRight size={14} />
              </a>
              <a href={companyInfo.companyLinkedin} target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
                <span>Company LinkedIn Page</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={footerHeadingStyle}>Our Real Estate Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <div>• Residential Property Purchase</div>
              <div>• Commercial Spaces &amp; Offices</div>
              <div>• Property Resale &amp; Valuation</div>
              <div>• Rental &amp; Leasing Advisory</div>
              <div>• Trusted Builder Channel Partner</div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={footerHeadingStyle}>Office &amp; Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <MapPin size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{companyInfo.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Phone size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
                <a href={`tel:${companyInfo.phoneRaw}`} style={{ color: '#ffffff' }}>{companyInfo.phone}</a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Mail size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${companyInfo.email}`} style={{ color: '#ffffff' }}>{companyInfo.email}</a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Clock size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
                <span>Tue–Sun: 10:30 AM – 7 PM<br/>Mon: 11 AM – 5 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1.75rem 0',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img 
              src="/Maharera logo/maharera logo.jpg.jpeg" 
              alt="MahaRERA" 
              style={{ width: '28px', height: '28px', borderRadius: '50%' }}
            />
            <span style={{ color: '#ffffff' }}>
              MahaRERA Reg. No: <strong style={{ color: 'var(--gold)' }}>{companyInfo.reraNo}</strong>
            </span>
          </div>
          <div>
            © {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialBtnStyle = {
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'var(--transition)'
};

const footerHeadingStyle = {
  fontFamily: 'var(--font-heading)',
  color: '#ffffff',
  fontSize: '1.15rem',
  marginBottom: '1.25rem'
};

const footerLinkBtnStyle = {
  background: 'none',
  border: 'none',
  padding: 0,
  textAlign: 'left',
  color: '#94a3b8',
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'var(--transition)'
};

const footerLinkStyle = {
  color: '#94a3b8',
  fontSize: '0.9rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.25rem'
};
