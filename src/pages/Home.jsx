import React from 'react';
import MahaReraBadge from '../components/MahaReraBadge';
import SlidingMarquee from '../components/SlidingMarquee';
import ReviewsSlider from '../components/ReviewsSlider';
import { developerPartners, awardsAndCertifications, companyInfo } from '../data';
import { Home as HomeIcon, Tag, Key, Shield, Handshake, Users, Award, ChevronRight } from 'lucide-react';

export default function Home({ setActivePage, onOpenLightbox }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* ========== HERO SECTION WITH REAL CITY ARCHITECTURE BACKGROUND ========== */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(11, 15, 23, 0.40), rgba(11, 15, 23, 0.52)), url('/background images/img4.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
          {/* Eyebrow RERA Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            background: 'rgba(212, 163, 75, 0.18)',
            border: '1px solid var(--gold)',
            color: 'var(--gold-light)',
            padding: '0.45rem 1.4rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '1.75rem',
            backdropFilter: 'blur(8px)'
          }}>
            <Shield size={16} />
            <span>MahaRERA Certified — Reg. No: {companyInfo.reraNo}</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
          }}>
            {companyInfo.name}
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
            color: 'var(--gold-light)',
            fontWeight: 500,
            marginBottom: '1rem',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic'
          }}>
            {companyInfo.tagline}
          </p>

          <p style={{
            fontSize: '0.95rem',
            color: 'rgba(255, 255, 255, 0.85)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '2.5rem'
          }}>
            {companyInfo.servicesSummary}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
            <button onClick={() => handleNav('contact')} className="btn btn-primary">
              <span>Get Free Consultation</span>
              <ChevronRight size={18} />
            </button>
            <button onClick={() => handleNav('about')} className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#ffffff' }}>
              <span>Meet Our Founder</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
            marginTop: '3.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)' }}>
                Since 2021
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Industry Experience
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)' }}>
                RERA
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Exam Certified
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)' }}>
                20+
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Developer Partners
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)' }}>
                Mumbai
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Prime Locations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAHARERA CERTIFICATION SECTION ========== */}
      <section className="section-padding" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <MahaReraBadge />
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive, transparent real estate solutions across Mumbai tailored to your lifestyle and budget.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Service 1 */}
            <div style={serviceCardStyle}>
              <div style={serviceIconBoxStyle}>
                <HomeIcon size={30} color="var(--gold)" />
              </div>
              <h3 style={serviceTitleStyle}>Buying Properties</h3>
              <p style={serviceDescStyle}>
                Discover your dream home from our extensive network of residential apartments, luxury towers, and commercial units in Mumbai. We provide verified options within your exact budget.
              </p>
              <ul style={serviceListStyle}>
                <li>• New Builder Projects &amp; Pre-launches</li>
                <li>• Ready-to-Move-In Residences</li>
                <li>• Resale Property Verification</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div style={serviceCardStyle}>
              <div style={serviceIconBoxStyle}>
                <Tag size={30} color="var(--gold)" />
              </div>
              <h3 style={serviceTitleStyle}>Selling Properties</h3>
              <p style={serviceDescStyle}>
                Maximize the return on your property investment. Our market knowledge and large network of pre-screened buyers ensure smooth valuations and faster, profitable transactions.
              </p>
              <ul style={serviceListStyle}>
                <li>• Accurate Market Price Valuation</li>
                <li>• Genuine Buyer Matching</li>
                <li>• End-to-End Legal &amp; Registry Assistance</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div style={serviceCardStyle}>
              <div style={serviceIconBoxStyle}>
                <Key size={30} color="var(--gold)" />
              </div>
              <h3 style={serviceTitleStyle}>Renting &amp; Leasing</h3>
              <p style={serviceDescStyle}>
                Looking to rent a modern residence or lease commercial office space? We connect high-quality tenants and landlords with proper lease agreements and background checks.
              </p>
              <ul style={serviceListStyle}>
                <li>• Furnished &amp; Unfurnished Flats</li>
                <li>• Commercial Retail &amp; Office Spaces</li>
                <li>• Registered Rental Agreements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTINUOUS SLIDING WINDOW: DEVELOPER PARTNERS ========== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Network</span>
            <h2 className="section-title">Trusted Developer Partners</h2>
            <p className="section-subtitle">
              We are official channel partners with Mumbai's most reputed builders, ensuring direct access to authentic projects and pricing.
            </p>
          </div>
        </div>

        {/* Continuous Animated Marquee */}
        <SlidingMarquee
          items={developerPartners}
          speed="30s"
          renderItem={(partner, idx) => (
            <div className="partner-card" key={idx} title={partner.name}>
              <img src={partner.src} alt={partner.name} />
              <div className="partner-card-name">{partner.name}</div>
            </div>
          )}
        />
      </section>

      {/* ========== CONTINUOUS SLIDING WINDOW: CERTIFICATIONS & AWARDS ========== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Achievements</span>
            <h2 className="section-title">Certifications &amp; Awards</h2>
            <p className="section-subtitle">
              Recognitions and certificates of appreciation from premier builders reflecting our proven track record. Click any image to inspect.
            </p>
          </div>
        </div>

        {/* Continuous Animated Marquee for Certificates */}
        <SlidingMarquee
          items={awardsAndCertifications}
          speed="36s"
          reverse={true}
          renderItem={(award, idx) => (
            <div 
              className="award-card" 
              key={idx} 
              onClick={() => onOpenLightbox(award)}
            >
              <div className="award-img-wrapper">
                <img src={award.src} alt={award.title} loading="lazy" />
              </div>
              <div className="award-content">
                <div className="award-title">{award.title}</div>
                <div className="award-desc">{award.desc}</div>
              </div>
            </div>
          )}
        />
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">The Shri Balaji Consultancy Advantage</span>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Built on ethics, client satisfaction, and verified compliance with regulatory standards.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            <div style={whyCardStyle}>
              <Shield size={28} color="var(--gold)" />
              <h4 style={{ fontSize: '1.15rem', marginTop: '1rem', marginBottom: '0.4rem', color: 'var(--text-heading)' }}>
                MahaRERA Certified
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                RERA registration No. A51800029215 guarantees total transparency and legal adherence on every transaction.
              </p>
            </div>
            <div style={whyCardStyle}>
              <Handshake size={28} color="var(--gold)" />
              <h4 style={{ fontSize: '1.15rem', marginTop: '1rem', marginBottom: '0.4rem', color: 'var(--text-heading)' }}>
                Direct Builder Access
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Official channel partnership with leading developers like Kalpataru, Arkade, Modi Realty, and PCPL.
              </p>
            </div>
            <div style={whyCardStyle}>
              <Users size={28} color="var(--gold)" />
              <h4 style={{ fontSize: '1.15rem', marginTop: '1rem', marginBottom: '0.4rem', color: 'var(--text-heading)' }}>
                Personalized Guidance
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                We understand your exact family needs, commute criteria, and budget before shortlisting properties.
              </p>
            </div>
            <div style={whyCardStyle}>
              <Award size={28} color="var(--gold)" />
              <h4 style={{ fontSize: '1.15rem', marginTop: '1rem', marginBottom: '0.4rem', color: 'var(--text-heading)' }}>
                Relationships Over Deals
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Our philosophy is building lasting bonds rather than pushing one-off transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTINUOUS SLIDING WINDOW: GOOGLE REVIEWS ========== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Client Feedback</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Authentic reviews from property owners and homebuyers who trusted Shri Balaji Consultancy.
            </p>
          </div>

          <ReviewsSlider />
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section style={{
        backgroundImage: `linear-gradient(rgba(11, 15, 23, 0.85), rgba(11, 15, 23, 0.9)), url('/background images/observation-urban-building-business-steel.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 0',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2.4rem', marginBottom: '1rem' }}>
            Ready to Find Your Dream Property?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Get personalized assistance from Sonal Ekbote &amp; the Shri Balaji Consultancy team today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <button onClick={() => handleNav('contact')} className="btn btn-primary">
              Contact Our Office
            </button>
            <a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const serviceCardStyle = {
  backgroundColor: 'var(--bg-card)',
  border: '1px solid var(--border-color)',
  borderRadius: 'var(--radius-lg)',
  padding: '2.5rem 2rem',
  boxShadow: 'var(--shadow-sm)',
  display: 'flex',
  flexDirection: 'column',
  transition: 'var(--transition)'
};

const serviceIconBoxStyle = {
  width: '60px',
  height: '60px',
  borderRadius: 'var(--radius-md)',
  backgroundColor: 'var(--gold-subtle)',
  border: '1px solid var(--gold-border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.5rem'
};

const serviceTitleStyle = {
  fontSize: '1.45rem',
  fontWeight: 700,
  marginBottom: '0.85rem'
};

const serviceDescStyle = {
  color: 'var(--text-muted)',
  fontSize: '0.95rem',
  lineHeight: 1.7,
  marginBottom: '1.5rem',
  flexGrow: 1
};

const serviceListStyle = {
  listStyle: 'none',
  padding: 0,
  fontSize: '0.88rem',
  color: 'var(--text-main)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  borderTop: '1px solid var(--border-color)',
  paddingTop: '1rem'
};

const whyCardStyle = {
  backgroundColor: 'var(--bg-card)',
  border: '1px solid var(--border-color)',
  borderRadius: 'var(--radius-md)',
  padding: '2rem',
  boxShadow: 'var(--shadow-sm)'
};
