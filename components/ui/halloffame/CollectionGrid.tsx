"use client";

import Typography from "@/components/ui/Typography";
import NextImage from "../../ui/NextImage";
import Card from "../../ui/Card";
import type { CollectionItem } from "./types";

type CollectionGridProps = {
    items: CollectionItem[];
    onItemClick: (item: CollectionItem) => void;
};

/**
 * Grid kartu koleksi. Setiap kartu adalah tombol yang memicu
 * onItemClick, biasanya dipakai untuk membuka ItemDetailModal.
 */
export default function CollectionGrid({ items, onItemClick }: CollectionGridProps) {
    return (
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-5">
            {items.map((item) => (
                <button
                    key={item.id}
                    type="button"
                    onClick={() => onItemClick(item)}
                    className="text-left w-full h-full"
                >
                    <Card
                        variant="elevated"
                        hoverable
                        padding="none"
                        rounded="2xl"
                        className="overflow-hidden h-full"
                    >
                        <Card.Header>
                            <NextImage
                                src={item.images[0]}
                                alt={item.nama}
                                ratio="16/9"
                                showSkeleton={true}
                            />
                        </Card.Header>

                        <div className="h-[3px] w-full bg-gradient-to-r from-blue-dark-300 to-blue-light-300" />

                        <Card.Body className="py-4 px-3 text-center">
                            <Typography
                                font="body"
                                weight="bold"
                                className="!text-blue-dark-300"
                            >
                                {item.nama}
                            </Typography>
                        </Card.Body>
                    </Card>
                </button>
            ))}
        </div>
    );
}
