import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext, useEffect } from "react";

const Navbar = () => {
  const { currentActivePage, setCurrentActivePage } = useContext(
    ActiveAndChangeActive
  );
  function handleClick(e) {
    const navLinks = document.querySelectorAll(".navLinks");
    navLinks.forEach((e) => {
      e.removeEventListener("click", handleClick);
    });
    const selectedNumber = e.target.getAttribute("linkId");
    // everything is ok
    setTimeout(() => {
      setCurrentActivePage(Number(selectedNumber));
    }, 500);
  }

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navLinks");
    navLinks.forEach((e) => {
      e.addEventListener("click", handleClick);
    });
  }, [currentActivePage]);

  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <nav className="flex flex-col items-center md:flex-row md:px-8 lg:px-16 md:justify-between p-5 gap-4 text-white bg-customGreen4">
        <div className="capitalize md:text-2xl lg:text-3xl font-DancingScript">
          <a href="#">omid farhangnia</a>
        </div>
        <ul className="flex justify-between w-full md:max-w-[50%]">
          <li className="relative overflow-hidden group capitalize text-[18px] lg:text-[20px] cursor-pointer">
            <span
              className={`absolute top-0 left-0 group-hover:top-[100%] transition-75 ${
                currentActivePage === 1 && "underline"
              }`}
            >
              Home
            </span>
            <span
              linkId={1}
              className={`absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75 ${
                currentActivePage === 1 && "underline"
              } navLinks`}
            >
              Home
            </span>
            <span className="invisible">Home</span>
          </li>

          <li className="relative overflow-hidden group capitalize text-[18px] lg:text-[20px] cursor-pointer">
            <span
              className={`absolute top-0 left-0 group-hover:top-[100%] transition-75 ${
                currentActivePage === 2 && "underline"
              }`}
            >
              About
            </span>
            <span
              linkId={2}
              className={`absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75 ${
                currentActivePage === 2 && "underline"
              } navLinks`}
            >
              About
            </span>
            <span className="invisible">About</span>
          </li>

          <li className="relative overflow-hidden group capitalize text-[18px] lg:text-[20px] cursor-pointer">
            <span
              className={`absolute top-0 left-0 group-hover:top-[100%] transition-75 ${
                currentActivePage === 3 && "underline"
              }`}
            >
              Skills
            </span>
            <span
              linkId={3}
              className={`absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75 ${
                currentActivePage === 3 && "underline"
              } navLinks`}
            >
              Skills
            </span>
            <span className="invisible">Skills</span>
          </li>

          <li className="relative overflow-hidden group capitalize text-[18px] lg:text-[20px] cursor-pointer">
            <span
              className={`absolute top-0 left-0 group-hover:top-[100%] transition-75 ${
                currentActivePage === 4 && "underline"
              }`}
            >
              Project
            </span>
            <span
              linkId={4}
              className={`absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75 ${
                currentActivePage === 4 && "underline"
              } navLinks`}
            >
              Project
            </span>
            <span className="invisible">Project</span>
          </li>

          <li className="relative overflow-hidden group capitalize text-[18px] lg:text-[20px] cursor-pointer">
            <span
              className={`absolute top-0 left-0 group-hover:top-[100%] transition-75 ${
                currentActivePage === 5 && "underline"
              }`}
            >
              Say hello
            </span>
            <span
              linkId={5}
              className={`absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75 ${
                currentActivePage === 5 && "underline"
              } navLinks`}
            >
              Say hello
            </span>
            <span className="invisible">Say hello</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
