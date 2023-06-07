import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext } from "react";

const AboutSection = () => {
  const { currentActivePage } = useContext(ActiveAndChangeActive);
  return (
    <section
      className={`w-full h-full bg-teal-500 ${
        currentActivePage !== 2 && "top-[100%]"
      } fixed text-[300px] aboutSection`}
    >
      <div>about page</div>
    </section>
  );
};

export default AboutSection;
