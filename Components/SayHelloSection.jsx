import { ActiveAndChangeActive } from "@/context/context";
import React, { useContext } from "react";

const SayHelloSection = () => {
  const { currentActivePage } = useContext(ActiveAndChangeActive);

  return (
    <section
      className={`w-full h-full bg-blue-500 ${
        currentActivePage !== 5 && "top-[100%]"
      } fixed text-[300px] sayHelloSection`}
    >
      <div>hello page</div>
    </section>
  );
};

export default SayHelloSection;
