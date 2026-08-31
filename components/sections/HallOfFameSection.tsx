"use client";

import * as React from "react";
import TypographyContainer from "@/components/ui/TypographyContainer";
import {
    BackgroundDecorations,
    SectionHeading,
    FeaturedCard,
    CollectionGrid,
    FeaturedCollectionModal,
    ItemDetailModal,
    type CollectionItem,
} from "@/components/ui/halloffame";

export default function HallOfFameSection() {
    const [isFeaturedModalOpen, setIsFeaturedModalOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState<CollectionItem | null>(
        null
    );

    const collectionItems: CollectionItem[] = Array.from({ length: 9 }).map(
        (_, i) => ({
            id: i + 1,
            nama: `Hall of Fame ${i + 1}`,
            images: Array.from(
                { length: 5 },
                (_, j) => `/images/gallery-${((i + j) % 9) + 1}.webp`
            ),
            deskripsi: "Lorem ipsum dolor sit amet.",
            href: `/Collection/Item?id=${i + 1}`,
        })
    );

    const featuredCollectionItems = Array.from({ length: 4 }).map((_, i) => ({
        id: i + 1,
        nama: `Featured Collection ${i + 1}`,
        deskripsi: "Lorem ipsum dolor sit amet.",
        image: `/images/gallery-${i + 1}.webp`,
        href: `/Collection/Item?id=${i + 1}`,
    }));

    return (
        <section className="relative w-full bg-white overflow-hidden">
            <BackgroundDecorations />

            <SectionHeading />

            <TypographyContainer
                as="div"
                maxWidth="xl"
                paddingX="md"
                paddingY="none"
            >
                <FeaturedCard
                    imageSrc="/images/foto-bersama-hmsi-1.png"
                    title="Our Journey So Far"
                    description="Rekam jejak tentang bagaimana mimpi sederhana berkembang menjadi karya nyata melalui dedikasi dan kerja keras tanpa henti."
                    buttonLabel="Open Collection"
                    onOpenCollection={() => setIsFeaturedModalOpen(true)}
                />

                <CollectionGrid
                    items={collectionItems}
                    onItemClick={setSelectedItem}
                />
            </TypographyContainer>

            <div className="h-4" />

            <FeaturedCollectionModal
                isOpen={isFeaturedModalOpen}
                onClose={() => setIsFeaturedModalOpen(false)}
                eyebrow="Featured Collection"
                title="A glimpse into the story of our shared journey"
                items={featuredCollectionItems}
            />

            <ItemDetailModal
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
                detailsLabel="Detail Event"
            />
        </section>
    );
}
