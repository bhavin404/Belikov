'use client';

export default function ReviewsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const reviews = [
    {
      name: 'Sanjay Patel',
      role: 'Industrialist, GIDC Vapi',
      residence: 'Owner of The Sovereign Villa (VIP Daman Road)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      text: 'Moving into Belikov’s Sovereign Villa has redefined living for my family. The stone masonry, double-height ceiling, and private front garden feel like an Alpine estate right here on VIP Road.',
      rating: 5,
    },
    {
      name: 'Dr. Rajesh & Neeta Shah',
      role: 'Chief Surgeon, Haria Hospital Vapi',
      residence: 'Resident at The Imperial Grandeur (Chala)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      text: 'The soundproofing, Italian marble finishes, and 270° sunset balconies are unparalleled. The director personally oversaw our custom interior layouts. 100% transparent and reliable.',
      rating: 5,
    },
    {
      name: 'Kiran Desai',
      role: 'Textile Exporter & Businessman',
      residence: 'Owner at Crown Sky Mansion (Gunjan)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      text: 'Delivered ahead of committed possession date. The property appreciation has already exceeded 30%. True architectural craftsmanship and trust.',
      rating: 5,
    },
  ];

  return (
    <div className="reviews-modal-backdrop" onClick={onClose}>
      <div className="reviews-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-pill-btn"
          onClick={onClose}
          aria-label="Close reviews"
        >
          ✕
        </button>

        <div className="reviews-modal-header">
          <span className="pill-tag">Client Testimonials</span>
          <h3 className="modal-title">Over 100 Satisfied Homeowners</h3>
          <p className="modal-sub">
            Built with uncompromising standards across Vapi’s most prestigious corridors.
          </p>
        </div>

        <div className="reviews-cards-stack">
          {reviews.map((rev, idx) => (
            <div key={idx} className="review-single-card">
              <div className="review-stars-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="review-quote-txt">“{rev.text}”</p>
              <div className="review-client-footer">
                <img src={rev.avatar} alt={rev.name} className="client-pic" />
                <div className="client-text">
                  <div className="client-name">{rev.name}</div>
                  <div className="client-role">{rev.role}</div>
                  <div className="client-residence">{rev.residence}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
