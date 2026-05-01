import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Variant → font-size class ───────────────────────────────────────────────
export const TypographyVariant = {
  h1: "text-[96px] leading-[86px]",
  h2: "text-[64px] leading-[86px]",
  h3: "text-[48px] leading-[86px]",
  h4: "text-[30px] leading-[64px]",
  h5: "text-[24px] leading-[36px]",
  h6: "text-[20px] leading-[32px]",
  "body-large": "text-[18px] leading-[24px]",
  "body-small": "text-[16px] leading-[24px]",
  title: "text-[14px] leading-[18px]",
  caption: "text-[12px] leading-[16px]",
} as const;

// ─── Font family ─────────────────────────────────────────────────────────────
export const FontVariant = {
  coolvetica: "font-coolvetica", // Coolvetica — heading display
  merriweather: "font-merriweather", // Merriweather — heading serif
  body: "font-body", // Reddit Sans — body
} as const;

// ─── Font weight ─────────────────────────────────────────────────────────────
export const FontWeight = {
  regular: "font-normal",
  bold: "font-bold",
} as const;

// ─── Text color ──────────────────────────────────────────────────────────────
export const TextColor = {
  default: "text-foreground",
  white: "text-white",
  muted: "text-neutral-400",
  "blue-dark-300": "text-blue-dark-300",
  "blue-light-300": "text-blue-light-300",
  "coral-300": "text-coral-300",
  "pink-300": "text-pink-300",
  "lavender-300": "text-lavender-300",
  "yellow-300": "text-yellow-300",
  gradient: "",
} as const;

// ─── Text align ──────────────────────────────────────────────────────────────
export const TextAlign = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
} as const;

// ─── Shadow ──────────────────────────────────────────────────────────────────
export const FontShadowClassMap = {
  sm: "drop-shadow-[0_3px_0.1px_var(--shadow-color)]",
  md: "drop-shadow-[0_6px_0.1px_var(--shadow-color)]",
  lg: "drop-shadow-[0_12px_0.1px_var(--shadow-color)]",
} as const;

// ─── Default HTML tags per variant ───────────────────────────────────────────
const defaultTags: Record<keyof typeof TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  "body-large": "p",
  "body-small": "p",
  title: "p",
  caption: "p",
};

// ─── Props ───────────────────────────────────────────────────────────────────
type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  variant?: keyof typeof TypographyVariant;
  font?: keyof typeof FontVariant;
  weight?: keyof typeof FontWeight;
  color?: keyof typeof TextColor;
  align?: keyof typeof TextAlign;
  italic?: boolean;
  truncate?: boolean;

  // Stroke (outline)
  isStroke?: boolean;
  strokeValue?: string;
  strokeColor?: string;

  // Gradient fill
  isGradient?: boolean;
  gradientValue?: string;

  // Shadow
  shadow?: keyof typeof FontShadowClassMap;
  shadowColor?: string;

  children: React.ReactNode;
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function Typography<T extends React.ElementType = "p">({
  as,
  children,
  variant = "body-large",
  font = "body",
  weight = "regular",
  color = "default",
  align,
  italic = false,
  truncate = false,
  isStroke = false,
  strokeValue = "6px",
  strokeColor = "white",
  isGradient = false,
  gradientValue = "linear-gradient(135deg, #003cec 0%, #009789 100%)",
  shadow,
  shadowColor = "#000000",
  className,
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) {
  const Component = as || defaultTags[variant] || "p";

  const gradientStyle: React.CSSProperties = isGradient
    ? {
        backgroundImage: gradientValue,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }
    : {};

  const strokeStyle: React.CSSProperties = isStroke
    ? {
        WebkitTextStroke: `${strokeValue} ${strokeColor}`,
        paintOrder: "stroke fill",
      }
    : {};

  return (
    <Component
      style={
        {
          "--shadow-color": shadowColor,
          ...strokeStyle,
          ...gradientStyle,
          ...((props as any).style || {}),
        } as React.CSSProperties
      }
      className={cn(
        FontVariant[font],
        TypographyVariant[variant],
        FontWeight[weight],
        !isGradient && TextColor[color],
        align && TextAlign[align],
        italic && "italic",
        truncate && "truncate",
        shadow && FontShadowClassMap[shadow],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
