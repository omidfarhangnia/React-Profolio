import AboutSection from "@/Components/AboutSection";
import HomeSection from "@/Components/HomeSection";
import Navbar from "@/Components/Navbar";
import ProjectSection from "@/Components/ProjectSection";
import SayHelloSection from "@/Components/SayHelloSection";
import SectionContainer from "@/Components/SectionContainer";
import SkillsSection from "@/Components/SkillsSection";
import React, { createContext, useContext, useState } from "react";
const ActiveAndChangeActive = createContext(null);

export default function Home() {
  // it can contian 1 | 2 | 3 | 4 | 5
  const [currentActivePage, setCurrentActivePage] = useState(1);

  return (
    <>
      <div className="relative">
        <Navbar />
        <main
          className="relative w-full h-[100vh] overflow-hidden"
          id="sectionContainer"
        >
          <ActiveAndChangeActive.Provider
            value={{ currentActivePage, setCurrentActivePage }}
          >
            <SectionContainer>
              <HomeSection />
              <AboutSection />
              <SkillsSection />
              <ProjectSection />
              <SayHelloSection />
            </SectionContainer>
          </ActiveAndChangeActive.Provider>
        </main>
      </div>
    </>
  );
}

export function useActivePage() {
  return useContext(ActiveAndChangeActive);
}
