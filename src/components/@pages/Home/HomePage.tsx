import HeroSection from "@pages/Home/HeroSection";
import AboutSection from "@pages/Home/AboutSection";
import WorkSection from "@pages/Home/WorkSection";
import CanvasUniverse from "@/components/@common/Canvas/CanvasUniverse";

export default function HomePage() {
  return (
    <div>
      <CanvasUniverse />

      <HeroSection />
      <AboutSection />
      <WorkSection />
    </div>
  );
}
