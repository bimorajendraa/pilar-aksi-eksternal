"use client";

import Typography from "@/components/ui/Typography";
import NextImage from "../../ui/NextImage";
import Button from "@/components/ui/Button";
import Card from "../../ui/Card";

type FeaturedCardProps = {
    imageSrc: string;
    title: string;
    description: string;
    buttonLabel: string;
    onOpenCollection: () => void;
};

/**
 * Kartu besar di atas grid koleksi: foto + judul + deskripsi + tombol
 * yang membuka FeaturedCollectionModal.
 */
export default function FeaturedCard({
    imageSrc,
    title,
    description,
    buttonLabel,
    onOpenCollection,
}: FeaturedCardProps) {
    return (
        <Card
            variant="elevated"
            hoverable={false}
            padding="none"
            rounded="2xl"
            className="relative z-10 flex flex-col md:flex-row overflow-hidden mb-14"
        >
            <div className="w-full md:w-[613px] flex-shrink-0">
                <NextImage src={imageSrc} alt="" ratio="16/9" showSkeleton={true} />
            </div>

            <Card.Body className="flex flex-col justify-center gap-4 p-6 md:px-10 md:pb-10 md:pt-0">
                <Typography
                    variant="h3"
                    font="coolvetica"
                    italic
                    weight="bold"
                    isGradient
                    gradientPreset="blue-vertical"
                    className="leading-tight !mt-0 !pt-0"
                >
                    {title}
                </Typography>

                <Typography font="body" className="text-neutral-600">
                    {description}
                </Typography>

                <div className="w-full md:w-fit">
                    <Button
                        variant="primary"
                        size="md"
                        rounded="lg"
                        rightIcon={<span>›</span>}
                        onClick={onOpenCollection}
                    >
                        {buttonLabel}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
