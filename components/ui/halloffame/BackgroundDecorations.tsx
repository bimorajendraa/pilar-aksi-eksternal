import NextImage from "../../ui/NextImage";

/**
 * Dekorasi latar belakang untuk HallOfFameSection.
 * Exclude & Union hanya tampil di md ke atas; kedua ellipse-flower
 * tetap tampil di semua ukuran layar. Posisi memakai persen agar
 * tetap proporsional saat section melebar/menyempit.
 */
export default function BackgroundDecorations() {
    return (
        <>
            <div className="absolute left-[-75] top-20 -translate-y-1/2 z-0 w-500 hidden md:block pointer-events-none">
                <NextImage
                    src="/images/Exclude.svg"
                    alt="dekorasi"
                    width={400}
                    height={213.2}
                    wrapperClassName="absolute"
                />
            </div>
            <div className="absolute left-[75%] top-[10%] -translate-y-1/2 z-0 w-750 pointer-events-none">
                <NextImage
                    src="/images/ellipse-flower-pastel.svg"
                    alt="dekorasi"
                    width={600}
                    height={213.2}
                    wrapperClassName="absolute"
                />
            </div>
            <div className="absolute left-[-15%] top-[50%] -translate-y-1/2 z-0 w-750 pointer-events-none">
                <NextImage
                    src="/images/ellipse-flower-blue.svg"
                    alt="dekorasi"
                    width={600}
                    height={213.2}
                    wrapperClassName="absolute"
                />
            </div>
            <div className="absolute left-340 top-280 -translate-y-1/2 z-0 w-500 hidden md:block pointer-events-none">
                <NextImage
                    src="/images/Union.svg"
                    alt="dekorasi"
                    width={380}
                    height={213.2}
                    wrapperClassName="absolute"
                />
            </div>
        </>
    );
}
