import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Button
 *
 * Komponen tombol dengan variant yang sesuai design system HMSI ITS.
 *
 * @example
 * // Tombol primary (biru gelap)
 * <Button>Lihat lebih lanjut</Button>
 *
 * @example
 * // Tombol outline
 * <Button variant="outline">Masuk</Button>
 *
 * @example
 * // Tombol ghost (transparan)
 * <Button variant="ghost" size="sm">Batalkan</Button>
 *
 * @example
 * // Tombol dengan gradient
 * <Button variant="gradient">Daftar Sekarang</Button>
 *
 * @example
 * // Tombol dengan icon
 * <Button rightIcon={<ArrowRight size={16} />}>
 *   Lihat lebih lanjut
 * </Button>
 */

// ─── Variants ────────────────────────────────────────────────────────────────
const variantMap = {
  primary:
    "bg-blue-dark-300 text-white hover:bg-blue-dark-400 active:bg-blue-dark-500",
  secondary:
    "bg-blue-light-300 text-white hover:bg-blue-light-400 active:bg-blue-light-500",
  outline:
    "border-2 border-blue-dark-300 text-blue-dark-300 bg-transparent hover:bg-blue-dark-50 active:bg-blue-dark-75",
  "outline-white":
    "border-2 border-white text-white bg-transparent hover:bg-white/10 active:bg-white/20",
  ghost:
    "bg-transparent text-blue-dark-300 hover:bg-blue-dark-50 active:bg-blue-dark-75",
  "ghost-white":
    "bg-transparent text-white hover:bg-white/10 active:bg-white/20",
  gradient:
    "bg-gradient-to-r from-blue-dark-300 to-blue-light-300 text-white hover:opacity-90 active:opacity-80",
  "gradient-pastel":
    "bg-gradient-to-r from-coral-300 via-pink-300 to-lavender-300 text-white hover:opacity-90 active:opacity-80",
  danger: "bg-coral-300 text-white hover:bg-coral-400 active:bg-coral-500",
  "outline-black":
    "border-2 border-black text-black bg-transparent hover:bg-black/5 active:bg-black/10",
} as const;

// ─── Sizes ───────────────────────────────────────────────────────────────────
const sizeMap = {
  xs: "px-3 py-1.5 text-[12px] leading-[16px] gap-1",
  sm: "px-4 py-2 text-[14px] leading-[18px] gap-1.5",
  md: "px-6 py-3 text-[16px] leading-[24px] gap-2",
  lg: "px-8 py-4 text-[18px] leading-[24px] gap-2",
} as const;

// ─── Rounded ─────────────────────────────────────────────────────────────────
const roundedMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
} as const;

// ─── Props ───────────────────────────────────────────────────────────────────
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantMap;
  size?: keyof typeof sizeMap;
  rounded?: keyof typeof roundedMap;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  rounded = "lg",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        // base
        "inline-flex items-center justify-center font-body font-bold",
        "transition-all duration-150 ease-in-out",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-dark-300 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // variants
        variantMap[variant],
        sizeMap[size],
        roundedMap[rounded],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {isLoading ? (
        // Spinner
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
