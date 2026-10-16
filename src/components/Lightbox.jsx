import React from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="lightbox-modal" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close modal">
          <X size={32} />
        </button>
        <img src={image.src} alt={image.title} />
        <div style={{
          marginTop: '1rem',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.25rem' }}>{image.title}</h3>
          <p style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>{image.desc}</p>
        </div>
      </div>
    </div>
  );
}
