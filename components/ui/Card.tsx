import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card
 *
 * Komponen card serbaguna. Bisa dipakai untuk:
 * - Card departemen (dengan foto + nama)
 * - Card Visi/Misi
 * - Card anggota
 * - Card konten umum
 *
 * @example
 * // Card dasar
 * <Card>
 *   <p>Konten card</p>
 * </Card>
 *
 * @example
 * // Card dengan border aksen
 * <Card variant="bordered" borderColor="blue-dark">
 *   <p>Visi organisasi</p>
 * </Card>
 *
 * @example
 * // Card departemen (shadow + hover effect)
 * <Card variant="elevated" hoverable>
 *   <NextImage src="..." alt="..." ratio="4/3" />
 *   <p>Entrepreneurship</p>
 * </Card>
 */

// ─── Variants ────────────────────────────────────────────────────────────────
const variantMap = {
  default: "bg-white border border-neutral-200",
  elevated: "bg-white shadow-md",
  bordered: "bg-white border-2",
  ghost: "bg-transparent",
  filled: "bg-blue-dark-50",
  "gradient-blue": "bg-gradient-to-br from-blue-dark-300 to-blue-light-300",
  "gradient-pastel":
    "bg-gradient-to-br from-coral-300 via-pink-300 to-lavender-300",
} as const;

// ─── Border colors (untuk variant "bordered") ─────────────────────────────────
const borderColorMap = {
  "blue-dark": "border-blue-dark-300",
  "blue-light": "border-blue-light-300",
  coral: "border-coral-300",
  pink: "border-pink-300",
  lavender: "border-lavender-300",
  yellow: "border-yellow-300",
  neutral: "border-neutral-200",
} as const;

// ─── Padding ─────────────────────────────────────────────────────────────────
const paddingMap = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;

// ─── Rounded ─────────────────────────────────────────────────────────────────
const roundedMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
} as const;

// ─── Props ───────────────────────────────────────────────────────────────────
type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;

  variant?: keyof typeof variantMap;
  borderColor?: keyof typeof borderColorMap;
  padding?: keyof typeof paddingMap;
  rounded?: keyof typeof roundedMap;

  /** Hover effect (scale + shadow) */
  hoverable?: boolean;

  /** Clickable card */
  onClick?: () => void;
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function Card({
  children,
  className,
  as: Component = "div",
  variant = "default",
  borderColor = "neutral",
  padding = "md",
  rounded = "xl",
  hoverable = false,
  onClick,
}: CardProps) {
  return (
    <Component
      onClick={onClick}
      className={cn(
        "overflow-hidden",
        variantMap[variant],
        variant === "bordered" && borderColorMap[borderColor],
        paddingMap[padding],
        roundedMap[rounded],
        hoverable &&
          "transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer",
        onClick && "cursor-pointer",
        className,
      )}
    >
      {children}
    </Component>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/**
 * Card.Header - area atas card (biasanya untuk gambar)
 */
Card.Header = function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("", className)}>{children}</div>;
};

/**
 * Card.Body - area konten utama card
 */
Card.Body = function CardBody({
  children,
  className,
  padding = "md",
}: {
  children: React.ReactNode;
  className?: string;
  padding?: keyof typeof paddingMap;
}) {
  return <div className={cn(paddingMap[padding], className)}>{children}</div>;
};

/**
 * Card.Footer - area bawah card (biasanya untuk tombol/action)
 */
Card.Footer = function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-t border-neutral-200 px-6 py-4", className)}>
      {children}
    </div>
  );
};
