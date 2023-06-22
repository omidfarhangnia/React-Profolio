import React, { useEffect } from "react";
import { gsap } from "gsap";

const Loader = ({ setIsLoaded }) => {
  function counter(id, start, end, duration) {
    let obj = document.querySelector(id),
      current = start,
      range = end - start,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += 2;
        if (obj) {
          obj.textContent = current;
        }
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }

  useEffect(() => {
    const binaryNumber = document.querySelectorAll(".binaryNumber");
    let unsubscribe = () => {
      binaryNumber.forEach((binaryNumberItem) => {
        const innerHeight = window.innerHeight,
          innerWidth = window.innerWidth;

        const randomTopNumber = Math.floor(Math.random() * innerHeight - 250);
        const randomLeftNumber = Math.floor(Math.random() * innerWidth - 50);
        const randomRotateNumber = Math.floor(Math.random() * 180 - 90);
        const randomFontNumber = Math.floor(Math.random() * 350 + 150);

        gsap.set(binaryNumberItem, {
          top: `${randomTopNumber}px`,
          left: `${randomLeftNumber}px`,
          rotate: `${randomRotateNumber}deg`,
          fontSize: `${randomFontNumber}px`,
          opacity: 0,
        });
      });
    };

    return () => {
      unsubscribe();
      let binaryTl = gsap.timeline({
        onStart: () => {
          counter(".counterNumber", 0, 100, 4000);
        },
        onComplete: () => {
          setIsLoaded(true);
        },
      });
      binaryTl
        .to(".counterNumberContainer", {
          opacity: 0,
          delay: 4,
          duration: 0.5,
          ease: "circ.out",
        })
        .to(".binaryNumber", {
          duration: 1.5,
          opacity: 1,
          stagger: 0.03,
          ease: "power4.out",
        })
        .to(
          ".greenLayer",
          {
            opacity: 1,
            duration: 0.5,
            ease: "circ.out",
          },
          "-=1"
        );
    };
  }, []);

  return (
    <div className="w-full h-[100vh] overflow-hidden bg-black text-customGreen2 select-none text-[70px] md:text-[110px] lg:text-[150px] grid place-items-center relative">
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <span className="absolute binaryNumber">0</span>
      <span className="absolute binaryNumber">1</span>
      <div className="absolute flex items-center justify-center counterNumberContainer">
        <span className="counterNumber">0</span>
        <span className="counterPercent">%</span>
      </div>
      <div className="w-full h-full bg-customGreen2 greenLayer opacity-0"></div>
    </div>
  );
};

export default Loader;
