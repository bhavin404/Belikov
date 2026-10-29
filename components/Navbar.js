'use client';

import { useState } from 'react';
import { companyDetails } from '../data/properties';

export default function Navbar({ onOpenInquiry }) {
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="belikov-floating-header">
      <div className="nav-pill-container">
        {/* Left: Brand Icon + Title */}
        <a href="#" className="nav-brand-group">
          <div className="nav-brand-pillars-icon">
            <span className="pillar-bar p1"></span>
            <span className="pillar-bar p2"></span>
            <span className="pillar-bar p3"></span>
          </div>
          <span className="nav-brand-title">{companyDetails.brandName}</span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="nav-center-menu">
          <div
            className="nav-link-dropdown-wrap"
            onMouseEnter={() => setProjectsDropdown(true)}
            onMouseLeave={() => setProjectsDropdown(false)}
          >
            <a href="#projects" className="nav-menu-link with-chevron">
              <span>Projects</span>
              <span className="chevron-down">⌵</span>
            </a>

            {projectsDropdown && (
              <div className="nav-dropdown-flyout">
                <a href="#projects" className="dropdown-item">
                  <span className="drop-title">Triplex Rowhouses & Villas</span>
                  <span className="drop-sub">315 m² • VIP Daman Road</span>
                </a>
                <a href="#projects" className="dropdown-item">
                  <span className="drop-title">3 BHK Royal Residences</span>
                  <span className="drop-sub">175 m² • Chala Prime</span>
                </a>
                <a href="#projects" className="dropdown-item">
                  <span className="drop-title">Sky Duplex Penthouses</span>
                  <span className="drop-sub">225 m² • Gunjan Towers</span>
                </a>
                <a href="#projects" className="dropdown-item">
                  <span className="drop-title">1 & 2 BHK Palatial Flats</span>
                  <span className="drop-sub">64 - 110 m² • Koparli Road</span>
                </a>
              </div>
            )}
          </div>

          <a href="#about" className="nav-menu-link">
            About Us
          </a>
          <a href="#portfolio" className="nav-menu-link">
            Portfolio
          </a>
          <a href="#plans" className="nav-menu-link">
            Plans & 3D
          </a>
          <a href="#contact" className="nav-menu-link">
            Contacts
          </a>
        </nav>

        {/* Right: Functional Utility Icons */}
        <div className="nav-right-utilities">
          <a
            href="#plans"
            className="utility-icon-btn"
            title="Compare Plans & Specs"
            aria-label="Compare"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M18 20V10M12 20V4M6 20v-6"></path>
            </svg>
          </a>

          <a
            href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
              'Hello Belikov Infra, I would like to save and inquire about luxury homes in Vapi.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="utility-icon-btn"
            title="Saved Favorites"
            aria-label="Saved"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </a>

          <button
            type="button"
            className="utility-icon-btn cart-btn"
            title="Inquiry Basket / Form"
            onClick={onOpenInquiry}
            aria-label="Inquiry Basket"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge-dot"></span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`toggle-line ${mobileMenuOpen ? 'open-1' : ''}`}></span>
            <span className={`toggle-line ${mobileMenuOpen ? 'open-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-nav-dropdown-card" onClick={(e) => e.stopPropagation()}>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="mob-link">
              Projects (1, 2, 3 BHK & Rowhouses)
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="mob-link">
              About Us
            </a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="mob-link">
              Portfolio Gallery
            </a>
            <a href="#plans" onClick={() => setMobileMenuOpen(false)} className="mob-link">
              3D Simulator & Blueprints
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mob-link">
              Contact & WhatsApp Desk
            </a>
            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
                'Hello Belikov Infra, I am contacting you from the mobile website.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mob-wa-direct-btn"
            >
              💬 WhatsApp Owner Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
