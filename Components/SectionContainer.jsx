import { ActiveAndChangeActive } from "@/context/context";
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
      sectionContainer.addEventListener("wheel", handleChangeSection)
    } else {
      goPrev(currentActivePage, setCurrentActivePage, sectionContainer);
      sectionContainer.addEventListener("wheel", handleChangeSection);
    }
  }

  useEffect(() => {
    const sectionContainer = document.getElementById("sectionContainer");
    sectionContainer.addEventListener("wheel", handleChangeSection);
  }, [currentActivePage]);

  return <>{children}</>;
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
