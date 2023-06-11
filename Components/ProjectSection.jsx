import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext, useEffect } from "react";
import { gsap } from "gsap";
import { BsFan } from "react-icons/bs";

const ProjectSection = () => {
  const { currentActivePage } = useContext(ActiveAndChangeActive);

  useEffect(() => {
    if (currentActivePage === 4) {
      const projectSectionTl = gsap.timeline();
      projectSectionTl
        .to(".fanContainer > span", {
          rotate: 360,
          duration: 1,
          ease: "power4.in",
        })
        .to(".fanContainer > span", {
          rotate: 360,
          duration: 10,
          repeat: 10,
          ease: "linear",
          repeat: 15,
        })
    }
  }, [currentActivePage]);

  return (
    <section
      className={`w-full h-full ${
        currentActivePage !== 4 && "top-[100%]"
      } fixed projectSection`}
    >
      <div className="w-full h-full bg-black flex items-center justify-center">
        <div className="w-[90%] min-h-[600px] mt-[10vh] rounded-[30px] border-2 border-solid border-customGreen2/30 flex flex-wrap justify-around items-start gap-y-3 p-10">
          <div className="h-[200px] bg-green-500 w-[250px] md:w-[300px] md:h-[230px] relative">
            <div className="projectBinaryCover select-none w-full h-full text-customGreen2 text-[30px] text-center break-words overflow-hidden absolute top-0 left-0 bg-yellow-600">
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
            </div>
            <div className="fanContainer w-full h-full absolute top-0 left-0 flex justify-center items-center">
              <span>
                <BsFan size={60} />
              </span>
            </div>
          </div>
          <div className="h-[200px] bg-green-500 w-[250px] md:w-[300px] md:h-[230px]"></div>
          <div className="h-[200px] bg-green-500 w-[250px] md:w-[300px] md:h-[230px]"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
