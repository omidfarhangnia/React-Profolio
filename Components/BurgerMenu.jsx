import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext, useEffect } from "react";

export default function BurgerMenu() {
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
    <>
      <div className="w-full h-full py-[20vh] bg-customBlack fixed top-0 left-0 z-20">
        <ul className="flex flex-col justify-around items-center w-full h-full md:max-w-[50%] font-comfortaa">
          <li className="relative overflow-hidde capitalize text-[30px] text-customGreen1 cursor-pointer">
            <span
              linkId={1}
              className={`${
                currentActivePage === 1 && "underline"
              } navLinks`}
            >
              Home
            </span>
          </li>
          <li className="relative overflow-hidde capitalize text-[30px] text-customGreen1 cursor-pointer">
            <span
              linkId={2}
              className={`${
                currentActivePage === 2 && "underline"
              } navLinks`}
            >
              About
            </span>
          </li>
          <li className="relative overflow-hidde capitalize text-[30px] text-customGreen1 cursor-pointer">
            <span
              linkId={3}
              className={`${
                currentActivePage === 3 && "underline"
              } navLinks`}
            >
              Skills
            </span>
          </li>
          <li className="relative overflow-hidde capitalize text-[30px] text-customGreen1 cursor-pointer">
            <span
              linkId={4}
              className={`${
                currentActivePage === 4 && "underline"
              } navLinks`}
            >
              Project
            </span>
          </li>
          <li className="relative overflow-hidde capitalize text-[30px] text-customGreen1 cursor-pointer">
            <span
              linkId={5}
              className={`${
                currentActivePage === 5 && "underline"
              } navLinks`}
            >
              Say hello
            </span>
          </li>
        </ul>
        <div className="absolute top-0 left-0 text-[140px] h-[110px] flex justify-center items-center font-roboto text-customGreen1/30 burgerBinary">0</div>
      </div>
    </>
  );
}
