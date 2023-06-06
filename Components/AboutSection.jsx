import { useActivePage } from "@/pages";
import React from "react";

const AboutSection = () => {
  const { currentActivePage } = useActivePage();
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
