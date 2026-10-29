'use client';

import { companyDetails } from '../data/properties';

export default function Footer() {
  return (
    <footer className="belikov-footer">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand-meta">
            <div className="brand-logo-text">{companyDetails.brandName}</div>
            <p className="brand-tagline">{companyDetails.tagline}</p>
            <div className="brand-address">📍 {companyDetails.address}</div>
          </div>

          <div className="footer-nav-col">
            <span className="col-title">Projects</span>
            <a href="#projects">Rowhouses & Villas</a>
            <a href="#projects">3 BHK Royal Flats</a>
            <a href="#projects">2 BHK Luxury Homes</a>
            <a href="#projects">1 BHK Grand Suites</a>
            <a href="#projects">Sky Penthouses</a>
          </div>

          <div className="footer-nav-col">
            <span className="col-title">Studio</span>
            <a href="#about">About Architectural Vision</a>
            <a href="#plans">3D Simulator & Blueprints</a>
            <a href="#portfolio">Completed Societies</a>
            <a href="#contact">Schedule Site Visit</a>
          </div>

          <div className="footer-contact-col">
            <span className="col-title">Direct Connect</span>
            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-btn"
            >
              <span>💬 Direct WhatsApp Desk</span>
              <span>↗</span>
            </a>
            <div className="contact-tel">📞 {companyDetails.phone}</div>
            <div className="contact-mail">✉️ {companyDetails.email}</div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="copy-text">
            © 2026 {companyDetails.brandName}. All rights reserved. Crafted for Vapi, Gujarat.
          </div>
          <div className="legal-links">
            <a href="#contact">RERA Registered</a>
            <span>•</span>
            <a href="#contact">Privacy Policy</a>
            <span>•</span>
            <a href="#contact">Direct Developer Desk</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
