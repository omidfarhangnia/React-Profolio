import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext, useEffect, useState } from "react";
import { gsap } from "gsap";

const SkillsSection = () => {
  const { currentActivePage } = useContext(ActiveAndChangeActive);
  useEffect(() => {
    if (currentActivePage === 3) {
      const skillsSectionTl = gsap.timeline();
      skillsSectionTl.to(".skillsName", {
        opacity: 1,
        duration: 3,
        stagger: 0.3,
        ease: "power4.out",
      });
      // bg binary animation
      gsap.to(".skill--binaryContainer > span", {
        rotateY: 360,
        duration: 6,
        stagger: 6,
        ease: 'linear',
        repeatDelay: 5,
        repeat: -1,
        delay: 5,
      })
    }
  }, [currentActivePage]);
  return (
    <section
      className={`w-full h-full ${
        currentActivePage !== 3 && "top-[100%]"
      } fixed flex justify-center items-center skillsSection`}
    >
      <div className="skill--binaryContainer w-full h-full bg-black text-[140px] md:text-[300px] lg:text-[400px] flex flex-col justify-center items-center text-customGreen4/50 absolute top-0 left-0 md:flex-row md:justify-around">
        <span>0</span>
        <span>1</span>
        <span>0</span>
      </div>
      <div className="scrollNeededContainer w-[90%] max-w-[1000px] h-[70%] mt-20 md:mt-0 overflow-y-scroll bg-customGreen3/40 z-10 flex items-center justify-around md:items-center flex-wrap p-10 text-white gap-y-5 md:gap-y-2 lg:gap-y-0">
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
        <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
          <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white"></span>
          <span className="text-[25px] md:text-[35px]">test 1</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
