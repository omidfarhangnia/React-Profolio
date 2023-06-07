import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext } from "react";

const SkillsSection = () => {
  const { currentActivePage } = useContext(ActiveAndChangeActive);

  return (
    <section
      className={`w-full h-full bg-red-500 ${
        currentActivePage !== 3 && "top-[100%]"
      } fixed text-[300px] skillsSection`}
    >
      <div>skills page</div>
    </section>
  );
};

export default SkillsSection;
