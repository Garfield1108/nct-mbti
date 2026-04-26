import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,#2f7a5a_0%,#27684d_100%)] text-white ring-1 ring-[rgba(255,255,255,0.14)] shadow-[0_12px_24px_rgba(39,104,77,0.18)] hover:-translate-y-px hover:brightness-[1.03] hover:shadow-[0_16px_28px_rgba(39,104,77,0.2)] active:translate-y-[1px] active:brightness-[0.99] active:shadow-[0_8px_16px_rgba(39,104,77,0.14)] disabled:bg-[linear-gradient(135deg,#dfe8e2_0%,#d4ddd7_100%)] disabled:text-[#91a099] disabled:ring-[rgba(145,160,153,0.12)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:brightness-100 disabled:hover:shadow-none disabled:active:translate-y-0",
  secondary:
    "bg-[rgba(255,255,255,0.84)] text-[#1f3028] ring-1 ring-[rgba(47,111,85,0.14)] shadow-[0_8px_18px_rgba(18,40,30,0.05)] hover:-translate-y-px hover:bg-[#f7fbf8] hover:ring-[rgba(47,111,85,0.2)] hover:shadow-[0_12px_24px_rgba(18,40,30,0.07)] active:translate-y-[1px] active:bg-[#eff6f1] active:shadow-[0_6px_14px_rgba(18,40,30,0.04)] disabled:bg-[#f4f7f5] disabled:text-[#9ca7a1] disabled:ring-[rgba(156,167,161,0.16)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:active:translate-y-0",
  ghost:
    "bg-transparent text-[#2b4b3d] ring-1 ring-transparent hover:bg-[rgba(255,255,255,0.72)] active:bg-[rgba(239,246,241,0.92)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-[3.125rem] px-5 text-[0.96rem]",
  lg: "h-[3.5rem] px-6 text-[1rem]",
  xl: "h-[3.75rem] px-7 text-[1.05rem] sm:text-[1.1rem]",
};

export const buttonClasses = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}) =>
  [
    "inline-flex items-center justify-center rounded-full font-bold leading-none tracking-[-0.01em] transition-all duration-200 outline-none focus-visible:ring-4 focus-visible:ring-[rgba(111,176,145,0.22)] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-100",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
  ]
    .filter(Boolean)
    .join(" ");

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonClasses({ variant, size, fullWidth })} ${className}`.trim()}
      {...props}
    />
  );
}
