import React from "react";

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block">
      {/* Layer 1: stroke putih di belakang */}
      <span
        aria-hidden
        style={{
          fontFamily: "var(--font-merriweather), serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "clamp(72px, 10vw, 120px)",
          lineHeight: 1,
          WebkitTextStroke: "12px white",
          color: "transparent",
          position: "absolute",
          top: 0,
          left: 0,
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>

      {/* Layer 2: gradient fill di depan */}
      <span
        style={{
          fontFamily: "var(--font-merriweather), serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "clamp(72px, 10vw, 120px)",
          lineHeight: 1,
          color: "transparent",
          backgroundImage:
            "linear-gradient(180deg, #ffffff 0%, #7eb8f7 30%, #2563eb 65%, #1e3a8a 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          position: "relative",
          whiteSpace: "nowrap",
          filter: "drop-shadow(0 6px 16px rgba(0,30,120,0.5))",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background — ganti div ini dengan <Image> saat background asli sudah ada */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #93c5fd 0%, #1d4ed8 40%, #1e40af 70%, #1e3a8a 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-2 px-4">
        <GradientText>Satu Pintu</GradientText>
        <GradientText>HMSI</GradientText>

        {/* Subtitle pill */}
        <div
          className="mt-6 px-50 py-2 rounded-full"
          style={{
            background: "linear-gradient(90deg, #009789 0%, #003cec 100%)",
            border: "2px solid white",
          }}
        >
          <p
            style={{
              fontFamily: '"Coolvetica", sans-serif',
              fontStyle: "italic",
              fontSize: "18px",
              color: "white",
              letterSpacing: "0.03em",
            }}
          >
            #Kuatkan Pilar, Satukan Aksi Nyata
          </p>
        </div>
      </div>
    </section>
  );
}
