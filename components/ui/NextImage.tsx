import * as React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

/**
 * NextImage
 *
 * Wrapper untuk next/image yang menambahkan:
 * - Loading skeleton otomatis
 * - Fallback jika gambar gagal load
 * - Preset aspect ratio yang umum dipakai
 * - Object-fit variants
 *
 * @example
 * // Gambar dengan aspect ratio 16:9
 * <NextImage
 *   src="/images/hero.jpg"
 *   alt="Hero HMSI"
 *   ratio="16/9"
 * />
 *
 * @example
 * // Avatar bulat
 * <NextImage
 *   src="/images/avatar.jpg"
 *   alt="Nama Orang"
 *   ratio="1/1"
 *   rounded="full"
 * />
 *
 * @example
 * // Card departemen dengan overlay gradient
 * <NextImage
 *   src="/images/dept.jpg"
 *   alt="Entrepreneurship"
 *   ratio="4/3"
 *   overlay="gradient-bottom"
 * />
 */

// ─── Aspect ratios ───────────────────────────────────────────────────────────
const ratioMap = {
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
  "3/2": "aspect-[3/2]",
  "2/3": "aspect-[2/3]",
  auto: "",
} as const;

// ─── Rounded ─────────────────────────────────────────────────────────────────
const roundedMap = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
} as const;

// ─── Overlay ─────────────────────────────────────────────────────────────────
const overlayMap = {
  none: "",
  "gradient-bottom":
    "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/70 after:to-transparent",
  "gradient-top":
    "after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/70 after:to-transparent",
  "dark-50": "after:absolute after:inset-0 after:bg-black/50",
  "blue-gradient":
    "after:absolute after:inset-0 after:bg-gradient-to-t after:from-blue-dark-400/80 after:to-transparent",
} as const;

// ─── Props ───────────────────────────────────────────────────────────────────
type NextImageProps = Omit<ImageProps, "className"> & {
  /** Kelas untuk wrapper div */
  wrapperClassName?: string;

  /** Kelas untuk elemen <img> */
  imageClassName?: string;

  /** Aspect ratio container */
  ratio?: keyof typeof ratioMap;

  /** Border radius */
  rounded?: keyof typeof roundedMap;

  /** Overlay di atas gambar */
  overlay?: keyof typeof overlayMap;

  /** Tampilkan skeleton saat loading */
  showSkeleton?: boolean;

  /** Src fallback jika gambar gagal */
  fallbackSrc?: string;

  /** Konten yang ditumpuk di atas gambar (misal: label departemen) */
  children?: React.ReactNode;
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function NextImage({
  src,
  alt,
  wrapperClassName,
  imageClassName,
  ratio = "auto",
  rounded = "none",
  overlay = "none",
  showSkeleton = true,
  fallbackSrc = "/images/placeholder.png",
  children,
  fill,
  width,
  height,
  ...props
}: NextImageProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [imgSrc, setImgSrc] = React.useState(src);

  const hasRatio = ratio !== "auto";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        ratioMap[ratio],
        roundedMap[rounded],
        overlay !== "none" && overlayMap[overlay],
        wrapperClassName,
      )}
    >
      {/* Skeleton loader */}
      {showSkeleton && isLoading && (
        <div className="absolute inset-0 animate-pulse bg-neutral-200" />
      )}

      <Image
        src={imgSrc}
        alt={alt}
        fill={hasRatio || fill ? true : undefined}
        width={!hasRatio && !fill ? width : undefined}
        height={!hasRatio && !fill ? height : undefined}
        className={cn(
          "object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          imageClassName,
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc);
          setIsLoading(false);
        }}
        {...props}
      />

      {/* Children (overlay content) */}
      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  );
}
