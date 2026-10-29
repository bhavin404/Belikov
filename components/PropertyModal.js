'use client';

import { useState } from 'react';
import { companyDetails } from '../data/properties';

export default function PropertyModal({ property, onClose }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!property) return null;

  const images = [property.image, property.thumb];

  const generateWhatsAppLink = () => {
    const text = `Hello Belikov Infra, I would like to inquire about *${property.title}* (${property.sqm} / ${property.sqft}, ${property.type} at ${property.location}). Price: ${property.price}. Please share the complete brochure and site visit timings.`;
    return `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="prop-modal-backdrop" onClick={onClose}>
      <div className="prop-modal-window" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-round-btn"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="modal-hero-gallery">
          <img src={images[activeImgIndex]} alt={property.title} className="modal-hero-img" />
          <div className="modal-top-badges">
            <span className="modal-pill-tag">{property.sqm}</span>
            <span className="modal-pill-tag">{property.status}</span>
          </div>
        </div>

        <div className="modal-body-content">
          <div className="modal-head-line">
            <div>
              <span className="modal-loc">📍 {property.location}</span>
              <h2 className="modal-prop-title">{property.title}</h2>
              <p className="modal-prop-sub">{property.subtitle}</p>
            </div>
            <div className="modal-price-box">
              <span className="modal-price-sub">Starting at</span>
              <span className="modal-price-val">{property.price}</span>
            </div>
          </div>

          <div className="modal-specs-pill-bar">
            <span>{property.bedrooms}</span>
            <span>{property.bathrooms}</span>
            <span>{property.sqft}</span>
            <span>{property.terrace}</span>
          </div>

          <p className="modal-desc-txt">{property.description}</p>

          <div className="modal-actions-duo">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-wa-submit-btn"
            >
              <span>💬 Inquire on WhatsApp</span>
              <span className="arrow-up-right">↗</span>
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="modal-site-visit-btn"
            >
              <span>Schedule Free VIP Cab Site Visit</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
