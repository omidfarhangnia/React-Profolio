import AboutSection from "@/Components/AboutSection";
import HomeSection from "@/Components/HomeSection";
import Navbar from "@/Components/Navbar";
import ProjectSection from "@/Components/ProjectSection";
import SayHelloSection from "@/Components/SayHelloSection";
import SectionContainer from "@/Components/SectionContainer";
import SkillsSection from "@/Components/SkillsSection";
import Context from "@/context/context";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <main
          className="relative w-full h-[100vh] overflow-hidden"
          id="sectionContainer"
        >
          <SectionContainer>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <SayHelloSection />
          </SectionContainer>
        </main>
      </div>
    </>
  );
}
