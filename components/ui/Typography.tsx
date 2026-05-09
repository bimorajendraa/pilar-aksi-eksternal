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
  "coolvetica-regular": "font-coolvetica-regular",
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
  "neutral-600": "text-neutral-600",
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

// ─── Gradient presets ─────────────────────────────────────────────────────────
export const GradientPreset = {
  blue: "linear-gradient(90deg, var(--color-blue-dark-300) 0%, var(--color-blue-light-200) 100%)",
  "blue-vertical":
    "linear-gradient(180deg, var(--color-blue-dark-300) 0%, var(--color-blue-light-200) 100%)",
  "blue-hero": "linear-gradient(180deg, #00cfff 0%, #0066ff 45%, #0022cc 100%)",
  pastel:
    "linear-gradient(135deg, var(--color-coral-300) 0%, var(--color-pink-300) 33%, var(--color-lavender-300) 66%, var(--color-yellow-300) 100%)",
  "pastel-vertical":
    "linear-gradient(180deg, var(--color-coral-300) 0%, var(--color-pink-300) 33%, var(--color-lavender-300) 66%, var(--color-yellow-300) 100%)",
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
  gradientPreset?: keyof typeof GradientPreset;

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
  gradientValue,
  gradientPreset,
  shadow,
  shadowColor = "#000000",
  className,
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) {
  const Component = as || defaultTags[variant] || "p";

  const resolvedGradient =
    gradientValue ??
    (gradientPreset
      ? GradientPreset[gradientPreset]
      : "linear-gradient(135deg, #003cec 0%, #009789 100%)");

  const gradientStyle: React.CSSProperties = isGradient
    ? {
        backgroundImage: resolvedGradient,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }
    : {};

  const strokeStyle: React.CSSProperties = isStroke
    ? {
        WebkitTextStroke: `1px ${strokeColor}`,
        paintOrder: "stroke fill",
        filter: `
        drop-shadow(0 0 ${strokeValue} ${strokeColor})
        drop-shadow(0 0 ${strokeValue} ${strokeColor})
        drop-shadow(0 0 ${strokeValue} ${strokeColor})
        drop-shadow(0 0 ${strokeValue} ${strokeColor})
      `,
      }
    : {};

  return (
    <>
      {/* SVG filter untuk outline ke luar */}
      {isStroke && (
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id="text-outline">
              <feMorphology
                in="SourceAlpha"
                result="expanded"
                operator="dilate"
                radius={strokeValue.replace("px", "")}
              />
              <feFlood floodColor={strokeColor} result="color" />
              <feComposite
                in="color"
                in2="expanded"
                operator="in"
                result="outline"
              />
              <feMerge>
                <feMergeNode in="outline" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      )}
      <Component
        style={
          {
            "--shadow-color": shadowColor,
            ...gradientStyle,
            ...(isStroke ? { filter: "url(#text-outline)" } : {}),
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
    </>
  );
}
