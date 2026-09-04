"use client";

import Typography from "@/components/ui/Typography";
import TypographyContainer from "@/components/ui/TypographyContainer";

/**
 * Judul "Hall Of Fame" bergradasi
 * beserta subtitle-nya.
 */
export default function SectionHeading() {
    return (
        <TypographyContainer
            as="div"
            maxWidth="xl"
            paddingX="md"
            paddingY="sm"
            className="relative z-10"
        >
            {/* Desktop: satu baris rata kanan */}
            <div className="hidden md:flex flex-row items-baseline justify-center gap-0">
                <Typography
                    as="span"
                    variant="h2"
                    font="merriweather"
                    italic
                    weight="bold"
                    isGradient
                    gradientPreset="blue-vertical"
                    isStroke
                    strokeValue="3"
                    strokeColor="white"
                    shadow="sm"
                    shadowColor="#00000040"
                >
                    &nbsp;H
                </Typography>
                <Typography
                    as="span"
                    variant="h2"
                    font="coolvetica"
                    italic
                    isGradient
                    gradientPreset="blue-vertical"
                    isStroke
                    strokeValue="3"
                    strokeColor="white"
                    shadow="sm"
                    shadowColor="#00000040"
                >
                    all&nbsp;
                </Typography>
                <Typography
                    as="span"
                    variant="h2"
                    font="merriweather"
                    italic
                    weight="bold"
                    isGradient
                    gradientPreset="pastel-vertical"
                    isStroke
                    strokeValue="3"
                    strokeColor="white"
                    shadow="sm"
                    shadowColor="#00000040"
                >
                    Of
                </Typography>
                <Typography
                    as="span"
                    variant="h2"
                    font="merriweather"
                    italic
                    weight="bold"
                    isGradient
                    gradientPreset="blue-vertical"
                    isStroke
                    strokeValue="3"
                    strokeColor="white"
                    shadow="sm"
                    shadowColor="#00000040"
                >
                    &nbsp;F
                </Typography>
                <Typography
                    as="span"
                    variant="h2"
                    font="coolvetica"
                    italic
                    isGradient
                    gradientPreset="blue-vertical"
                    isStroke
                    strokeValue="3"
                    strokeColor="white"
                    shadow="sm"
                    shadowColor="#00000040"
                >
                    ame&nbsp;
                </Typography>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden flex-row items-baseline justify-center gap-0 mb-4">
                <Typography
                    as="span"
                    variant="h2"
                    font="merriweather"
                    italic
                    weight="bold"
                    isGradient
                    gradientPreset="blue-vertical"
                    isStroke
                    strokeValue="3"
                    strokeColor="white"
                    shadow="sm"
                    shadowColor="#00000040"
                >
                    &nbsp;H
                </Typography>
                <Typography
                    as="span"
                    variant="h2"
                    font="coolvetica"
                    italic
                    isGradient
                    gradientPreset="blue-vertical"
                    isStroke
                    strokeValue="3"
                    strokeColor="white"
                    shadow="sm"
                    shadowColor="#00000040"
                >
                    all&nbsp;
                </Typography>
                <Typography
                    as="span"
                    variant="h2"
                    font="merriweather"
                    italic
                    weight="bold"
                    isGradient
                    gradientPreset="pastel-vertical"
                    isStroke
                    strokeValue="3"
                    strokeColor="white"
                    shadow="sm"
                    shadowColor="#00000040"
                >
                    Of
                </Typography>
                <Typography
                    as="span"
                    variant="h2"
                    font="merriweather"
                    italic
                    weight="bold"
                    isGradient
                    gradientPreset="blue-vertical"
                    isStroke
                    strokeValue="3"
                    strokeColor="white"
                    shadow="sm"
                    shadowColor="#00000040"
                >
                    &nbsp;F
                </Typography>
                <Typography
                    as="span"
                    variant="h2"
                    font="coolvetica"
                    italic
                    isGradient
                    gradientPreset="blue-vertical"
                    isStroke
                    strokeValue="3"
                    strokeColor="white"
                    shadow="sm"
                    shadowColor="#00000040"
                >
                    ame&nbsp;
                </Typography>
            </div>

            {/* ── Subtitle ── */}
            <Typography
                variant="body-small"
                font="body"
                color="neutral-600"
                align="center"
                className="mt-4 mb-8 md:text-[18px]"
            >
                Sebuah penghormatan abadi untuk perjalanan panjang,
                pencapaian luar biasa, dan kontribusi yang tak ternilai.
            </Typography>
        </TypographyContainer>
    );
}
