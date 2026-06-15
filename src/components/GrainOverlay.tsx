"use client";

export default function GrainOverlay() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay"
      aria-hidden="true"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-noise)" />
      </svg>
    </div>
  );
}
