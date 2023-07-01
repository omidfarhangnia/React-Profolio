import React from "react";


function AnimeContainer() {
    return (
        <div className="hidden lg:flex pageAnimeContainer w-[100vw] h-[100vh] fixed top-[200%] left-0 z-10 justify-center items-center select-none">
            <span className="leftZeroPiece text-[180vh] font-frankRuhlLibre w-[21%] overflow-hidden relative opacity-0 text-white">
                <span className="absolute left-0">0</span>
                <span className="invisible">0</span>
            </span>
            <div className="w-full h-full greenBarContainer absolute">
                <div className="w-full h-[25%] bg-customGreen1 absolute left-[100%] top-[0%]"></div>
                <div className="w-full h-[50%] bg-customGreen2 absolute left-[100%] top-[25%]"></div>
                <div className="w-full h-[25%] bg-customGreen3 absolute left-[100%] top-[75%]"></div>
            </div>
            <span className="rightZeroPiece text-[180vh] font-frankRuhlLibre w-[21%] overflow-hidden relative opacity-0 text-white">
                <span className="absolute right-0">0</span>
                <span className="invisible">0</span>
            </span>
        </div>
    )
}

export default AnimeContainer;