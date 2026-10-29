'use client';

import { useState } from 'react';
import { properties, companyDetails } from '../data/properties';
import PropertyModal from './PropertyModal';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalProperty, setActiveModalProperty] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'rowhouses', label: 'Rowhouses & Villas' },
    { id: '3bhk', label: '3 BHK Royal' },
    { id: '2bhk', label: '2 BHK Luxury' },
    { id: '1bhk', label: '1 BHK Grand' },
    { id: 'penthouses', label: 'Sky Penthouses' },
  ];

  const filtered = properties.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'rowhouses') return p.category === 'rowhouses';
    if (activeCategory === '3bhk') return p.bhk === '3 BHK';
    if (activeCategory === '2bhk') return p.bhk === '2 BHK';
    if (activeCategory === '1bhk') return p.bhk === '1 BHK';
    if (activeCategory === 'penthouses') return p.category === 'penthouses';
    return true;
  });

  const getWhatsAppLink = (prop) => {
    const text = `Hello Belikov Infra, I would like to inquire about *${prop.title}* (${prop.sqm} / ${prop.sqft}, ${prop.type} at ${prop.location}). Starting price: ${prop.price}. Please share brochure and site visit details.`;
    return `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="projects" className="studio-portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div className="studio-section-head">
          <div className="studio-tag-line">
            <span className="dot-indicator"></span>
            <span>Architectural Portfolio • Vapi, Gujarat</span>
          </div>
          <h2 className="studio-section-title">Crafted for Generations</h2>
          <p className="studio-section-desc">
            Discover our flagship residential societies and sovereign rowhouses. Designed with monumental
            double-height ceilings, expansive glass facades, and generous private sundecks across Vapi’s prime corridors.
          </p>

          {/* Category Filter Pills */}
          <div className="studio-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="studio-projects-grid">
          {filtered.map((prop) => (
            <article key={prop.id} className="studio-project-card">
              <div
                className="card-image-stage"
                onClick={() => setActiveModalProperty(prop)}
              >
                <img src={prop.image} alt={prop.title} className="card-media-img" />
                <div className="card-top-tags">
                  <span className="pill-area-tag">{prop.sqm}</span>
                  <span className="pill-status-tag">{prop.status}</span>
                </div>
                <div className="card-hover-click-hint">
                  <span>View Details & Blueprints ↗</span>
                </div>
              </div>

              <div className="card-content-pane">
                <div className="card-title-meta">
                  <div className="card-location-txt">📍 {prop.location}</div>
                  <h3
                    className="card-main-title"
                    onClick={() => setActiveModalProperty(prop)}
                  >
                    {prop.title}
                  </h3>
                  <p className="card-subtitle-txt">{prop.subtitle}</p>
                </div>

                <div className="card-specs-row">
                  <span className="spec-tag">{prop.bedrooms}</span>
                  <span className="spec-tag">{prop.bathrooms}</span>
                  <span className="spec-tag">{prop.sqft}</span>
                  <span className="spec-tag">{prop.terrace}</span>
                </div>

                <div className="card-bottom-actions">
                  <div className="card-pricing">
                    <span className="price-sub">Starting from</span>
                    <span className="price-bold">{prop.price}</span>
                  </div>

                  <div className="card-btns-duo">
                    <a
                      href={getWhatsAppLink(prop)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="studio-wa-btn"
                      title="Direct WhatsApp"
                    >
                      <span>💬 Inquire</span>
                    </a>
                    <button
                      type="button"
                      className="studio-arrow-btn"
                      onClick={() => setActiveModalProperty(prop)}
                      aria-label="View specifications"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2.5">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeModalProperty && (
        <PropertyModal
          property={activeModalProperty}
          onClose={() => setActiveModalProperty(null)}
        />
      )}
    </section>
  );
}
