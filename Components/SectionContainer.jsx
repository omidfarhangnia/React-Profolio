import { ActiveAndChangeActive } from "@/context/context";
import { env } from "@/next.config";
import { doc } from "firebase/firestore";
import React, { useContext, useEffect } from "react";

const SectionContainer = ({ children }) => {
  const { currentActivePage, setCurrentActivePage } = useContext(
    ActiveAndChangeActive
  );

  function handleChangeSection(e) {
    const sectionContainer = document.getElementById("sectionContainer");
    sectionContainer.removeEventListener("wheel", handleChangeSection);

    if (e.deltaY > 0) {
      // play animation
      goNext(currentActivePage, setCurrentActivePage);
    } else {
      // play animation
      goPrev(currentActivePage, setCurrentActivePage, sectionContainer);
    }
  }

  function handleChangeSectionWithButton(e) {
    const goNextButton = document.getElementById("goNextButton");
    const goPrevButton = document.getElementById("goPrevButton");
    goNextButton.removeEventListener("click", handleChangeSectionWithButton);
    goPrevButton.removeEventListener("click", handleChangeSectionWithButton);
    if (e.target.getAttribute("id") === "goNextButton") {
      goNext(currentActivePage, setCurrentActivePage);
    } else if (e.target.getAttribute("id") === "goPrevButton") {
      goPrev(currentActivePage, setCurrentActivePage);
    }
  }

  useEffect(() => {
    const sectionContainer = document.getElementById("sectionContainer");
    const goNextButton = document.getElementById("goNextButton");
    const goPrevButton = document.getElementById("goPrevButton");
    sectionContainer.addEventListener("wheel", handleChangeSection);
    goNextButton.addEventListener("click", handleChangeSectionWithButton);
    goPrevButton.addEventListener("click", handleChangeSectionWithButton);
  }, [currentActivePage]);

  return (
    <div className="fixed">
      <button
        className="bg-customGreen1 font-bold uppercase text-white
       md:hidden absolute text-[12px] left-[90vw] top-[47.5vh] h-[5vh] w-[10vw] p-4 z-20 flex items-center justify-center rounded-bl-lg rounded-tl-lg"
        id="goNextButton"
      >
        next
      </button>
      <button
        className="bg-customGreen1 font-bold uppercase text-white
       md:hidden absolute text-[12px] left-0 top-[47.5vh] h-[5vh] w-[10vw] p-4 z-20 flex items-center justify-center rounded-br-lg rounded-tr-lg"
        id="goPrevButton"
      >
        prev
      </button>
      {children}
    </div>
  );
};

function goNext(currentActivePage, setCurrentActivePage) {
  if (currentActivePage === 5) {
    setCurrentActivePage(1);
  } else {
    setCurrentActivePage(currentActivePage + 1);
  }
}

function goPrev(currentActivePage, setCurrentActivePage) {
  if (currentActivePage === 1) {
    setCurrentActivePage(5);
  } else {
    setCurrentActivePage(currentActivePage - 1);
  }
}

export default SectionContainer;
