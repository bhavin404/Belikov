'use client';

import { amenitiesList } from '../data/amenities';
import { companyDetails } from '../data/properties';

export default function RoyalAmenities() {
  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="royal-badge-gold">
            <span className="crown-icon">👑</span>
            <span>Palatial Living</span>
          </div>
          <h2 className="royal-heading">
            World-Class Amenities for a <span className="gold-gradient-text">Regal Lifestyle</span>
          </h2>
          <p className="royal-subheading">
            Beyond your private residence, indulge in 35+ five-star resort amenities designed to celebrate
            grandeur, health, tranquility, and community in Vapi.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="amenities-grid">
          {amenitiesList.map((item) => (
            <div key={item.id} className="amenity-card">
              <div className="amenity-img-box">
                <img src={item.image} alt={item.title} className="amenity-img" />
                <div className="amenity-category-badge">{item.category}</div>
              </div>

              <div className="amenity-content">
                <h3 className="amenity-title">{item.title}</h3>
                <p className="amenity-desc">{item.desc}</p>
                <div className="amenity-gold-accent" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action bar */}
        <div className="amenities-cta-box">
          <div className="cta-left">
            <h3>Want to Experience the Clubhouse in Person?</h3>
            <p>Schedule a guided tour of our completed clubhouse and infinity pool at Chala.</p>
          </div>
          <div className="cta-right">
            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
                'Hello Belikov Developers, I want to schedule a visit to inspect the Clubhouse and Amenities in Vapi.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal-whatsapp"
            >
              <span>💬 Book Clubhouse Tour on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
