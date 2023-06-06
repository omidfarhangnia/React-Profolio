import { useActivePage } from "@/pages";
import React from "react";

const ProjectSection = () => {
  const { currentActivePage } = useActivePage();

  return (
    <section
      className={`w-full h-full bg-yellow-500 ${
        currentActivePage !== 4 && "top-[100%]"
      } fixed text-[300px] projectSection`}
    >
      <div>project page</div>
    </section>
  );
};

export default ProjectSection;
