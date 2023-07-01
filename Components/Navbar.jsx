import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext, useEffect } from "react";
import { playAnimation } from "./SectionContainer";

const Navbar = () => {
  const { currentActivePage, setCurrentActivePage } = useContext(
    ActiveAndChangeActive
  );

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navLinks");
    navLinks.forEach((e) => {
      e.addEventListener("click", handleClick);
    });
  }, [currentActivePage]);

  function handleClick(e) {
    const navLinks = document.querySelectorAll(".navLinks");
    navLinks.forEach((e) => {
      e.removeEventListener("click", handleClick);
    });
    const selectedNumber = e.target.getAttribute("linkid");
    // play animation
    playAnimation(() => {
      setCurrentActivePage(Number(selectedNumber));
    });
  }

  function handleClickOpenMenu() {
    // play animation
    playAnimation(() => {
      const burgerMenu = document.getElementById("burgerMenuPage");
      burgerMenu.classList.add("flex");
      burgerMenu.classList.remove("hidden");
    });
  }

  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <nav className="flex flex-row items-center md:px-8 lg:px-16 justify-between p-5 gap-4 text-white bg-customGreen4">
        <div className="capitalize text-2xl md:text-3xl lg:text-4xl font-extralight">
          <a href="#" className="font-lobster">
            omid farhangnia
          </a>
        </div>
        <ul className="hidden md:flex justify-between w-full md:max-w-[50%] font-comfortaa">
          <li className="relative overflow-hidden group capitalize text-[13px] md:text-[17px] lg:text-[20px] cursor-pointer">
            <span
              className={`absolute top-0 left-0 group-hover:top-[100%] transition-75 ${
                currentActivePage === 1 && "underline"
              }`}
            >
              Home
            </span>
            <span
              linkid={1}
              className={`absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75 ${
                currentActivePage === 1 && "underline"
              } navLinks`}
            >
              Home
            </span>
            <span className="invisible">Home</span>
          </li>

          <li className="relative overflow-hidden group capitalize text-[13px] md:text-[17px] lg:text-[20px] cursor-pointer">
            <span
              className={`absolute top-0 left-0 group-hover:top-[100%] transition-75 ${
                currentActivePage === 2 && "underline"
              }`}
            >
              About
            </span>
            <span
              linkid={2}
              className={`absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75 ${
                currentActivePage === 2 && "underline"
              } navLinks`}
            >
              About
            </span>
            <span className="invisible">About</span>
          </li>

          <li className="relative overflow-hidden group capitalize text-[13px] md:text-[17px] lg:text-[20px] cursor-pointer">
            <span
              className={`absolute top-0 left-0 group-hover:top-[100%] transition-75 ${
                currentActivePage === 3 && "underline"
              }`}
            >
              Skills
            </span>
            <span
              linkid={3}
              className={`absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75 ${
                currentActivePage === 3 && "underline"
              } navLinks`}
            >
              Skills
            </span>
            <span className="invisible">Skills</span>
          </li>

          <li className="relative overflow-hidden group capitalize text-[13px] md:text-[17px] lg:text-[20px] cursor-pointer">
            <span
              className={`absolute top-0 left-0 group-hover:top-[100%] transition-75 ${
                currentActivePage === 4 && "underline"
              }`}
            >
              Project
            </span>
            <span
              linkid={4}
              className={`absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75 ${
                currentActivePage === 4 && "underline"
              } navLinks`}
            >
              Project
            </span>
            <span className="invisible">Project</span>
          </li>

          <li className="relative overflow-hidden group capitalize text-[13px] md:text-[17px] lg:text-[20px] cursor-pointer">
            <span
              className={`absolute top-0 left-0 group-hover:top-[100%] transition-75 ${
                currentActivePage === 5 && "underline"
              }`}
            >
              Say hello
            </span>
            <span
              linkid={5}
              className={`absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75 ${
                currentActivePage === 5 && "underline"
              } navLinks`}
            >
              Say hello
            </span>
            <span className="invisible">Say hello</span>
          </li>
        </ul>
        <div
          className="flex md:hidden flex-col bg-white w-[50px] h-[50px] justify-center items-center gap-[7px] rounded-lg"
          id="burgerMenuButton"
          onClick={handleClickOpenMenu}
        >
          <div className="w-[80%] h-[10%] bg-customGreen4 rounded-lg"></div>
          <div className="w-[80%] h-[10%] bg-customGreen4 rounded-lg"></div>
          <div className="w-[80%] h-[10%] bg-customGreen4 rounded-lg"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
