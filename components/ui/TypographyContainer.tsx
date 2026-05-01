import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * TypographyContainer
 *
 * Wrapper layout yang menjaga konsistensi padding, max-width,
 * dan centering di seluruh halaman.
 *
 * Ini adalah "tulang punggung" layout — setiap section di halaman
 * sebaiknya dibungkus dengan komponen ini.
 *
 * @example
 * // Section biasa
 * <TypographyContainer>
 *   <h2>Konten section</h2>
 * </TypographyContainer>
 *
 * @example
 * // Section full-width (background penuh, konten tetap terbatas)
 * <div className="bg-blue-dark-300">
 *   <TypographyContainer>
 *     <h2 className="text-white">Hero</h2>
 *   </TypographyContainer>
 * </div>
 *
 * @example
 * // Section dengan padding vertikal custom
 * <TypographyContainer paddingY="lg">
 *   <p>Konten dengan padding lebih besar</p>
 * </TypographyContainer>
 */

// ─── Size presets ────────────────────────────────────────────────────────────
const maxWidthMap = {
  sm: "max-w-2xl", // 672px  — konten sempit (artikel, form)
  md: "max-w-4xl", // 896px  — konten medium
  lg: "max-w-6xl", // 1152px — konten lebar (default)
  xl: "max-w-7xl", // 1280px — konten sangat lebar
  full: "max-w-full", // tanpa batas
} as const;

const paddingXMap = {
  none: "px-0",
  sm: "px-4",
  md: "px-6 md:px-8",
  lg: "px-6 md:px-12 lg:px-16",
} as const;

const paddingYMap = {
  none: "py-0",
  sm: "py-8",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-24 md:py-32",
} as const;

// ─── Props ───────────────────────────────────────────────────────────────────
type TypographyContainerProps = {
  children: React.ReactNode;
  className?: string;

  /** Elemen HTML yang dirender (default: section) */
  as?: React.ElementType;

  /** Lebar maksimum konten */
  maxWidth?: keyof typeof maxWidthMap;

  /** Padding horizontal */
  paddingX?: keyof typeof paddingXMap;

  /** Padding vertikal */
  paddingY?: keyof typeof paddingYMap;

  /** Center konten secara horizontal */
  centered?: boolean;

  /** ID untuk anchor link navigasi */
  id?: string;
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function TypographyContainer({
  children,
  className,
  as: Component = "section",
  maxWidth = "lg",
  paddingX = "md",
  paddingY = "md",
  centered = true,
  id,
}: TypographyContainerProps) {
  return (
    <Component id={id} className={cn("w-full", className)}>
      <div
        className={cn(
          "w-full",
          maxWidthMap[maxWidth],
          paddingXMap[paddingX],
          paddingYMap[paddingY],
          centered && "mx-auto",
        )}
      >
        {children}
      </div>
    </Component>
  );
}
