import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { companyInfo } from '../data';

export default function ReviewsSlider() {
  return (
    <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
      {/* Google Trust Header */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        padding: '1rem 1.5rem',
        marginBottom: '1.5rem',
        backgroundColor: 'var(--bg-card)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google" 
            style={{ width: '28px', height: '28px' }} 
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-heading)' }}>5.0</span>
              <div style={{ display: 'flex', gap: '0.15rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbc04" stroke="#fbbc04" />
                ))}
              </div>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Verified Reviews on Google Business Profile
            </div>
          </div>
        </div>

        <a 
          href={companyInfo.googleMapUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-outline"
          style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
        >
          <span>View on Google Maps</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Official SociableKit Google Reviews Container */}
      <div style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        background: 'var(--bg-card)',
        boxShadow: 'var(--shadow-md)',
        position: 'relative',
        minHeight: '560px'
      }}>
        <iframe 
          src="https://widgets.sociablekit.com/google-reviews/iframe/25722119" 
          frameBorder="0" 
          width="100%" 
          height="620px"
          title="Shri Balaji Consultancy Official Google Reviews"
          style={{ 
            display: 'block', 
            width: '100%', 
            minHeight: '580px', 
            border: 'none',
            background: 'transparent'
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
