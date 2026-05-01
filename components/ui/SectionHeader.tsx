import * as React from "react";
import { cn } from "@/lib/utils";
import Typography from "./Typography";
import TypographyLine from "./TypographyLine";

/**
 * SectionHeader
 *
 * Heading section yang konsisten — biasanya diletakkan di atas
 * setiap section utama halaman.
 *
 * Menggabungkan Typography + TypographyLine menjadi satu komponen
 * yang mudah dipakai.
 *
 * @example
 * // Section heading biasa
 * <SectionHeader title="10 Departemen HMSI" />
 *
 * @example
 * // Dengan subtitle dan centered
 * <SectionHeader
 *   title="Kalender HMSI ITS"
 *   subtitle="Lihat jadwal lengkap event, kegiatan, dan agenda penting HMSI ITS."
 *   centered
 * />
 *
 * @example
 * // Dengan label kategori di atas
 * <SectionHeader
 *   label="Kenali Kami"
 *   title="HMSI ITS"
 *   font="merriweather"
 * />
 *
 * @example
 * // Heading dengan gradient
 * <SectionHeader
 *   title="Satu Pintu HMSI"
 *   isGradient
 *   gradientValue="linear-gradient(135deg, #003cec 0%, #009789 100%)"
 * />
 */

type SectionHeaderProps = {
  /** Label kecil di atas judul (opsional) */
  label?: string;

  /** Judul utama section */
  title: string;

  /** Deskripsi/subtitle di bawah judul (opsional) */
  subtitle?: string;

  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;

  /** Pusatkan semua teks */
  centered?: boolean;

  /** Font untuk judul */
  font?: "coolvetica" | "merriweather" | "body";

  /** Ukuran heading */
  variant?: "h1" | "h2" | "h3" | "h4";

  /** Warna teks judul */
  color?:
    | "default"
    | "white"
    | "blue-dark-300"
    | "blue-light-300"
    | "coral-300"
    | "pink-300"
    | "lavender-300"
    | "yellow-300";

  /** Gunakan gradient pada judul */
  isGradient?: boolean;
  gradientValue?: string;

  /** Tampilkan garis dekoratif di bawah judul */
  showLine?: boolean;
  lineColor?:
    | "blue-dark"
    | "blue-light"
    | "coral"
    | "pink"
    | "lavender"
    | "yellow"
    | "gradient"
    | "white";
  lineVariant?: "underline" | "underline-short";
};

export default function SectionHeader({
  label,
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  centered = false,
  font = "coolvetica",
  variant = "h2",
  color = "default",
  isGradient = false,
  gradientValue,
  showLine = false,
  lineColor = "blue-dark",
  lineVariant = "underline-short",
}: SectionHeaderProps) {
  const align = centered ? "center" : "left";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center" : "items-start",
        "gap-3",
        className,
      )}
    >
      {/* Label kecil */}
      {label && (
        <Typography
          variant="title"
          font="body"
          weight="bold"
          color="blue-dark-300"
          align={align}
          className="uppercase tracking-widest"
        >
          {label}
        </Typography>
      )}

      {/* Judul utama */}
      {showLine ? (
        <TypographyLine
          variant={lineVariant}
          color={lineColor}
          wrapperClassName={cn(centered && "items-center")}
        >
          <Typography
            variant={variant}
            font={font}
            weight={font === "merriweather" ? "bold" : "regular"}
            color={isGradient ? "gradient" : color}
            align={align}
            italic={font !== "body"}
            isGradient={isGradient}
            gradientValue={gradientValue}
            className={titleClassName}
          >
            {title}
          </Typography>
        </TypographyLine>
      ) : (
        <Typography
          variant={variant}
          font={font}
          weight={font === "merriweather" ? "bold" : "regular"}
          color={isGradient ? "gradient" : color}
          align={align}
          italic={font !== "body"}
          isGradient={isGradient}
          gradientValue={gradientValue}
          className={titleClassName}
        >
          {title}
        </Typography>
      )}

      {/* Subtitle */}
      {subtitle && (
        <Typography
          variant="body-small"
          font="body"
          color={color === "white" ? "white" : "muted"}
          align={align}
          className={cn("max-w-2xl", subtitleClassName)}
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
}
