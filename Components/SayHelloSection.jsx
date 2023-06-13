import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext, useEffect } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsMeta } from "react-icons/bs";
import { gsap } from "gsap";

const SayHelloSection = () => {
  const { currentActivePage } = useContext(ActiveAndChangeActive);

  useEffect(() => {
    if (currentActivePage === 5) {
      const sayHelloTl = gsap.timeline();
      sayHelloTl
        .to(".overloads > span", {
          opacity: 1,
          duration: 2,
          stagger: 0.02,
          ease: "power2.out",
        })
        .to(
          ".sayHelloHeader",
          {
            opacity: 1,
            duration: 0.5,
            ease: "linear",
          },
          "-=.5"
        )
        .to(".sayHelloForm", {
          opacity: 1,
          duration: 0.5,
          ease: "linear",
        })
        .to(
          ".sayHelloFooter",
          {
            scaleY: 1,
            duration: 0.5,
          },
          "-=.5"
        )
        .to(".sayHelloFooter > *", {
          opacity: 1,
          duration: 0.5,
        });
    }
  }, [currentActivePage]);

  return (
    <section
      className={`w-full h-full bg-black ${
        currentActivePage !== 5 && "top-[100%]"
      } fixed sayHelloSection`}
    >
      <div className="overloads break-words text-customGreen3/80 text-[100px] md:text-[140px] lg:text-[180px] w-full h-full text-center absolute top-[10%] md:top-[8%] left-0 select-none [&>span]:opacity-0">
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
        <span>0</span>
        <span>0</span>
        <span>1</span>
        <span>1</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
        <span>0</span>
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
        <span>0</span>
        <span>0</span>
        <span>1</span>
        <span>1</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
        <span>0</span>
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
        <span>1</span>
        <span>0</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
      </div>
      <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-end gap-5">
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <h2 className="sayHelloHeader text-white text-[26px] md:text-[33px] lg:text-[40px] mb-5 capitalize font-semibold opacity-0">
            say hello to me
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="sayHelloForm opacity-0 bg-customGreen3/50 w-[90%] max-w-[900px] flex flex-col gap-4 p-5"
          >
            {/* this is for name */}
            <div className="w-full flex flex-wrap justify-between items-center">
              <label
                className="capitalize w-[50%] text-[14px] md:text-[18px] lg:text-[23px] text-white mb-2 md:mb-0 ml-3 md:ml-0"
                htmlFor="firstNameInput"
              >
                your name :{" "}
              </label>
              <input
                className="w-full md:w-[50%] md:max-w-[300px] text-[14px] md:text-[18px] lg:text-[20px] min-w-[200px] px-6 py-2 rounded-full bg-transparent border-[1px] border-solid border-white text-white focus:outline-none"
                type="text"
                placeholder="first name"
                id="firstNameInput"
              />
            </div>
            {/* this is for last name */}
            <div className="w-full flex flex-wrap justify-between items-center">
              <label
                className="capitalize w-[50%] text-[14px] md:text-[18px] lg:text-[23px] text-white mb-2 md:mb-0 ml-3 md:ml-0"
                htmlFor="lastNameInput"
              >
                your last name :{" "}
              </label>
              <input
                className="w-full md:w-[50%] md:max-w-[300px] text-[14px] md:text-[18px] lg:text-[20px] min-w-[200px] px-6 py-2 rounded-full bg-transparent border-[1px] border-solid border-white text-white focus:outline-none"
                type="text"
                placeholder="last name"
                id="lastNameInput"
              />
            </div>
            {/* this is for email */}
            <div className="w-full flex flex-wrap justify-between items-center">
              <label
                className="capitalize w-[50%] text-[14px] md:text-[18px] lg:text-[23px] text-white mb-2 md:mb-0 ml-3 md:ml-0"
                htmlFor="emailInput"
              >
                email :{" "}
              </label>
              <input
                className="w-full md:w-[50%] md:max-w-[300px] text-[14px] md:text-[18px] lg:text-[20px] min-w-[200px] px-6 py-2 rounded-full bg-transparent border-[1px] border-solid border-white text-white focus:outline-none"
                type="email"
                placeholder="email"
                id="emailInput"
              />
            </div>
            {/* this is for message */}
            <div className="w-full flex flex-wrap justify-between items-start">
              <label
                className="capitalize w-[50%] text-[14px] md:text-[18px] lg:text-[23px] text-white mb-2 md:mb-0 ml-3 md:ml-0"
                htmlFor="messageInput"
              >
                message :{" "}
              </label>
              <textarea
                className="w-full md:w-[50%] md:max-w-[300px] text-[14px] md:text-[18px] lg:text-[20px] md:h-[230px] md:rounded-lg px-6 py-2 rounded-full bg-transparent border-[1px] border-solid border-white text-white focus:outline-none resize-none"
                placeholder="your message"
                id="messageInput"
              ></textarea>
            </div>
            <button className="bg-white text-customGreen3/90 p-3 text-[14px] md:text-[20px] lg:text-[25px] rounded-full uppercase mt-6 font-bold">
              send
            </button>
          </form>
        </div>
        <footer className="w-full h-[15%] md:h-[10%] bg-customBlack  scale-y-0 sayHelloFooter [&>*]:opacity-0">
          <div className="w-full h-full flex flex-row items-center justify-between p-5 max-w-[1100px] mx-auto">
            <h1 className="text-[20px] md:text-[25px] capitalize italic bold text-white">
              omid farhangnia
            </h1>
            <nav>
              <ul className="flex items-center gap-4 md:gap-6">
                <li>
                  <a href="#">
                    <FaGithubSquare size={23} style={{ fill: "#ffffff" }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram size={23} style={{ fill: "#ffffff" }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsLinkedin size={23} style={{ fill: "#ffffff" }} />
                  </a>
                </li>
                <li>
                  <a>
                    <BsMeta size={23} style={{ fill: "#ffffff" }} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default SayHelloSection;
