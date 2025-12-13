import HeroSection from "@/components/@pages/Home/Sections/HeroSection";
import AboutSection from "@pages/Home/Sections/AboutSection";
import WorkExperienceSection from "@pages/Home/WorkExperienceSection";
import ProjectsSection from "@/components/@pages/Home/Sections/ProjectsSection";
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
