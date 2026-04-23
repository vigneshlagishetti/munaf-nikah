export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-16 md:py-24 px-4 w-full">
      <div className="gold-shimmer-line flex-1 max-w-[160px]" />
      <svg
        width="48"
        height="48"
        viewBox="0 0 40 40"
        className="mx-6 opacity-30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 8-point star */}
        <polygon
          points="20,0 24,14 40,14 27,22 31,38 20,28 9,38 13,22 0,14 16,14"
          fill="#D4AF37"
        />
        <circle cx="20" cy="20" r="6" fill="#0A0A0A" stroke="#D4AF37" strokeWidth="0.5" />
      </svg>
      <div className="gold-shimmer-line flex-1 max-w-[160px]" />
    </div>
  );
}
