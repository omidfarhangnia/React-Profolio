import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { playAnimation } from "./SectionContainer";

export default function BurgerMenu() {
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

onClick={handleClickCloseMenu}    // everything is ok
    setTimeout(() => {
      setCurrentActivePage(Number(selectedNumber));
    }, 500);
  }

  function handleClickCloseMenu() {
    // play animation
    playAnimation(() => {
      const burgerMenu = document.getElementById("burgerMenuPage");
      burgerMenu.classList.add("hidden");
      burgerMenu.classList.remove("flex");
    });
  }

  return (
    <>
      <div
        className="hidden w-full h-full items-center justify-center bg-customBlack fixed z-20"
        id="burgerMenuPage"
      >
        <div
          className="absolute top-0 left-0 w-full bg-customGreen1/20 rounded-br-[30px] rounded-bl-[30px] flex justify-center items-center p-5"
          onClick={handleClickCloseMenu}
        >
          <ImCross size={30} fill="#1DE429" />
        </div>
        <ul className="flex flex-col py-[20vh] justify-around items-center w-full h-full md:max-w-[50%] font-comfortaa">
          <li className="relative overflow-hidde capitalize text-[30px] text-customGreen1 cursor-pointer">
            <span
              linkid={1}
              onClick={handleClickCloseMenu}
              className={`${currentActivePage === 1 && "underline"} navLinks`}
            >
              Home
            </span>
          </li>
          <li className="relative overflow-hidde capitalize text-[30px] text-customGreen1 cursor-pointer">
            <span
              linkid={2}
              onClick={handleClickCloseMenu}
              className={`${currentActivePage === 2 && "underline"} navLinks`}
            >
              About
            </span>
          </li>
          <li className="relative overflow-hidde capitalize text-[30px] text-customGreen1 cursor-pointer">
            <span
              linkid={3}
              onClick={handleClickCloseMenu}
              className={`${currentActivePage === 3 && "underline"} navLinks`}
            >
              Skills
            </span>
          </li>
          <li className="relative overflow-hidde capitalize text-[30px] text-customGreen1 cursor-pointer">
            <span
              linkid={4}
              onClick={handleClickCloseMenu}
              className={`${currentActivePage === 4 && "underline"} navLinks`}
            >
              Project
            </span>
          </li>
          <li className="relative overflow-hidde capitalize text-[30px] text-customGreen1 cursor-pointer">
            <span
              linkid={5}
              onClick={handleClickCloseMenu}
              className={`${currentActivePage === 5 && "underline"} navLinks`}
            >
              Say hello
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
