import NextImage from "../../ui/NextImage";

/**
 * Dekorasi latar belakang untuk HallOfFameSection.
 * Exclude & Union hanya tampil di md ke atas.
 * Kedua ellipse-flower tampil di semua ukuran layar, tapi dengan
 * posisi & ukuran berbeda: lebih kecil di mobile, ukuran penuh
 * ("Full") mulai dari md ke atas.
 */

export default function BackgroundDecorations() {
    return (
        <>
            <div className="absolute left-0 top-20 -translate-y-1/2 z-0 w-500 hidden md:block pointer-events-none">
                <NextImage
                    src="/images/Exclude.svg"
                    alt="dekorasi"
                    width={216.09}
                    height={213.2}
                    wrapperClassName="absolute"
                />
            </div>

            <div className="absolute left-[30%] top-[10%] w-100 -translate-y-1/2 z-0 md:left-[80%] md:w-400 pointer-events-none blur">
                <NextImage
                    src="/images/ellipse-flower-pastel.svg"
                    alt="dekorasi"
                    width={591.9}
                    height={591.9}
                    wrapperClassName="absolute"
                />
            </div>

            <div className="absolute left-[-50%] top-[75%] w-100 md:left-[-30%] lg:left-[-20%]  md:top-[50%] md:w-400 -translate-y-1/2 z-0 pointer-events-none blur">
                <NextImage
                    src="/images/ellipse-flower-blue.svg"
                    alt="dekorasi"
                    width={591.9}
                    height={591.9}
                    wrapperClassName="absolute"
                />
            </div>

            <div className="absolute left-370 top-320 -translate-y-1/2 z-0 w-500 hidden md:block pointer-events-none">
                <NextImage
                    src="/images/Union.svg"
                    alt="dekorasi"
                    width={209.8}
                    height={207.1}
                    wrapperClassName="absolute"
                />
            </div>
        </>
    );
}