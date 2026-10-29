'use client';

export default function StatsRibbon() {
  const stats = [
    { value: '22+', label: 'Years of Royal Heritage', sub: 'Pioneering Vapi’s Luxury Living' },
    { value: '3.8M+', label: 'Sq.Ft Palatial Spaces', sub: 'Delivered with Unmatched Quality' },
    { value: '2,800+', label: 'Distinguished Families', sub: 'Thriving in Our Communities' },
    { value: '100%', label: 'RERA Compliance', sub: 'Clear Title & Transparent Deals' },
    { value: '35+', label: 'Resort Amenities', sub: 'Clubhouses, Pools & Sky Lounges' },
  ];

  return (
    <div className="stats-ribbon-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
