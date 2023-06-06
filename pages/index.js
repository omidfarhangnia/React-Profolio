import AboutSection from "@/Components/AboutSection";
import HomeSection from "@/Components/HomeSection";
import Navbar from "@/Components/Navbar";
import ProjectSection from "@/Components/ProjectSection";
import SayHelloSection from "@/Components/SayHelloSection";
import SkillsSection from "@/Components/SkillsSection";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <main>
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <SayHelloSection />
        </main>
      </div>
    </>
  );
}
