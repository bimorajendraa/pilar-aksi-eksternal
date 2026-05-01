import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * TypographyLine
 *
 * Wrapper untuk Typography yang menambahkan elemen dekoratif
 * berupa garis/underline di bawah atau di samping teks.
 *
 * Cocok untuk:
 * - Section heading dengan aksen warna
 * - Label kategori dengan garis kiri
 * - Judul dengan underline gradient
 *
 * @example
 * // Underline gradient bawah
 * <TypographyLine>Kenali HMSI ITS</TypographyLine>
 *
 * @example
 * // Border kiri (seperti label section)
 * <TypographyLine variant="left-border" color="blue-dark">
 *   Kabinet Pilar Aksi
 * </TypographyLine>
 *
 * @example
 * // Dot accent
 * <TypographyLine variant="dot" dotColor="#003cec">
 *   10 Departemen HMSI
 * </TypographyLine>
 */

type LineVariant =
  | "underline" // garis bawah penuh
  | "underline-short" // garis bawah pendek (50%)
  | "left-border" // border kiri vertikal
  | "dot" // titik aksen di kiri
  | "none"; // tanpa dekorasi

type LineColor =
  | "blue-dark"
  | "blue-light"
  | "coral"
  | "pink"
  | "lavender"
  | "yellow"
  | "gradient"
  | "white";

const lineColorMap: Record<LineColor, string> = {
  "blue-dark": "bg-blue-dark-300",
  "blue-light": "bg-blue-light-300",
  coral: "bg-coral-300",
  pink: "bg-pink-300",
  lavender: "bg-lavender-300",
  yellow: "bg-yellow-300",
  gradient: "bg-gradient-to-r from-blue-dark-300 to-blue-light-300",
  white: "bg-white",
};

const dotColorMap: Record<LineColor, string> = {
  "blue-dark": "bg-blue-dark-300",
  "blue-light": "bg-blue-light-300",
  coral: "bg-coral-300",
  pink: "bg-pink-300",
  lavender: "bg-lavender-300",
  yellow: "bg-yellow-300",
  gradient: "bg-blue-dark-300",
  white: "bg-white",
};

type TypographyLineProps = {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;

  /** Jenis dekorasi garis */
  variant?: LineVariant;

  /** Warna garis/border/dot */
  color?: LineColor;

  /** Ketebalan garis underline (px) */
  lineHeight?: number;

  /** Ketebalan border kiri (px) */
  borderWidth?: number;

  /** Gap antara teks dan garis (px) */
  gap?: number;
};

export default function TypographyLine({
  children,
  className,
  wrapperClassName,
  variant = "underline",
  color = "blue-dark",
  lineHeight = 3,
  borderWidth = 4,
  gap = 8,
}: TypographyLineProps) {
  // ── underline / underline-short ───────────────────────────────────────────
  if (variant === "underline" || variant === "underline-short") {
    return (
      <div className={cn("flex flex-col", wrapperClassName)} style={{ gap }}>
        <div className={className}>{children}</div>
        <div
          className={cn(
            "rounded-full",
            lineColorMap[color],
            variant === "underline-short" ? "w-1/2" : "w-full",
          )}
          style={{ height: lineHeight }}
        />
      </div>
    );
  }

  // ── left-border ───────────────────────────────────────────────────────────
  if (variant === "left-border") {
    return (
      <div
        className={cn("flex flex-row items-stretch", wrapperClassName)}
        style={{ gap }}
      >
        <div
          className={cn("rounded-full flex-shrink-0", lineColorMap[color])}
          style={{ width: borderWidth }}
        />
        <div className={className}>{children}</div>
      </div>
    );
  }

  // ── dot ──────────────────────────────────────────────────────────────────
  if (variant === "dot") {
    return (
      <div
        className={cn("flex flex-row items-center", wrapperClassName)}
        style={{ gap }}
      >
        <div
          className={cn(
            "rounded-full flex-shrink-0 w-3 h-3",
            dotColorMap[color],
          )}
        />
        <div className={className}>{children}</div>
      </div>
    );
  }

  // ── none ─────────────────────────────────────────────────────────────────
  return <div className={cn(className, wrapperClassName)}>{children}</div>;
}
