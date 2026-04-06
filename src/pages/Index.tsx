import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import BlogSection from "@/components/BlogSection";
import ComingSoonSections from "@/components/ComingSoonSections";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <BlogSection />
      <ComingSoonSections />
      <ContactSection />
      <footer className="py-8 text-center border-t border-border">
        <p className="font-display text-xs text-muted-foreground">
          © 2026 Aditya Mandlik · Built with precision & purpose
        </p>
      </footer>
    </div>
  );
};

export default Index;
