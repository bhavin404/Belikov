'use client';

import { useState } from 'react';
import ThreeScene from './ThreeScene';
import { companyDetails } from '../data/properties';

export default function FloorPlans() {
  const [activePlan, setActivePlan] = useState('3bhk');

  const plans = {
    '1bhk': {
      title: 'Aurelia 1 BHK Suite',
      sqm: '64 m²',
      sqft: '685 sq.ft Carpet Area',
      price: '₹38 Lakhs onwards',
      location: 'Koparli Road, Vapi',
      rooms: [
        { name: 'Living & Dining Salon', dim: '5.5m x 3.5m (18’0” x 11’6”)' },
        { name: 'Master Bedroom', dim: '4.1m x 3.4m (13’6” x 11’0”)' },
        { name: 'Kitchen & Wash Yard', dim: '3.0m x 2.4m (10’0” x 8’0”)' },
        { name: 'Sunset Viewing Balcony', dim: '3.5m x 1.5m (11’6” x 5’0”)' },
      ],
      features: ['Vastu Compliant East Entry', 'Zero Corridor Wastage', 'Piped Gas Line Pre-fitted'],
    },
    '2bhk': {
      title: 'Aurelia 2 BHK Palatial',
      sqm: '110 m²',
      sqft: '1,180 sq.ft Carpet Area',
      price: '₹58 Lakhs onwards',
      location: 'Koparli Road, Vapi',
      rooms: [
        { name: 'Double Living Hall', dim: '6.7m x 4.1m (22’0” x 13’6”)' },
        { name: 'Primary Master Suite', dim: '4.6m x 3.8m (15’0” x 12’6”)' },
        { name: 'Second Bedroom', dim: '4.0m x 3.5m (13’0” x 11’6”)' },
        { name: 'Twin Viewing Sundecks', dim: '4.3m x 1.8m (14’0” x 6’0”)' },
      ],
      features: ['2 Master Bathrooms', 'Cross-Ventilated Double Balcony', 'Spacious Separate Dining Niche'],
    },
    '3bhk': {
      title: 'The Imperial 3 BHK Royal',
      sqm: '175 m²',
      sqft: '1,890 sq.ft Carpet Area',
      price: '₹95 Lakhs onwards',
      location: 'Chala Prime, Vapi',
      rooms: [
        { name: 'Imperial Reception Salon', dim: '7.9m x 4.9m (26’0” x 16’0”)' },
        { name: 'Presidential Master Suite', dim: '5.5m x 4.3m (18’0” x 14’0”)' },
        { name: 'Two En-suite Bedrooms', dim: '4.6m x 3.7m each' },
        { name: 'Wraparound Sunset Terrace', dim: '6.1m x 2.1m (20’0” x 7’0”)' },
      ],
      features: ['Private Entrance Foyer', 'Pooja Room & Utility Included', 'Acoustic German DGU Glazing'],
    },
    'rowhouse': {
      title: 'The Sovereign Triplex Villa',
      sqm: '315 m²',
      sqft: '3,400 sq.ft Built-up Area',
      price: '₹1.85 Cr onwards',
      location: 'VIP Daman Road, Vapi',
      rooms: [
        { name: 'Ground: Foyer & Private Lawn', dim: 'Private Garden + Porch' },
        { name: 'First Floor: 2 Master En-suites', dim: '5.5m x 4.3m each' },
        { name: 'Second Floor: Entertainment Lounge', dim: '6.7m x 4.3m (22’0” x 14’0”)' },
        { name: 'Terrace: Sky Deck & Stargazing', dim: 'Full Roof Private Deck' },
      ],
      features: ['Private Elevator Shaft', 'Zero Common Walls', 'Private Gated Compound & 7kW EV Charger'],
    },
  };

  const current = plans[activePlan];

  return (
    <section id="plans" className="studio-plans-section">
      <div className="container">
        {/* Section Title */}
        <div className="studio-section-head">
          <div className="studio-tag-line">
            <span className="dot-indicator"></span>
            <span>Interactive 3D Architectural Simulation & Blueprints</span>
          </div>
          <h2 className="studio-section-title">3D Model & Floor Dimensions</h2>
          <p className="studio-section-desc">
            Explore our architectural structures in full 360° interactive 3D, and review the exact room
            dimensions for each configuration.
          </p>
        </div>

        {/* 3D Simulation Card */}
        <div className="three-d-feature-frame">
          <div className="frame-header-bar">
            <div className="frame-badge">
              <span className="green-live-dot"></span>
              <span>Live 3D Building Simulation • Drag to Rotate 360° • Pinch to Zoom</span>
            </div>
          </div>
          <ThreeScene />
        </div>

        {/* Blueprints Navigator */}
        <div className="blueprint-tabs-wrap">
          <button
            type="button"
            className={`bp-tab ${activePlan === '1bhk' ? 'active' : ''}`}
            onClick={() => setActivePlan('1bhk')}
          >
            1 BHK Suite (64 m²)
          </button>
          <button
            type="button"
            className={`bp-tab ${activePlan === '2bhk' ? 'active' : ''}`}
            onClick={() => setActivePlan('2bhk')}
          >
            2 BHK Palatial (110 m²)
          </button>
          <button
            type="button"
            className={`bp-tab ${activePlan === '3bhk' ? 'active' : ''}`}
            onClick={() => setActivePlan('3bhk')}
          >
            3 BHK Royal (175 m²)
          </button>
          <button
            type="button"
            className={`bp-tab ${activePlan === 'rowhouse' ? 'active' : ''}`}
            onClick={() => setActivePlan('rowhouse')}
          >
            Triplex Rowhouse (315 m²)
          </button>
        </div>

        {/* Selected Plan Details Card */}
        <div className="plan-detail-glass-card">
          <div className="plan-card-left">
            <span className="location-pin-sub">📍 {current.location}</span>
            <h3 className="plan-title-head">{current.title}</h3>
            <div className="plan-areas-line">
              <strong>{current.sqm}</strong> / {current.sqft}
            </div>
            <div className="plan-price-tag">{current.price}</div>

            <div className="plan-features-pills">
              {current.features.map((f, i) => (
                <span key={i} className="f-pill">
                  ✓ {f}
                </span>
              ))}
            </div>

            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
                `Hello Belikov Infra, I am interested in reviewing the PDF architectural floor plans for ${current.title} (${current.sqm} / ${current.sqft}). Please share.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="plan-wa-btn"
            >
              <span>💬 Request Architectural PDF on WhatsApp</span>
              <span className="arrow-up-right">↗</span>
            </a>
          </div>

          <div className="plan-card-right">
            <div className="rooms-table-header">
              <span>Room / Space</span>
              <span>Dimensions</span>
            </div>
            <div className="rooms-rows-list">
              {current.rooms.map((r, i) => (
                <div key={i} className="room-item-row">
                  <span className="room-name">{r.name}</span>
                  <span className="room-dimension">{r.dim}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
