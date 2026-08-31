"use client";

import Typography from "@/components/ui/Typography";
import NextImage from "../../ui/NextImage";
import Card from "../../ui/Card";
import { CircleX } from "lucide-react";
import type { FeaturedCollectionItem } from "./types";

type FeaturedCollectionModalProps = {
    isOpen: boolean;
    onClose: () => void;
    eyebrow: string;
    title: string;
    items: FeaturedCollectionItem[];
};

/**
 * Modal "Featured Collection": sticky header (eyebrow + title + tombol
 * tutup) di atas grid kartu yang bisa discroll. Tertutup saat klik
 * di area backdrop.
 */
export default function FeaturedCollectionModal({
    isOpen,
    onClose,
    eyebrow,
    title,
    items,
}: FeaturedCollectionModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 md:p-8"
            onClick={(e) => {
                // Tutup modal hanya jika klik terjadi di area backdrop, bukan di dalam panel
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Sticky header */}
                <div className="sticky top-0 z-10 bg-white px-6 py-5 flex items-start justify-between gap-4">
                    <div>
                        <Typography
                            variant="h5"
                            font="body"
                            weight="bold"
                            isGradient
                            gradientPreset="pastel-vertical"
                            className="leading-tight"
                        >
                            {eyebrow}
                        </Typography>
                        <Typography
                            variant="h4"
                            font="coolvetica"
                            italic
                            className="!mt-1 !leading-tight text-blue-dark-200"
                        >
                            {title}&nbsp;
                        </Typography>
                    </div>

                    <button
                        onClick={onClose}
                        aria-label="Tutup"
                        className="flex-shrink-0 rounded-full p-1.5"
                    >
                        <CircleX className="w-7 h-7 text-neutral-700" />
                    </button>

                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-dark-300 to-blue-light-300" />
                </div>

                {/* Body: grid kartu, bisa discroll */}
                <div className="overflow-y-auto px-6 py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {items.map((item) => (
                            <Card
                                key={item.id}
                                variant="elevated"
                                hoverable
                                padding="none"
                                rounded="2xl"
                                className="overflow-hidden"
                            >
                                <Card.Header>
                                    <NextImage
                                        src={item.image}
                                        alt={item.nama}
                                        ratio="16/9"
                                        showSkeleton={true}
                                    />
                                </Card.Header>

                                <div className="h-[3px] w-full bg-gradient-to-r from-blue-dark-300 to-blue-light-300" />

                                <Card.Body className="py-4 px-4 bg-blue-dark-50">
                                    <Typography
                                        variant="h5"
                                        font="coolvetica"
                                        className="!text-neutral-600"
                                    >
                                        {item.nama}
                                    </Typography>
                                    <Typography
                                        variant="body-small"
                                        font="body"
                                        className="text-neutral-500 mt-1 line-clamp-2"
                                    >
                                        {item.deskripsi}
                                    </Typography>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
