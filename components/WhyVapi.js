'use client';

import { companyDetails } from '../data/properties';

export default function WhyVapi() {
  const pillars = [
    {
      num: '01',
      title: 'Uncompromised Space Architecture',
      desc: 'While most city flats compromise on carpet area, our layouts offer 30% to 45% larger usable carpet areas, 11-foot high ceilings, and grand 7-ft deep balconies.',
    },
    {
      num: '02',
      title: 'Vapi’s Most Prestigious Addresses',
      desc: 'Located strategically along Chala Prime, VIP Daman Road, and Gunjan Highway Corridor—effortless connectivity to Daman beaches, top international schools, and GIDC.',
    },
    {
      num: '03',
      title: 'Direct Builder Pricing & Zero Brokerage',
      desc: 'Deal directly with Shri Devendra Chauhan’s executive office. No hidden fees, no broker commissions, transparent pricing, and guaranteed timely possession.',
    },
    {
      num: '04',
      title: 'High Capital Growth & Rental Yields',
      desc: 'With the Mumbai-Ahmedabad Bullet Train project and South Gujarat industrial expansion, our societies have historically appreciated 18-24% year-on-year.',
    },
  ];

  return (
    <section id="why-vapi" className="why-vapi-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="royal-badge-gold">
            <span className="crown-icon">🛡️</span>
            <span>The Developer’s Promise</span>
          </div>
          <h2 className="royal-heading">
            Why Discerning Families Choose <span className="gold-gradient-text">{companyDetails.shortName}</span>
          </h2>
          <p className="royal-subheading">
            Building landmarks that stand the test of centuries. We don’t just construct concrete walls—we sculpt
            regal havens for generations to cherish.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((p) => (
            <div key={p.num} className="pillar-royal-card">
              <div className="pillar-num">{p.num}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
              <div className="pillar-line"></div>
            </div>
          ))}
        </div>

        {/* Founder’s Direct Message Box */}
        <div className="founder-pledge-card">
          <div className="founder-avatar-col">
            <div className="founder-img-frame">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80"
                alt="Shri Devendra Chauhan - Founder & Managing Director"
                className="founder-portrait"
              />
              <div className="founder-tag">Founder & MD</div>
            </div>
          </div>

          <div className="founder-text-col">
            <div className="quote-mark">“</div>
            <blockquote className="founder-quote">
              “When a client trusts us with their hard-earned life savings to build their dream home in Vapi, we treat
              that trust as sacred. Every foundation we cast, every piece of Italian marble we lay, and every promise of
              possession is backed by my personal word. You will never feel like a number here—you are welcomed into the
              Belikov family as royalty.”
            </blockquote>

            <div className="founder-signature-block">
              <div className="founder-name">{companyDetails.founder}</div>
              <div className="founder-title">{companyDetails.designation}</div>
              <div className="founder-credentials">22+ Years of Iconic Landmark Construction in Vapi & South Gujarat</div>
            </div>

            <div className="founder-contact-line">
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Chauhan Sir, I read your personal pledge on the Belikov website and would like to directly discuss luxury property in Vapi with your office.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="founder-direct-wa-btn"
              >
                <span>💬 Message Founder’s Desk Directly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
