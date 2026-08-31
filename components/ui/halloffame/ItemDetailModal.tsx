"use client";

import * as React from "react";
import Typography from "@/components/ui/Typography";
import NextImage from "../../ui/NextImage";
import { CircleX, ArrowRight, ArrowLeft } from "lucide-react";
import type { CollectionItem } from "./types";

type ItemDetailModalProps = {
    item: CollectionItem | null;
    onClose: () => void;
    detailsLabel?: string;
};

/**
 * Modal detail item: sticky header (nama item + tombol tutup), galeri
 * foto dengan navigasi panah & dots, lalu blok "Detail Event".
 * Mengelola index foto aktif sendiri, reset ke 0 setiap kali item
 * yang dibuka berganti.
 */
export default function ItemDetailModal({
    item,
    onClose,
    detailsLabel = "Detail Event",
}: ItemDetailModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        setCurrentImageIndex(0);
    }, [item?.id]);

    if (!item) return null;

    const goToPrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? item.images.length - 1 : prev - 1
        );
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === item.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50 p-4 md:p-8"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Sticky header */}
                <div className="sticky top-0 z-10 bg-white px-6 py-5 flex items-center justify-between gap-4">
                    <Typography
                        variant="h4"
                        font="body"
                        weight="bold"
                        className="!text-neutral-900 leading-tight"
                    >
                        {item.nama}
                    </Typography>

                    <button
                        onClick={onClose}
                        aria-label="Tutup"
                        className="flex-shrink-0 rounded-full p-1.5"
                    >
                        <CircleX className="w-8 h-8 text-neutral-600" />
                    </button>

                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-dark-300 to-blue-light-300" />
                </div>

                {/* Body: bisa discroll */}
                <div className="overflow-y-auto">
                    {/* Galeri foto */}
                    <div className="relative m-6 rounded-2xl overflow-hidden">
                        <NextImage
                            src={item.images[currentImageIndex]}
                            alt={item.nama}
                            ratio="16/9"
                            showSkeleton={true}
                        />

                        {item.images.length > 1 && (
                            <>
                                <button
                                    onClick={goToPrevImage}
                                    aria-label="Foto sebelumnya"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-dark-300 hover:bg-blue-dark-400 rounded-xl p-2.5 shadow-md transition-colors"
                                >
                                    <ArrowLeft className="w-5 h-5 text-white" />
                                </button>
                                <button
                                    onClick={goToNextImage}
                                    aria-label="Foto selanjutnya"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-dark-300 hover:bg-blue-dark-400 rounded-xl p-2.5 shadow-md transition-colors"
                                >
                                    <ArrowRight className="w-5 h-5 text-white" />
                                </button>

                                {/* Dots indicator */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                                    {item.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            aria-label={`Ke foto ${idx + 1}`}
                                            className={`h-2 rounded-full transition-all ${idx === currentImageIndex
                                                    ? "w-6 bg-blue-dark-300"
                                                    : "w-2 bg-white/70"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Event Details | Background gradient bagus -> bg-gradient-to-br from-blue-500 to-blue-dark-300 */}
                    <div className="m-6 bg-blue-dark-100 rounded-2xl  p-6 md:p-6">
                        <Typography
                            variant="h6"
                            font="body"
                            weight="bold"
                            className="!text-white mb-3 md:!text-2xl"
                        >
                            {detailsLabel}
                        </Typography>
                        <Typography variant="body-small" font="body" className="!text-white/90 md:!text-lg">
                            {item.deskripsi}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}
