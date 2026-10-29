'use client';

import { useState } from 'react';
import { companyDetails } from '../data/properties';

export default function DreamHomeForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    configuration: '3 BHK Royal Residence',
    location: 'Chala Prime, Vapi',
    budget: '₹60L - ₹1 Cr',
    possession: 'Ready to Move In',
    freeCabPickup: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const configs = [
    { label: '1 BHK Grand Suite', area: '64 m² / 685 sq.ft', tag: 'From ₹38L' },
    { label: '2 BHK Palatial Home', area: '110 m² / 1,180 sq.ft', tag: 'From ₹58L' },
    { label: '3 BHK Royal Residence', area: '175 m² / 1,890 sq.ft', tag: 'From ₹95L' },
    { label: 'Sovereign Rowhouse', area: '315 m² / 3,400 sq.ft', tag: 'From ₹1.85 Cr' },
    { label: 'Sky Duplex Penthouse', area: '225 m² / 2,420 sq.ft', tag: 'From ₹1.45 Cr' },
  ];

  const locations = [
    'Chala Prime (VIP Residential Belt)',
    'Gunjan Junction (Highway Corridor)',
    'VIP Daman Road (Luxury Rowhouse Enclave)',
    'Koparli Road (Green Serene Living)',
    'Any Prime Location in Vapi',
  ];

  const budgets = ['₹35L - ₹55L', '₹55L - ₹90L', '₹90L - ₹1.5 Cr', '₹1.5 Cr - ₹3 Cr+'];

  const generateWhatsAppMessage = () => {
    const text = `Hello ${companyDetails.brandName}, I would like to inquire about a home in Vapi:
• Configuration: ${formData.configuration}
• Preferred Area: ${formData.location}
• Investment Budget: ${formData.budget}
• Possession Timeline: ${formData.possession}
• VIP AC Cab Pickup: ${formData.freeCabPickup ? 'Yes, please schedule' : 'Not needed'}
• Name: ${formData.name || 'Discerning Buyer'}
• Phone: ${formData.phone || 'Sent via WhatsApp'}

Please share the latest architectural plans, rate sheets & society tour.`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter your 10-digit WhatsApp number.');
      return;
    }
    const url = `https://wa.me/${companyDetails.whatsappNumber}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="studio-inquiry-section">
      <div className="container">
        <div className="inquiry-glass-card">
          <div className="inquiry-header-group">
            <span className="inquiry-tag">Inquire & Consult</span>
            <h2 className="inquiry-main-title">Build Your Dream in Vapi</h2>
            <p className="inquiry-desc">
              Select what configuration and area best suits your family. We connect you directly with the
              executive desk—zero broker commissions, guaranteed transparent pricing.
            </p>
          </div>

          {submitted ? (
            <div className="inquiry-success-box">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Thank You, {formData.name || 'Guest'}</h3>
              <p className="success-sub">
                Your inquiry for a <strong>{formData.configuration}</strong> in <strong>{formData.location}</strong> has been
                forwarded to the managing director’s desk.
              </p>
              <div className="success-actions">
                <a
                  href={`https://wa.me/${companyDetails.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-success-wa"
                >
                  <span>💬 Open WhatsApp Chat Directly</span>
                </a>
                <button
                  type="button"
                  className="btn-success-reset"
                  onClick={() => setSubmitted(false)}
                >
                  Edit Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="inquiry-form-grid">
              {/* Step 1: Configuration choice */}
              <div className="form-step-block">
                <label className="step-label">1. Choose Desired Configuration</label>
                <div className="configs-pill-grid">
                  {configs.map((c) => {
                    const isSelected = formData.configuration === c.label;
                    return (
                      <div
                        key={c.label}
                        className={`config-pill-card ${isSelected ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, configuration: c.label })}
                      >
                        <div className="card-top-line">
                          <span className="config-name">{c.label}</span>
                          <span className="config-tag">{c.tag}</span>
                        </div>
                        <span className="config-area">{c.area}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Location & Budget */}
              <div className="form-row-2col">
                <div className="form-step-block">
                  <label className="step-label">2. Preferred Location in Vapi</label>
                  <select
                    className="studio-select"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-step-block">
                  <label className="step-label">3. Approximate Budget</label>
                  <div className="budget-chips-list">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        className={`budget-chip-btn ${formData.budget === b ? 'active' : ''}`}
                        onClick={() => setFormData({ ...formData, budget: b })}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div className="form-row-2col">
                <div className="form-step-block">
                  <label className="step-label">4. Your Name</label>
                  <input
                    type="text"
                    className="studio-input"
                    placeholder="e.g. Rajeshbhai Shah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-step-block">
                  <label className="step-label">5. WhatsApp Number</label>
                  <div className="phone-prefix-wrap">
                    <span className="prefix">+91</span>
                    <input
                      type="tel"
                      className="studio-input phone-field"
                      placeholder="98251 XXXXX"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              {/* VIP Cab Checkbox */}
              <div className="checkbox-cab-row">
                <label className="cab-label">
                  <input
                    type="checkbox"
                    checked={formData.freeCabPickup}
                    onChange={(e) => setFormData({ ...formData, freeCabPickup: e.target.checked })}
                  />
                  <span>
                    Include complimentary door-to-door AC cab pickup in Vapi / Daman for site visit.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="form-submit-row">
                <button type="submit" className="studio-submit-pill-btn">
                  <span className="pill-wa-icon">💬</span>
                  <span className="pill-text-main">Inquire on WhatsApp with Owner</span>
                  <span className="pill-arrow-right">↗</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
