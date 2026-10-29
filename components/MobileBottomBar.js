'use client';

import { companyDetails } from '../data/properties';

export default function MobileBottomBar() {
  const getWhatsAppMobileLink = () => {
    const text = `👑 Hello ${companyDetails.shortName}, I am browsing your mobile website and would like to speak directly regarding your luxury societies & rowhouses in Vapi.`;
    return `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="mobile-bottom-bar">
      <a
        href={getWhatsAppMobileLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action-btn wa-primary"
      >
        <span className="action-icon">💬</span>
        <span className="action-text">WhatsApp</span>
      </a>

      <a
        href="tel:+919825188990"
        className="mobile-action-btn call-btn"
      >
        <span className="action-icon">📞</span>
        <span className="action-text">Call Builder</span>
      </a>

      <a
        href="#dream-home-finder"
        className="mobile-action-btn form-btn"
      >
        <span className="action-icon">👑</span>
        <span className="action-text">Dream Finder</span>
      </a>

      <a
        href="#portfolio"
        className="mobile-action-btn tour-btn"
      >
        <span className="action-icon">🏛️</span>
        <span className="action-text">All Projects</span>
      </a>
    </div>
  );
}
