'use client';

export default function AmbientDriftBackground() {
  return (
    <div className="ambient-drift-container" aria-hidden="true">
      {/* Very dim blurred slowly moving ambient light orbs */}
      <div className="drift-orb orb-1" />
      <div className="drift-orb orb-2" />
      <div className="drift-orb orb-3" />
      <div className="drift-orb orb-4" />
    </div>
  );
}
