import type { HTMLAttributes } from "react";

interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  soft?: boolean;
}

export function Pill({
  className = "",
  soft = false,
  ...props
}: PillProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-[0.08em]",
        soft
          ? "bg-[var(--surface-soft)] text-[var(--muted)]"
          : "bg-white text-[var(--ink)] ring-1 ring-[var(--line)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
