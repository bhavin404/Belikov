'use client';

import { useState } from 'react';
import { companyDetails } from '../data/properties';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    { text: 'Inquire for 3 BHK in Chala', message: 'Hello Chauhan Sir, I am interested in seeing 3 BHK Royal flats in Chala, Vapi.' },
    { text: 'Looking for Rowhouses & Villas', message: 'Hello, I want details, pricing, and site availability for Rowhouses & Villas in Vapi.' },
    { text: '1 & 2 BHK Spacious Homes', message: 'Hello, please send details and pricing for 1 & 2 BHK spacious homes in Vapi.' },
    { text: 'Book Free AC Cab Site Visit', message: 'Hello, I would like to schedule a VIP Site Visit with complimentary cab pickup in Vapi.' },
    { text: 'Download PDF Brochure & Prices', message: 'Hello, please share the complete society brochures and latest rate sheets.' },
  ];

  const handleSendQuick = (msg) => {
    const url = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendCustom = (e) => {
    e.preventDefault();
    const textToSend = customMsg.trim() || 'Hello Belikov Developers, I would like to inquire about luxury homes in Vapi.';
    const url = `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setCustomMsg('');
  };

  return (
    <div className="wa-floating-wrapper">
      {/* Expanded WhatsApp Card */}
      {isOpen && (
        <div className="wa-chat-popup">
          <div className="wa-popup-header">
            <div className="wa-director-info">
              <div className="wa-avatar-wrap">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=120&q=80"
                  alt="Owner Direct Desk"
                  className="wa-director-avatar"
                />
                <span className="wa-online-status"></span>
              </div>
              <div className="wa-director-text">
                <div className="wa-director-name">{companyDetails.shortName} Concierge</div>
                <div className="wa-director-sub">Direct to Owner’s Office • Vapi</div>
              </div>
            </div>
            <button
              type="button"
              className="wa-popup-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="wa-popup-body">
            <div className="wa-bubble-incoming">
              <p>
                🙏 <strong>Namaste!</strong> Welcome to {companyDetails.shortName}.
              </p>
              <p>
                How may we assist you today? Feel completely comfortable asking about our 1, 2, 3 BHK flats,
                rowhouses, or scheduling a site visit.
              </p>
              <span className="wa-bubble-time">Direct Developer Desk</span>
            </div>

            <div className="wa-quick-options-label">Select quick inquiry:</div>
            <div className="wa-quick-buttons-list">
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="wa-quick-chip"
                  onClick={() => handleSendQuick(q.message)}
                >
                  💬 {q.text}
                </button>
              ))}
            </div>

            <form onSubmit={handleSendCustom} className="wa-custom-input-form">
              <input
                type="text"
                placeholder="Type your question..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="wa-input-box"
              />
              <button type="submit" className="wa-send-arrow-btn" aria-label="Send WhatsApp message">
                ➔
              </button>
            </form>

            <div className="wa-trust-micro">
              <span>🔒 100% Confidential • Zero Spam Guarantee</span>
            </div>
          </div>
        </div>
      )}

      {/* Pulsing Floating Trigger Button */}
      <button
        type="button"
        className={`wa-trigger-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp conversation with builder"
      >
        <span className="wa-gold-pulse"></span>
        <div className="wa-icon-symbol">
          <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
            <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.5a11.6 11.6 0 0 1-5.9-1.6l-.4-.3-4.4 1.1 1.2-4.2-.3-.5a11.5 11.5 0 1 1 9.8 5.5zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1.1-1.1 1.3-.4.2-.7.1a9.2 9.2 0 0 1-2.7-1.7 10.2 10.2 0 0 1-1.9-2.4c-.2-.3 0-.5.2-.7s.3-.4.5-.6.2-.3.3-.5a.8.8 0 0 0 0-.7c-.1-.2-.8-2-1.1-2.7s-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.3 17.3 0 0 0 6.6 5.8 22.8 22.8 0 0 0 2.2.8 5.3 5.3 0 0 0 2.4.2 3.9 3.9 0 0 0 2.6-1.8 3.2 3.2 0 0 0 .2-1.8c-.1-.1-.3-.2-.6-.3z" />
          </svg>
        </div>
        <div className="wa-button-label">
          <span className="label-bold">Chat with Owner</span>
          <span className="label-sub">WhatsApp Online</span>
        </div>
      </button>
    </div>
  );
}
