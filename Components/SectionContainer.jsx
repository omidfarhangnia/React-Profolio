import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext, useEffect } from "react";
import { gsap } from "gsap";

const SectionContainer = ({ children }) => {
  const { currentActivePage, setCurrentActivePage } = useContext(
    ActiveAndChangeActive
  );

  function handleChangeSection(e) {
    const sectionContainer = document.getElementById("sectionContainer");
    sectionContainer.removeEventListener("wheel", handleChangeSection);

    if (e.deltaY > 0) {
      // play animation
      playAnimation(() => {
        goNext(currentActivePage, setCurrentActivePage);
      });
    } else {
      // play animation
      playAnimation(() => {
        goPrev(currentActivePage, setCurrentActivePage, sectionContainer);
      });
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

export function playAnimation(callback) {
  const tl = gsap.timeline();
  tl.set(".pageAnimeContainer", {
    top: 0,
  })
    .set(".greenBarContainer > div", {
      left: "100%",
    })
    .to(".leftZeroPiece, .rightZeroPiece", {
      opacity: 1,
      duration: 0.3,
      ease: "linear",
    })
    .to(
      ".greenBarContainer > div",
      {
        left: 0,
        duration: 0.5,
        stagger: 0.3,
        onComplete: callback,
      },
      "-=.1"
    )
    .to(".greenBarContainer > div", {
      left: "-100%",
      duration: 0.5,
      stagger: 0.3,
    })
    .to(
      ".leftZeroPiece, .rightZeroPiece",
      {
        opacity: 0,
        duration: 0.3,
        ease: "linear",
      },
      "-=.4"
    )
    .set(".pageAnimeContainer", {
      top: "200%",
    });
}

export default SectionContainer;
