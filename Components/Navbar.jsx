import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <nav className="flex flex-col items-center md:flex-row md:px-8 lg:px-16 md:justify-between p-5 gap-4 text-white bg-gradient-to-b from-customGreen3 to-[#3f8d2e]">
        <div className="capitalize md:text-2xl lg:text-3xl font-DancingScript">
          <a href="#">omid farhangnia</a>
        </div>
        <ul className="flex justify-between w-full md:max-w-[50%]">
          <a href="#" className="capitalize text-[18px] lg:text-[19px]">
            <li className="relative overflow-hidden group">
              <span className="absolute top-0 left-0 group-hover:top-[100%] transition-75">
                Home
              </span>
              <span className="absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75">
                Home
              </span>
              <span className="invisible">Home</span>
            </li>
          </a>
          <a href="#" className="capitalize text-[18px] lg:text-[19px]">
            <li className="relative overflow-hidden group">
              <span className="absolute top-0 left-0 group-hover:top-[100%] transition-75">
                About
              </span>
              <span className="absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75">
                About
              </span>
              <span className="invisible">About</span>
            </li>
          </a>
          <a href="#" className="capitalize text-[18px] lg:text-[19px]">
            <li className="relative overflow-hidden group">
              <span className="absolute top-0 left-0 group-hover:top-[100%] transition-75">
                Skills
              </span>
              <span className="absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75">
                Skills
              </span>
              <span className="invisible">Skills</span>
            </li>
          </a>
          <a href="#" className="capitalize text-[18px] lg:text-[19px]">
            <li className="relative overflow-hidden group">
              <span className="absolute top-0 left-0 group-hover:top-[100%] transition-75">
                Project
              </span>
              <span className="absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75">
                Project
              </span>
              <span className="invisible">Project</span>
            </li>
          </a>
          <a href="#" className="capitalize text-[18px] lg:text-[19px]">
            <li className="relative overflow-hidden group">
              <span className="absolute top-0 left-0 group-hover:top-[100%] transition-75">
                Say hello
              </span>
              <span className="absolute bottom-[100%] left-0 group-hover:bottom-0 transition-75">
                Say hello
              </span>
              <span className="invisible">Say hello</span>
            </li>
          </a>
        </ul>
      </nav>
      <div className="font-NotoSansJapanses text-[#3f8d2e] w-full overflow-hidden tracking-[6px] mt-[-11px] text-[17px] translate-x-[-6px] navBinaryAnime" style={{animationDelay: ".2s"}}>
        01111000100101000010001111111100001101111010110011001110100011001011010011001000110100001000011100100111100010010100001000111111110000110111101011001100111010001100101101001100100011010000100001110010
      </div>
      <div className="font-NotoSansJapanses text-customGreen2 w-full overflow-hidden tracking-[4px] mt-[-15px] translate-x-[-3px] opacity-80 navBinaryAnime" style={{animationDelay: ".5s"}}>
        01000100001101111011001011110110001000010001000101011001000011011110111000101000110000010000000111010100010000110111101100101111011000100001000100010101100100001101111011100010100011000001000000011101
      </div>
      <div className="font-NotoSansJapanses text-customGreen1 w-full overflow-hidden tracking-[10px] mt-[-30px] translate-x-[-4px] opacity-70 text-[18px] navBinaryAnime" style={{animationDelay: ".8s"}}>
        00100001001010001101000010110001011001110000010111100011111010100001111100001010110000100000111010110010000100101000110100001011000101100111000001011110001111101010000111110000101011000010000011101011
      </div>
      <div className="font-NotoSansJapanses text-customGreen2 w-full overflow-hidden tracking-[3px] mt-[-15px] translate-x-[-10px] opacity-60 navBinaryAnime" style={{animationDelay: ".3s"}}>
        01001001000011110101001110001111100100010011101010110101110100000101110011111100100011010000100001000100100100001111010100111000111110010001001110101011010111010000010111001111110010001101000010000100
      </div>
      <div className="font-NotoSansJapanses text-customGreen3 w-full overflow-hidden tracking-[13px] mt-[-30px] translate-x-[-6px] opacity-80 text-[18px] navBinaryAnime" style={{animationDelay: "0"}}>
        01100011111101000110000101110010000100000001111011001110000101101100110011001011010101101001101011100110001111110100011000010111001000010000000111101100111000010110110011001100101101010110100110101110
      </div>
    </header>
  );
};

export default Navbar;