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
          rotate: 3600,
          duration: 3,
          ease: "power4.inOut",
          delay: 1,
        })
        .to(
          ".projectBinaryCover",
          {
            scale: 0,
            duration: 1,
            ease: "expo.out",
          },
          "-=1"
        )
        .to(
          ".projectBinaryCover",
          {
            opacity: 0,
            duration: 0.8,
            ease: "expo.in",
          },
          "-=.5"
        )
        .to(".projectAnimationContainer", {
          opacity: 0,
          duration: 0.5,
          ease: "power4.out",
          delay: .3,
        })
        .set(".projectBinaryCover, .projectAnimationContainer", {
          display: "none"
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
        <div className="w-[90%] h-[70%] mt-[10vh] border-2 border-solid border-customGreen2 flex flex-wrap justify-around items-center gap-7 p-10 overflow-y-scroll scrollNeededContainer">
          <div className="h-[200px] w-[250px] md:w-[300px] md:h-[230px] relative">
            <div className="w-full h-full bg-gray-200 absolute top-0 left-0">
              {/* project image */}
              <img className="w-full h-[60%] bg-gray-500 border-none outline-none" />
              {/* project name */}
              <h3 className="text-center text-[20px] md:text-[25px] lg:text-[30px] capitalize mt-5 font-semibold">
                project name
              </h3>
            </div>
            <div className="w-full h-full absolute bg-black projectAnimationContainer">
              <div className="projectBinaryCover select-none w-full h-full text-[30px] bg-black text-customGreen4/70 text-center break-words overflow-hidden absolute top-0 left-0">
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
                  <BsFan size={60} style={{fill: "#ffffff"}}/>
                </span>
              </div>
            </div>
          </div>
          <div className="h-[200px] w-[250px] md:w-[300px] md:h-[230px] relative">
            <div className="w-full h-full bg-gray-200 absolute top-0 left-0">
              {/* project image */}
              <img className="w-full h-[60%] bg-gray-500 border-none outline-none" />
              {/* project name */}
              <h3 className="text-center text-[20px] md:text-[25px] lg:text-[30px] capitalize mt-5 font-semibold">
                project name
              </h3>
            </div>
            <div className="w-full h-full absolute bg-black projectAnimationContainer">
              <div className="projectBinaryCover select-none w-full h-full text-[30px] bg-black text-customGreen4/70 text-center break-words overflow-hidden absolute top-0 left-0">
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
                  <BsFan size={60} style={{fill: "#ffffff"}}/>
                </span>
              </div>
            </div>
          </div>
          <div className="h-[200px] w-[250px] md:w-[300px] md:h-[230px] relative">
            <div className="w-full h-full bg-gray-200 absolute top-0 left-0">
              {/* project image */}
              <img className="w-full h-[60%] bg-gray-500 border-none outline-none" />
              {/* project name */}
              <h3 className="text-center text-[20px] md:text-[25px] lg:text-[30px] capitalize mt-5 font-semibold">
                project name
              </h3>
            </div>
            <div className="w-full h-full absolute bg-black projectAnimationContainer">
              <div className="projectBinaryCover select-none w-full h-full text-[30px] bg-black text-customGreen4/70 text-center break-words overflow-hidden absolute top-0 left-0">
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
                  <BsFan size={60} style={{fill: "#ffffff"}}/>
                </span>
              </div>
            </div>
          </div>
          <div className="h-[200px] w-[250px] md:w-[300px] md:h-[230px] relative">
            <div className="w-full h-full bg-gray-200 absolute top-0 left-0">
              {/* project image */}
              <img className="w-full h-[60%] bg-gray-500 border-none outline-none" />
              {/* project name */}
              <h3 className="text-center text-[20px] md:text-[25px] lg:text-[30px] capitalize mt-5 font-semibold">
                project name
              </h3>
            </div>
            <div className="w-full h-full absolute bg-black projectAnimationContainer">
              <div className="projectBinaryCover select-none w-full h-full text-[30px] bg-black text-customGreen4/70 text-center break-words overflow-hidden absolute top-0 left-0">
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
                  <BsFan size={60} style={{fill: "#ffffff"}}/>
                </span>
              </div>
            </div>
          </div>
          <div className="h-[200px] w-[250px] md:w-[300px] md:h-[230px] relative">
            <div className="w-full h-full bg-gray-200 absolute top-0 left-0">
              {/* project image */}
              <img className="w-full h-[60%] bg-gray-500 border-none outline-none" />
              {/* project name */}
              <h3 className="text-center text-[20px] md:text-[25px] lg:text-[30px] capitalize mt-5 font-semibold">
                project name
              </h3>
            </div>
            <div className="w-full h-full absolute bg-black projectAnimationContainer">
              <div className="projectBinaryCover select-none w-full h-full text-[30px] bg-black text-customGreen4/70 text-center break-words overflow-hidden absolute top-0 left-0">
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
                  <BsFan size={60} style={{fill: "#ffffff"}}/>
                </span>
              </div>
            </div>
          </div>
          <div className="h-[200px] w-[250px] md:w-[300px] md:h-[230px] relative">
            <div className="w-full h-full bg-gray-200 absolute top-0 left-0">
              {/* project image */}
              <img className="w-full h-[60%] bg-gray-500 border-none outline-none" />
              {/* project name */}
              <h3 className="text-center text-[20px] md:text-[25px] lg:text-[30px] capitalize mt-5 font-semibold">
                project name
              </h3>
            </div>
            <div className="w-full h-full absolute bg-black projectAnimationContainer">
              <div className="projectBinaryCover select-none w-full h-full text-[30px] bg-black text-customGreen4/70 text-center break-words overflow-hidden absolute top-0 left-0">
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
                  <BsFan size={60} style={{fill: "#ffffff"}}/>
                </span>
              </div>
            </div>
          </div>
          <div className="h-[200px] w-[250px] md:w-[300px] md:h-[230px] relative">
            <div className="w-full h-full bg-gray-200 absolute top-0 left-0">
              {/* project image */}
              <img className="w-full h-[60%] bg-gray-500 border-none outline-none" />
              {/* project name */}
              <h3 className="text-center text-[20px] md:text-[25px] lg:text-[30px] capitalize mt-5 font-semibold">
                project name
              </h3>
            </div>
            <div className="w-full h-full absolute bg-black projectAnimationContainer">
              <div className="projectBinaryCover select-none w-full h-full text-[30px] bg-black text-customGreen4/70 text-center break-words overflow-hidden absolute top-0 left-0">
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
                  <BsFan size={60} style={{fill: "#ffffff"}}/>
                </span>
              </div>
            </div>
          </div>
          <div className="h-[200px] w-[250px] md:w-[300px] md:h-[230px] relative">
            <div className="w-full h-full bg-gray-200 absolute top-0 left-0">
              {/* project image */}
              <img className="w-full h-[60%] bg-gray-500 border-none outline-none" />
              {/* project name */}
              <h3 className="text-center text-[20px] md:text-[25px] lg:text-[30px] capitalize mt-5 font-semibold">
                project name
              </h3>
            </div>
            <div className="w-full h-full absolute bg-black projectAnimationContainer">
              <div className="projectBinaryCover select-none w-full h-full text-[30px] bg-black text-customGreen4/70 text-center break-words overflow-hidden absolute top-0 left-0">
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
                  <BsFan size={60} style={{fill: "#ffffff"}}/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
