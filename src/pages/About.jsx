import React from 'react';
import MahaReraBadge from '../components/MahaReraBadge';
import SlidingMarquee from '../components/SlidingMarquee';
import { founderInfo, companyInfo, awardsAndCertifications } from '../data';
import { Calendar, Award, BookOpen, HeartHandshake, Eye, ArrowUpRight } from 'lucide-react';

export default function About({ onOpenLightbox, setActivePage }) {
  return (
    <div>
      {/* Page Header */}
      <section style={{
        backgroundImage: `linear-gradient(rgba(11, 15, 23, 0.8), rgba(11, 15, 23, 0.9)), url('/background images/friendly-architecture-pics__media_id=4203510.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 0 4rem',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        <div className="container">
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Our Identity &amp; Mission</span>
          <h1 style={{ color: '#ffffff', fontSize: '3rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>About Us</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
            Building trusted real estate relationships across Mumbai since 2021
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section style={{ backgroundColor: 'var(--bg-alt)', padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '850px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            backgroundColor: 'var(--gold-subtle)',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            marginBottom: '1.25rem'
          }}>
            <Eye size={26} />
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.85rem' }}>Our Vision</h2>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: 'var(--text-heading)'
          }}>
            "{companyInfo.vision}"
          </p>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Leadership</span>
            <h2 className="section-title">Meet Our Founder</h2>
            <p className="section-subtitle">The vision and driving force behind Shri Balaji Consultancy</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {/* Founder Column */}
            <div style={{ maxWidth: '420px', margin: '0 auto', width: '100%' }}>
              {/* Founder Photo Frame */}
              <div style={{
                position: 'relative',
                padding: '10px',
                borderRadius: '20px',
                background: 'linear-gradient(145deg, rgba(212, 175, 55, 0.25) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(212, 175, 55, 0.15) 100%)',
                border: '2px solid var(--gold)',
                boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.15)'
              }}>
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.4)'
                }}>
                  <img 
                    src="/owner's photo/sonal_ekbote.jpeg" 
                    alt="Mrs. Sonal Ekbote - Founder"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Experience Badge positioned neatly on bottom-right of photo frame */}
                <div style={{
                  position: 'absolute',
                  bottom: '22px',
                  right: '-14px',
                  zIndex: 3,
                  backgroundColor: 'var(--bg-surface)',
                  border: '1.5px solid var(--gold)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.8rem 1.3rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(212, 175, 55, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backdropFilter: 'blur(8px)'
                }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>
                    5+
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-heading)', lineHeight: 1.25, letterSpacing: '0.04em' }}>
                    Years in<br/>Real Estate
                  </div>
                </div>
              </div>

              {/* Founder Name & Title cleanly below photo frame */}
              <div style={{ textAlign: 'center', marginTop: '1.4rem' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.55rem', fontWeight: 800, color: 'var(--text-heading)', letterSpacing: '0.02em' }}>
                  Mrs. Sonal Ekbote
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '0.3rem' }}>
                  Founder &amp; Proprietor
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div>
              <h3 style={{ fontSize: '2.4rem', marginBottom: '0.25rem', color: 'var(--text-heading)' }}>
                {founderInfo.name}
              </h3>
              <div style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1.5rem'
              }}>
                {founderInfo.role}
              </div>

              {founderInfo.bio.map((paragraph, idx) => (
                <p key={idx} style={{
                  fontSize: '0.98rem',
                  lineHeight: 1.8,
                  marginBottom: '1.15rem',
                  color: idx === 0 ? 'var(--text-heading)' : 'var(--text-muted)'
                }}>
                  {paragraph}
                </p>
              ))}

              {/* Founder Quote */}
              <blockquote style={{
                margin: '1.75rem 0',
                padding: '1.25rem 1.5rem',
                borderLeft: '4px solid var(--gold)',
                backgroundColor: 'var(--gold-subtle)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--text-heading)'
              }}>
                "{founderInfo.quote}"
              </blockquote>

              <a 
                href={companyInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
                style={{ marginTop: '0.5rem' }}
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* 4 Small Highlights Below Founder Intro */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginTop: '4.5rem',
            maxWidth: '1100px',
            margin: '4.5rem auto 0'
          }}>
            <div style={highlightCardStyle}>
              <div style={highlightIconBoxStyle}><Calendar size={22} color="var(--gold)" /></div>
              <div>
                <h4 style={highlightTitleStyle}>Since 2021</h4>
                <p style={highlightDescStyle}>Continuous practical experience in Mumbai's real estate sector</p>
              </div>
            </div>
            <div style={highlightCardStyle}>
              <div style={highlightIconBoxStyle}><Award size={22} color="var(--gold)" /></div>
              <div>
                <h4 style={highlightTitleStyle}>RERA Certified</h4>
                <p style={highlightDescStyle}>Qualified official professional examination with MahaRERA certification</p>
              </div>
            </div>
            <div style={highlightCardStyle}>
              <div style={highlightIconBoxStyle}><BookOpen size={22} color="var(--gold)" /></div>
              <div>
                <h4 style={highlightTitleStyle}>Continuous Learning</h4>
                <p style={highlightDescStyle}>Active participation in industry seminars &amp; regulatory workshops</p>
              </div>
            </div>
            <div style={highlightCardStyle}>
              <div style={highlightIconBoxStyle}><HeartHandshake size={22} color="var(--gold)" /></div>
              <div>
                <h4 style={highlightTitleStyle}>Client First</h4>
                <p style={highlightDescStyle}>Personalized guidance focused on trust, transparency &amp; satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MahaRERA Badge */}
      <section style={{ backgroundColor: 'var(--bg-alt)', padding: '4rem 0' }}>
        <div className="container">
          <MahaReraBadge />
        </div>
      </section>

      {/* Certifications Carousel in About page */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Builder Recognitions</span>
            <h2 className="section-title">Certifications &amp; Awards</h2>
            <p className="section-subtitle">Official certificates awarded by our developer partners.</p>
          </div>
        </div>

        <SlidingMarquee
          items={awardsAndCertifications}
          speed="34s"
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
    </div>
  );
}

const highlightCardStyle = {
  backgroundColor: 'var(--bg-card)',
  border: '1px solid var(--border-color)',
  borderRadius: 'var(--radius-md)',
  padding: '1.5rem',
  boxShadow: 'var(--shadow-sm)',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
  transition: 'var(--transition)'
};

const highlightIconBoxStyle = {
  width: '46px',
  height: '46px',
  borderRadius: 'var(--radius-sm)',
  backgroundColor: 'var(--gold-subtle)',
  border: '1px solid var(--gold-border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};

const highlightTitleStyle = {
  fontSize: '1.05rem',
  fontWeight: 700,
  marginBottom: '0.25rem',
  color: 'var(--text-heading)'
};

const highlightDescStyle = {
  fontSize: '0.85rem',
  color: 'var(--text-muted)',
  lineHeight: 1.5
};
