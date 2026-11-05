export default function QuoteCurve({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 52"
      fill="none"
      className={`overflow-visible text-paper ${className}`}
    >
      <path
        d="M64.05 0C59.8 27.52 38.45 44.85 0 52"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
