import HeroSection from "@pages/Home/HeroSection";
import AboutSection from "@pages/Home/AboutSection";
import WorkExperienceSection from "@pages/Home/WorkExperienceSection";
import ProjectsSection from "@pages/Home/ProjectsSection";
import CanvasUniverse from "@/components/@common/Canvas/CanvasUniverse";

export default function HomePage() {
  return (
    <div className="text-white">
      <CanvasUniverse />

      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <ProjectsSection />
    </div>
  );
}
