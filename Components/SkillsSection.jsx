import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/pages/firebase";

const SkillsSection = () => {
  const { currentActivePage } = useContext(ActiveAndChangeActive);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function readDataForSkillsPage() {
      const response = await getDoc(doc(db, "pageContents", "skillsPage"));
      const data = response.data();
      setSkills(data.skills);
    }

    return () => {
      readDataForSkillsPage();
    };
  }, []);

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
        ease: "linear",
        repeatDelay: 5,
        repeat: -1,
        delay: 5,
      });
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
        {skills.length === 0
          ? [...Array(10)].map(() => (
              <div className="md:w-auto flex justify-between w-full max-w-[250px] md:min-w-[250px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg font-flowCircular p-2 mx-[10px] opacity-0 skillsName">
                <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] black"></span>
                <span className="text-[25px] md:text-[35px] mr-5">name</span>
              </div>
            ))
          : skills.map((member) => (
              <div className="md:w-auto flex justify-between w-full max-w-[40%] min-w-[200px] items-center gap-3 border-2 border-solid border-white/30 rounded-lg p-2 mx-[10px] opacity-0 skillsName">
                <span className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center">
                  <img
                    src={member.techIcon}
                    className="object-contain"
                  />
                </span>
                <span className="text-[23px] md:text-[28px]">
                  {member.name}
                </span>
              </div>
            ))}
      </div>
    </section>
  );
};

export default SkillsSection;

// i used set data for puting data to firebase
// async function setDataInFire() {
//   await setDoc(doc(db, "pageContents", "skillsPage"), {
//     skills: [
//       {
//         name: "HTML",
//         techIcon: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/skillsLogo%2FhtmlLogo.png?alt=media&token=66ea94ee-760e-4fc0-adfd-f44995da7050",
//       },
//       {
//         name: "CSS",
//         techIcon: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/skillsLogo%2FcssLogo.png?alt=media&token=1b97c6c9-e57f-4ee7-b771-e29c85854c2f",
//       },
//       {
//         name: "JAVASCRIPT",
//         techIcon: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/skillsLogo%2FjavascriptLogo.png?alt=media&token=2a71d693-a556-4565-b1e9-96ad836c4e56",
//       },
//       {
//         name: "BOOTSTRAP",
//         techIcon: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/skillsLogo%2FbootstrapLogo.png?alt=media&token=6d10fa54-094f-4c12-8d5a-4f6f2a300300",
//       },
//       {
//         name: "SASS",
//         techIcon: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/skillsLogo%2FsassLogo.png?alt=media&token=5d031b54-ecf2-4d02-952b-875f6010cc75",
//       },
//       {
//         name: "TAILWIND",
//         techIcon: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/skillsLogo%2FtailwindLogo.png?alt=media&token=242c2ba1-55e9-4dee-9485-54cdef17e22a",
//       },
//       {
//         name: "JQUERY",
//         techIcon: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/skillsLogo%2FjqueryLogo.png?alt=media&token=2eaf2900-96ca-45be-ac81-415c477813d4",
//       },
//       {
//         name: "REACT",
//         techIcon: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/skillsLogo%2FreactLogo.png?alt=media&token=49bcab54-3227-4a70-ab77-f6ab55a7114a",
//       },
//       {
//         name: "TYPESCRIPT",
//         techIcon: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/skillsLogo%2FtypescriptLogo.png?alt=media&token=e72c3b7d-abce-479b-851f-4b262c979b70",
//       },
//       {
//         name: "FIREBASE",
//         techIcon: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/skillsLogo%2FfirebaseLogo.png?alt=media&token=28ee344d-635b-4251-aa05-a5a03e0ad5b6",
//       },
//       {
//         name: "GSAP",
//         techIcon: "https://firebasestorage.googleapis.com/v0/b/react-portfolio-bb4a2.appspot.com/o/skillsLogo%2FgsapLogo.png?alt=media&token=c6570322-05b1-4298-a182-90a152c3918d",
//       },
//     ],
//   });
// }
