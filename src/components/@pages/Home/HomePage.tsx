import HeroSection from "@pages/Home/HeroSection";
import AboutSection from "@pages/Home/AboutSection";
import WorkSection from "@pages/Home/WorkSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WorkSection />
    </div>
  );
}
