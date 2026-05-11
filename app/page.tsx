// page.tsx (contoh penggunaan)
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import KabinetSection from "@/components/sections/KabinetSection";
import DepartemenSection from "@/components/sections/DepartemenSection";
import TestimoniSection from "@/components/sections/TestimoniSection";
import KalenderSection from "@/components/sections/KalenderSection";
import GallerySection from "@/components/sections/GallerySection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <KabinetSection />
      <DepartemenSection />
      <TestimoniSection />
      <KalenderSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
