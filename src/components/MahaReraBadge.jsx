import React from 'react';
import { companyInfo } from '../data';
import { ShieldCheck } from 'lucide-react';

export default function MahaReraBadge() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '2rem 0' }}>
      <div className="rera-center-badge">
        <img 
          src="/Maharera logo/maharera logo.jpg.jpeg" 
          alt="MahaRERA Logo" 
          className="rera-badge-logo"
        />
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--text-heading)'
          }}>
            <ShieldCheck size={20} color="var(--gold)" />
            <span>MahaRERA Certified Professional</span>
          </div>
          <div style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--gold)',
            letterSpacing: '0.04em',
            margin: '0.2rem 0'
          }}>
            Registration No: {companyInfo.reraNo}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Maharashtra Real Estate Regulatory Authority • Verified & Compliant
          </div>
        </div>
      </div>
    </div>
  );
}
