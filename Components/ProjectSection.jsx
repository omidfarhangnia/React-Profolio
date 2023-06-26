import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import { BsFan } from "react-icons/bs";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, storage } from "@/pages/firebase";
import { getDownloadURL, ref } from "firebase/storage";

const ProjectSection = () => {
  const { currentActivePage } = useContext(ActiveAndChangeActive);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function readDataForProjectPage() {
      const response = await getDoc(doc(db, "pageContents", "projectsPage"));
      const data = response.data();
      console.log(data);
      setProjects(data.projects);
    }

    return () => {
      readDataForProjectPage()
    }
  }, []);

  useEffect(() => {
    if (currentActivePage === 4) {
      if (projects.length === 0) return;

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
          delay: 0.3,
        })
        .set(".projectBinaryCover, .projectAnimationContainer", {
          display: "none",
        });
    }
  }, [currentActivePage, projects]);

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
                  <BsFan size={60} style={{ fill: "#ffffff" }} />
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
                  <BsFan size={60} style={{ fill: "#ffffff" }} />
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
                  <BsFan size={60} style={{ fill: "#ffffff" }} />
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
                  <BsFan size={60} style={{ fill: "#ffffff" }} />
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
                  <BsFan size={60} style={{ fill: "#ffffff" }} />
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
                  <BsFan size={60} style={{ fill: "#ffffff" }} />
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
                  <BsFan size={60} style={{ fill: "#ffffff" }} />
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
                  <BsFan size={60} style={{ fill: "#ffffff" }} />
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

// i used set data for puting data to firebase
// async function setDataInFire() {
//   await setDoc(doc(db, "pageContents", "projectsPage"), {
//     projects: [
//       {
//         name: "cryptobase",
//         projectImageId: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/projectsPoster%2FcryptobaseProject.png?alt=media&token=f34ea697-31a5-4ecd-8a2b-d400b124eeb6",
//       },
//       {
//         name: "react online shop",
//         projectImageId: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/projectsPoster%2FreactOnlineShopProject.png?alt=media&token=12bee4dd-7ab9-4a37-a173-8efe55f42e29",
//       },
//       {
//         name: "netflix clone",
//         projectImageId: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/projectsPoster%2FnetflixCloneProject.png?alt=media&token=2abe8487-30f6-451c-b28a-a4688750d617",
//       },
//       {
//         name: "go surf landing page",
//         projectImageId: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/projectsPoster%2FgoSurfProject.png?alt=media&token=06bf3029-7e3d-4cd5-a8ee-a79ac7385f17",
//       },
//       {
//         name: "futura landing page",
//         projectImageId: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/projectsPoster%2FfuturaProject.png?alt=media&token=ca7435ce-d5f0-4e9f-a43f-dbf58708a4da",
//       },
//       {
//         name: "BIOCWT online shop",
//         projectImageId: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/projectsPoster%2FbiocwtProject.png?alt=media&token=4447d082-4782-428a-9163-1291e38ced99",
//       },
//     ],
//   })
//   .then(() => {
//     console.log("data uploaded")
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }
// setDataInFire()
