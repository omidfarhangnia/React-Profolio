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
      <div
        className="select-none font-NotoSansJapanses text-customGreen4/70 w-full overflow-hidden tracking-[6px] mt-[-11px] text-[17px] translate-x-[-6px] navBinaryAnime"
        style={{ animationDelay: ".2s" }}
      >
        01111000100101000010001111111100001101111010110011001110100011001011010011001000110100001000011100100111100010010100001000111111110000110111101011001100111010001100101101001100100011010000100001110010
      </div>
      <div
        className="select-none font-NotoSansJapanses text-customGreen1/30 w-full overflow-hidden tracking-[4px] mt-[-15px] translate-x-[-3px] opacity-80 navBinaryAnime"
        style={{ animationDelay: ".5s" }}
      >
        01000100001101111011001011110110001000010001000101011001000011011110111000101000110000010000000111010100010000110111101100101111011000100001000100010101100100001101111011100010100011000001000000011101
      </div>
      <div
        className="select-none font-NotoSansJapanses text-customGreen4/70 w-full overflow-hidden tracking-[10px] mt-[-30px] translate-x-[-4px] opacity-70 text-[18px] navBinaryAnime"
        style={{ animationDelay: ".8s" }}
      >
        00100001001010001101000010110001011001110000010111100011111010100001111100001010110000100000111010110010000100101000110100001011000101100111000001011110001111101010000111110000101011000010000011101011
      </div>
      <div
        className="select-none font-NotoSansJapanses text-customGreen2/60 w-full overflow-hidden tracking-[3px] mt-[-15px] translate-x-[-10px] opacity-60 navBinaryAnime"
        style={{ animationDelay: ".3s" }}
      >
        01001001000011110101001110001111100100010011101010110101110100000101110011111100100011010000100001000100100100001111010100111000111110010001001110101011010111010000010111001111110010001101000010000100
      </div>
      <div
        className="select-none font-NotoSansJapanses text-customGreen1/40 w-full overflow-hidden tracking-[13px] mt-[-30px] translate-x-[-6px] opacity-80 text-[18px] navBinaryAnime"
        style={{ animationDelay: "0" }}
      >
        01100011111101000110000101110010000100000001111011001110000101101100110011001011010101101001101011100110001111110100011000010111001000010000000111101100111000010110110011001100101101010110100110101110
      </div>
    </header>
  );
};

export default Navbar;
