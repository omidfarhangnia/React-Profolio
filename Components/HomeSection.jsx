import React, { useContext, useEffect, useLayoutEffect } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsMeta } from "react-icons/bs";
import { gsap } from "gsap";
import { ActiveAndChangeActive } from "@/context/context";
// some random import
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/pages/firebase";

const HomeSection = () => {
  const { currentActivePage } = useContext(ActiveAndChangeActive);

  useLayoutEffect(() => {
    let jobTitleTl = gsap.timeline();
    jobTitleTl
      .to(".pageName", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(".jobTitle", {
        width: "auto",
        duration: 1,
      })
      .to(".jobTitle", {
        opacity: 1,
        delay: 0.3,
        ease: "linear",
        duration: 0.5,
      })
      .to(".linkIcons", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".binaryChain",
      { x: 0 },
      {
        xPercent: -70,
        duration: 700,
        yoyo: true,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

  return (
    <section
      className={`bg-customBlack w-full h-full fixed ${
        currentActivePage !== 1 && "top-[100%]"
      } homeSection`}
    >
      <div className="w-full h-full flex items-center select-none text-[120vh] italic absolute left-[-25vw] rotate-[10deg] text-customGreen2 opacity-40">
        <div className="binaryChain">01010101010101010101010101010101</div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full text-white flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[40px] lg:text-[80px] capitalize italic bold pageName opacity-0 translate-y-[-50px]">
            omid farhangnia
          </h1>
          <div className="text-[25px] lg:text-[35px] flex items-center text-white/80">
            <span>{"<"}</span>
            <span className="w-0 opacity-0 overflow-hidden capitalize jobTitle whitespace-nowrap">
              {" "}
              frontend developer{" "}
            </span>
            <span>{"/>"}</span>
          </div>
          <div className="w-[90%] max-w-[300px] flex justify-center mt-3">
            <nav>
              <ul className="flex items-center gap-4">
                <li className="opacity-0 translate-y-[40px] linkIcons">
                  <a href="#">
                    <FaGithubSquare size={30} />
                  </a>
                </li>
                <li className="opacity-0 translate-y-[40px] linkIcons">
                  <a href="#">
                    <AiFillInstagram size={30} />
                  </a>
                </li>
                <li className="opacity-0 translate-y-[40px] linkIcons">
                  <a href="#">
                    <BsLinkedin size={30} />
                  </a>
                </li>
                <li className="opacity-0 translate-y-[40px] linkIcons">
                  <a>
                    <BsMeta size={30} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;