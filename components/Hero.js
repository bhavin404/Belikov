'use client';

import { useState, useEffect, useRef } from 'react';
import { properties, companyDetails } from '../data/properties';

export default function Hero({ onOpenReviews, onOpenContact, onSelectProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  // 3-SECOND AUTOMATIC ROTATION FOR THE 6 HERO WALLPAPERS
  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % properties.length);
      }, 3000); // 3 seconds per image
    };

    startTimer();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrentIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % properties.length);
    }, 3000);
  };

  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrentIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % properties.length);
    }, 3000);
  };

  const current = properties[currentIndex];

  const generateWhatsAppLink = () => {
    const text = `Hello Belikov Infra, I am inquiring about *${current.title}* (${current.sqft} / ${current.sqm}, ${current.type} in ${current.location}). Please share current pricing and schedule a VIP site visit.`;
    return `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="belikov-hero">
      {/* Background Images: All 6 Stacked for Smooth Dissolve Transition */}
      <div className="hero-bg-media-wrap">
        {properties.map((prop, idx) => (
          <img
            key={prop.id}
            src={prop.image}
            alt={prop.title}
            className={`hero-main-bg-img ${idx === currentIndex ? 'active' : ''}`}
          />
        ))}

        {/* Ambient nocturnal lighting overlay */}
        <div className="hero-atmosphere-gradient" />
        <div className="hero-starry-mist" />
      </div>

      {/* Massive Behind-Building Brand Typography: "BELIKOV" Shifted Down */}
      <div className="hero-backdrop-brand" aria-hidden="true">
        <span>{companyDetails.brandName}</span>
      </div>

      {/* Left Floating Social Strip */}
      <aside className="hero-left-social-strip" aria-label="Social links">
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn wa"
          title="Direct WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.9 2.42 1.02 2.59.12.17 1.76 2.69 4.27 3.77.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.3z" />
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn ig"
          title="Instagram"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a
          href="tel:+919825188990"
          className="social-icon-btn phone"
          title="Direct Call"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </a>
      </aside>

      {/* Hero Bottom Controls Bar */}
      <div className="hero-bottom-container">
        {/* Bottom Left: Satisfied Clients Card + Select a Project Pill */}
        <div className="hero-bottom-left-group">
          <div className="satisfied-clients-glass-card" onClick={onOpenReviews}>
            <div className="card-stat-headline">Over 100 satisfied clients</div>
            <div className="card-stat-sub">have built their homes with us</div>
            <div className="card-clients-row">
              <div className="avatar-overlap-stack">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="Client avatar 1"
                  className="client-avatar-thumb"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                  alt="Client avatar 2"
                  className="client-avatar-thumb"
                />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="Client avatar 3"
                  className="client-avatar-thumb"
                />
              </div>
              <span className="see-reviews-link">See Reviews ›</span>
            </div>
          </div>

          {/* Select a Project Pill Button */}
          <a href="#projects" className="select-project-pill-btn" onClick={onSelectProject}>
            <span className="pill-arrow-circle">
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
            <span className="pill-btn-label">Select a Project</span>
          </a>
        </div>

        {/* Bottom Right: Interactive Featured Property Card + 3-Second Slider */}
        <div className="hero-bottom-right-group">
          <div className="property-preview-glass-card">
            <div className="preview-thumb-box">
              <img src={current.thumb} alt={current.title} className="preview-thumb-img" />
              <span className="counter-pill">
                {currentIndex + 1} / {properties.length}
              </span>
              <span className="timer-badge-pill">3s</span>
            </div>

            <div className="preview-info-box">
              <div className="preview-title-row">
                <h3 className="preview-prop-title">
                  {current.title} {current.sqm}
                </h3>
              </div>
              <p className="preview-prop-subtitle">{current.subtitle}</p>

              <div className="preview-specs-list">
                <span>{current.bedrooms}</span>
                <span>{current.bathrooms}</span>
                <span>{current.terrace}</span>
              </div>
            </div>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="card-arrow-action-btn"
              title="Inquire on WhatsApp"
              aria-label={`Inquire about ${current.title}`}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" fill="none" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          {/* Slider Controls Bar with Synchronized Scrub Track */}
          <div className="hero-slider-scrub-bar">
            <button
              type="button"
              className="slider-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous property"
            >
              ‹
            </button>
            <div className="slider-track-line">
              <div
                className="slider-track-active-pill"
                style={{
                  left: `${(currentIndex / (properties.length - 1)) * 82}%`,
                  width: `${100 / properties.length}%`,
                }}
              />
            </div>
            <button
              type="button"
              className="slider-arrow-btn"
              onClick={handleNext}
              aria-label="Next property"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
