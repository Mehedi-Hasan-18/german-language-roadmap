export default function ProgressDial({ percent = 0, size = 120, stroke = 10, label, sub }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(100, Math.max(0, percent)) / 100) * circumference;

  return (
    <div className="relative inline-flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          fill="none"
          className="dial-track"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="dial-fill"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-mono text-2xl font-medium leading-none text-ink">{percent}%</span>
        {label && <span className="mt-1 text-[10px] uppercase tracking-wide text-inkSoft">{label}</span>}
      </div>
      {sub && <span className="mt-2 text-xs text-inkSoft">{sub}</span>}
    </div>
  );
}
