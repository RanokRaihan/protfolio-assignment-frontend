import BlogSection from "@/components/home/BlogSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";

export default function HomePage() {
  return (
    <main className="w-full scroll-m-1">
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <BlogSection />
    </main>
  );
}
