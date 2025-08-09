// src/components/SectionDivider.jsx
const SectionDivider = ({
  top = "#0B142B", // color of section above
  bottom = "#0B142B", // color of section below
  height = 120, // visual height in px
  invert = false, // flip vertically if needed
}) => (
  <div
    className={`relative overflow-hidden ${invert ? "rotate-180" : ""}`}
    style={{ backgroundColor: bottom, height }}
    aria-hidden="true"
  >
    {/* micro top fade so the seam is perfectly smooth */}
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-6"
      style={{ background: `linear-gradient(to bottom, ${top}, transparent)` }}
    />

    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      className="block h-full w-full"
    >
      <defs>
        {/* main fill blends top -> bottom (no transparency so nothing shows through) */}
        <linearGradient id="waveFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={top} />
          <stop offset="100%" stopColor={bottom} />
        </linearGradient>

        {/* soft crest highlight */}
        <linearGradient id="edgeHighlight" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>

        {/* subtle shadow under the crest for depth */}
        <filter id="softShadow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dy="3" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.25" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main wave body (slightly smoother curve than before) */}
      <path
        d="M0,80 C360,160 1080,0 1440,80 L1440,160 L0,160 Z"
        fill="url(#waveFill)"
        shapeRendering="auto"
      />

      {/* Soft under-shadow */}
      <path
        d="M0,80 C360,160 1080,0 1440,80"
        fill="none"
        stroke="rgba(0,0,0,0.25)"
        strokeWidth="2"
        filter="url(#softShadow)"
      />

      {/* Thin crest highlight */}
      <path
        d="M0,80 C360,160 1080,0 1440,80"
        fill="none"
        stroke="url(#edgeHighlight)"
        strokeWidth="2"
      />
    </svg>
  </div>
);

export default SectionDivider;
