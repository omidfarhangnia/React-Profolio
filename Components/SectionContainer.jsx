import { useActivePage } from "@/pages";
import React, { useEffect } from "react";

const SectionContainer = ({ children }) => {
  useEffect(() => {
    const sectionContainer = document.getElementById("sectionContainer");
    sectionContainer.addEventListener("wheel", changeSection);
  }, []);

  return <>{children}</>;
};

export function changeSection(e) {
  const { currentActivePage } = useActivePage();
  const sectionContainer = document.getElementById("sectionContainer");
  sectionContainer.removeEventListener("wheel", changeSection);

  if (e.deltaY > 0) {
    console.log("next time");
    goNext(currentActivePage);
  } else {
    console.log("prev time");
    goPrev(currentActivePage);
  }
}

export function goNext(currentPage) {
  if (currentPage === 5) {
    // set(0)
  } else {
    // set(currentPage + 1)
  }
}

export function goPrev(currentPage) {
  if (currentPage === 1) {
    // set(5)
  } else {
    // set(currentpage - 1);
  }
}

export default SectionContainer;
