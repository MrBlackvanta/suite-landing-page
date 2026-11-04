export default function Swoosh({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`overflow-hidden motion-safe:animate-wipe-in ${className}`}
    >
      <svg
        viewBox="0 0 289 39"
        fill="none"
        className="block w-full motion-safe:animate-wipe-in-counter"
      >
        <path
          d="M1 37.676c92.173-48 187.84-48 287 0"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
