'use client';

export default function RoyalDivider({ emblem = '👑' }) {
  return (
    <div className="royal-divider-wrap" aria-hidden="true">
      <div className="divider-flourish left" />
      <div className="divider-line-gold" />
      <div className="divider-crest-badge">
        <span className="divider-jewel">❖</span>
        <span className="divider-emblem">{emblem}</span>
        <span className="divider-jewel">❖</span>
      </div>
      <div className="divider-line-gold" />
      <div className="divider-flourish right" />
    </div>
  );
}
