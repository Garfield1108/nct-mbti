interface ProgressBarProps {
  current: number;
  total: number;
  label: string;
}

export function ProgressBar({ current, total, label }: ProgressBarProps) {
  const width = Math.max(0, Math.min(100, (current / total) * 100));

  return (
    <div
      className="h-1.5 rounded-full bg-[var(--surface-soft)]"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={current}
      aria-label={label}
    >
      <div
        className="h-full rounded-full bg-[linear-gradient(90deg,var(--mint-strong),var(--sky-strong),var(--lavender-strong))] transition-[width] duration-300"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
