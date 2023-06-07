import React, { useEffect } from "react";
import { gsap } from "gsap";

const Loader = () => {
  function counter(id, start, end, duration) {
    let obj = document.querySelector(id),
      current = start,
      range = end - start,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += 2;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }

  useEffect(() => {
    counter(".counterNumber", 0, 100, 4000);
  }, [])

  return (
    <div className="w-full h-[100vh] overflow-hidden bg-black text-customGreen1 select-none text-[80px] md:text-[100px] lg:text-[130px] grid place-items-center relative font-BIZ">
      <div className="w-[250px] h-[250px] absolute flex items-center justify-center">
        <span className="counterNumber">0</span><span className="counterPercent">%</span>
      </div>
    </div>
  );
};

export default Loader;
