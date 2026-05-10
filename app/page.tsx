// page.tsx (contoh penggunaan)
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import KabinetSection from "@/components/sections/KabinetSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <KabinetSection />
    </main>
  );
}
