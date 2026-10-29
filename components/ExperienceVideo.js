'use client';

import { useState } from 'react';
import { companyDetails } from '../data/properties';

export default function ExperienceVideo() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(50); // For Day/Night slider

  const experiences = [
    {
      id: 'living',
      title: 'Double-Height Living Salons',
      subtitle: 'Where Royal Families Gather in Grandeur',
      description:
        'Step into expansive 24-foot double-height living spaces framed by floor-to-ceiling soundproof glass, custom crystal chandeliers, and cool Botticino marble underfoot.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-with-minimalist-design-41008-large.mp4',
      poster: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
      badge: 'Unmatched Scale',
      specs: ['24-ft Double Height Ceiling', 'Imported Italian Marble', 'Acoustic Sound Insulation'],
    },
    {
      id: 'terrace',
      title: 'Private Sunset Sundecks',
      subtitle: 'Unobstructed 270° Views Over Vapi',
      description:
        'Savor your morning tea or evening single malt on expansive 8-foot cantilevered balconies designed to catch the gentle Arabian Sea breeze drifting from Daman coast.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-contemporary-apartment-41009-large.mp4',
      poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      badge: 'Breezy Sanctuaries',
      specs: ['8-ft Deep Balcony Space', 'Tempered Gold-Tinted Glass', 'Weatherproof Composite Decking'],
    },
    {
      id: 'bedroom',
      title: 'Master Haven Suites',
      subtitle: 'Sanctuary of Sovereign Rest',
      description:
        'Sumptuous master bedrooms featuring private walk-in couture wardrobes, designer hardwood accents, and spa-inspired ensuite baths equipped with royal jacuzzi fittings.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-bedroom-interior-41010-large.mp4',
      poster: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
      badge: '5-Star Comfort',
      specs: ['King Suite with Lounge', 'Walk-in Couture Dressing', 'Grohe Royal Gold Bathware'],
    },
    {
      id: 'pool',
      title: 'Crown Rooftop Infinity Pool',
      subtitle: 'Floating Above the Vapi Skyline',
      description:
        'Suspended high above the bustling industrial corridor, this temperature-controlled infinity pool provides a serene blue escape surrounded by private cabanas and lush sky greenery.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-luxurious-hotel-pool-with-night-lighting-41011-large.mp4',
      poster: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1400&q=80',
      badge: 'Sky-High Leisure',
      specs: ['Temperature Controlled', 'Sunken Pool Loungers', 'Private Cocktail Sky Deck'],
    },
  ];

  const current = experiences[activeExperience];

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="royal-badge-gold">
            <span className="crown-icon">🎬</span>
            <span>Cinematic Immersion</span>
          </div>
          <h2 className="royal-heading">
            Experience the <span className="gold-gradient-text">Home of Your Dreams</span>
          </h2>
          <p className="royal-subheading">
            Step inside our architectural visions. Uncompromising scale, soothing natural illumination, and
            artisanal European materials crafted for generations to come.
          </p>
        </div>

        {/* Experience Selector Tabs */}
        <div className="experience-tabs-bar">
          {experiences.map((exp, idx) => (
            <button
              key={exp.id}
              type="button"
              className={`exp-tab-btn ${activeExperience === idx ? 'active' : ''}`}
              onClick={() => setActiveExperience(idx)}
            >
              <span className="exp-tab-num">0{idx + 1}</span>
              <span className="exp-tab-title">{exp.title}</span>
            </button>
          ))}
        </div>

        {/* Video / Visual Cinematic Frame */}
        <div className="cinematic-frame">
          <div className="cinematic-media-container">
            <video
              key={current.id}
              className="cinematic-video"
              poster={current.poster}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={current.videoUrl} type="video/mp4" />
              {/* Fallback to high-res poster image */}
              <img src={current.poster} alt={current.title} />
            </video>

            {/* Dark Royal Vignette Gradient Overlay */}
            <div className="cinematic-vignette" />

            {/* In-Frame Floating Info Overlay */}
            <div className="cinematic-info-overlay">
              <div className="overlay-badge">{current.badge}</div>
              <h3 className="overlay-title">{current.title}</h3>
              <p className="overlay-subtitle">{current.subtitle}</p>
              <p className="overlay-desc">{current.description}</p>

              <div className="overlay-specs-chips">
                {current.specs.map((sp, i) => (
                  <span key={i} className="spec-chip-item">
                    ✓ {sp}
                  </span>
                ))}
              </div>

              <div className="overlay-actions">
                <a
                  href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
                    `Hello ${companyDetails.shortName}, I saw the ${current.title} virtual experience on your website. I want to see this layout in Vapi in person. Please guide me.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-overlay-wa"
                >
                  <span>💬 Inquire on WhatsApp</span>
                </a>
                <a href="#dream-home-finder" className="btn-overlay-schedule">
                  <span>Schedule VIP Site Tour</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Day to Royal Night Slider */}
        <div className="day-night-interactive-card">
          <div className="slider-header">
            <div className="slider-titles">
              <h4 className="slider-main-title">Daylight Elegance vs. Royal Night Illumination</h4>
              <p className="slider-sub">
                Slide horizontally to see how our luxury facades transform under warm architectural golden lighting at dusk.
              </p>
            </div>
            <div className="slider-pill-hint">
              <span>☀️ Move Slider 🌙</span>
            </div>
          </div>

          <div className="split-image-container">
            {/* Night Image (Background) */}
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury residence illuminated at night"
              className="split-img-night"
            />

            {/* Day Image (Foreground clipped by slider) */}
            <div
              className="split-img-day-wrap"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury residence in daytime sun"
                className="split-img-day"
              />
              <span className="split-label day">☀️ Regal Sunlight</span>
            </div>

            <span className="split-label night">🌙 Golden Night</span>

            {/* Slider Divider Line */}
            <div className="slider-divider-line" style={{ left: `${sliderPosition}%` }}>
              <div className="slider-handle-circle">↔</div>
            </div>

            {/* Range Input Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="split-range-input"
              aria-label="Day and Night view slider"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
