import React, { useState } from 'react';
import { companyInfo } from '../data';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Navigation } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Buying Residential Property',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Direct WhatsApp message with full details filled by client
    const textMsg = 
`*New Property Inquiry — Shri Balaji Consultancy*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email}
🏢 *Service:* ${formData.service}
📝 *Requirement:* ${formData.message}`;

    const waUrl = `https://wa.me/918108260262?text=${encodeURIComponent(textMsg)}`;
    
    // Immediately open WhatsApp chat with pre-filled message
    window.open(waUrl, '_blank');
  };

  return (
    <div>
      {/* Page Header */}
      <section style={{
        backgroundImage: `linear-gradient(rgba(11, 15, 23, 0.8), rgba(11, 15, 23, 0.9)), url('/background images/observation-urban-building-business-steel.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 0 4rem',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        <div className="container">
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Connect With Us</span>
          <h1 style={{ color: '#ffffff', fontSize: '3rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Contact Us</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem' }}>
            We're here to assist your property search, sale, or investment in Mumbai
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}>
            {/* Left: Contact Info & Working Hours */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--text-heading)',
                marginBottom: '0.5rem'
              }}>
                Get in Touch
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Visit our office in Goregaon West, give us a call, or send us a WhatsApp message anytime.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={contactIconStyle}><MapPin size={22} color="var(--gold)" /></div>
                  <div>
                    <div style={contactLabelStyle}>Office Address</div>
                    <div style={contactValueStyle}>{companyInfo.address}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={contactIconStyle}><Phone size={22} color="var(--gold)" /></div>
                  <div>
                    <div style={contactLabelStyle}>Phone &amp; WhatsApp</div>
                    <a href={`tel:${companyInfo.phoneRaw}`} style={contactValueStyle}>{companyInfo.phone}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={contactIconStyle}><Mail size={22} color="var(--gold)" /></div>
                  <div>
                    <div style={contactLabelStyle}>Email Address</div>
                    <a href={`mailto:${companyInfo.email}`} style={contactValueStyle}>{companyInfo.email}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={contactIconStyle}><i className="fab fa-linkedin-in" style={{ fontSize: '20px', color: 'var(--gold)' }}></i></div>
                  <div>
                    <div style={contactLabelStyle}>Company LinkedIn</div>
                    <a href={companyInfo.companyLinkedin} target="_blank" rel="noopener noreferrer" style={contactValueStyle}>
                      Shri Balaji Consultancy Real Estate
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div style={{
                borderTop: '1px solid var(--border-color)',
                paddingTop: '1.75rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--text-heading)'
                }}>
                  <Clock size={20} color="var(--gold)" />
                  <span>Working Hours</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                  {companyInfo.workingHours.map((wh, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.3rem 0',
                      borderBottom: idx === companyInfo.workingHours.length - 1 ? 'none' : '1px dashed var(--border-light)'
                    }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>{wh.day}</span>
                      <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{wh.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--text-heading)',
                marginBottom: '0.5rem'
              }}>
                Send an Inquiry
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Fill out the details below and we will prepare tailored property recommendations for you.
              </p>

              {submitted && (
                <div style={{
                  backgroundColor: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid #25d366',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#25d366',
                  fontWeight: 600
                }}>
                  <CheckCircle size={22} />
                  <span>Inquiry prepared! Opening WhatsApp to send your details directly to Shri Balaji Consultancy...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={formLabelStyle}>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={formInputStyle}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={formLabelStyle}>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={formInputStyle}
                    />
                  </div>
                  <div>
                    <label style={formLabelStyle}>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={formInputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={formLabelStyle}>Service Required</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={formInputStyle}
                  >
                    <option value="Buying Residential Property">Buying Residential Property (Flats / Apartments)</option>
                    <option value="Buying Commercial Property">Buying Commercial Space / Office</option>
                    <option value="Selling Property">Selling My Property (Valuation &amp; Buyers)</option>
                    <option value="Renting / Leasing">Renting / Leasing (Residential &amp; Commercial)</option>
                    <option value="Investment Advisory">Real Estate Investment Advisory</option>
                  </select>
                </div>

                <div>
                  <label style={formLabelStyle}>Your Property Requirements / Message *</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Specify budget, preferred locations in Mumbai, BHK configuration, or details about the property..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={formInputStyle}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={18} />
                  <span>Send Inquiry</span>
                </button>
              </form>
            </div>
          </div>

          {/* Google Maps Section */}
          <div style={{ marginTop: '4.5rem' }}>
            <div className="section-header" style={{ marginBottom: '2rem' }}>
              <span className="section-eyebrow">Location</span>
              <h2 className="section-title">Visit Our Office</h2>
              <p className="section-subtitle">Conveniently located on Mahatma Gandhi Road, Goregaon West, Mumbai</p>
            </div>

            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              background: 'var(--bg-card)'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123456789!2d72.8407873!3d19.1630285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c8be3289e1%3A0x1d16c65267e3048f!2sShri%20Balaji%20Consultancy!5e0!3m2!1sen!2sin!4v1697000000000!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0, display: 'block' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <a 
                href={companyInfo.googleMapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
              >
                <Navigation size={18} />
                <span>Open in Google Maps for Navigation</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const contactIconStyle = {
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

const contactLabelStyle = {
  fontSize: '0.8rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--gold)',
  marginBottom: '0.2rem'
};

const contactValueStyle = {
  fontSize: '0.95rem',
  color: 'var(--text-heading)',
  fontWeight: 500,
  lineHeight: 1.5
};

const formLabelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 600,
  marginBottom: '0.4rem',
  color: 'var(--text-heading)'
};

const formInputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--border-color)',
  backgroundColor: 'var(--bg-surface)',
  color: 'var(--text-heading)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'var(--transition)'
};
