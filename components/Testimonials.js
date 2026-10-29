'use client';

import { clientReviews } from '../data/amenities';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="royal-badge-gold">
            <span className="crown-icon">⭐</span>
            <span>Voices of Royalty</span>
          </div>
          <h2 className="royal-heading">
            Words From Our <span className="gold-gradient-text">Distinguished Residents</span>
          </h2>
          <p className="royal-subheading">
            Discover why top industrialists, doctors, and business leaders in Vapi take immense pride in owning a
            Belikov luxury home.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {clientReviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <span key={i} className="star-gold">★</span>
                ))}
              </div>

              <blockquote className="client-quote">“{rev.quote}”</blockquote>

              <div className="client-meta-box">
                <img src={rev.avatar} alt={rev.name} className="client-avatar" />
                <div className="client-details">
                  <div className="client-name">{rev.name}</div>
                  <div className="client-role">{rev.role}</div>
                  <div className="client-property">{rev.property}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
