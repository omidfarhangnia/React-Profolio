import Loader from "@/Components/Loader";
import Context from "@/context/context";
import "@/styles/globals.css";
import { createContext, useEffect, useState } from "react";
import "../styles/font.css";
import { gsap } from "gsap";

export default function App({ Component, pageProps }) {
  const [loaded, setIsLoaded] = useState(true);

  useEffect(() => {
    // let loaderTl = gsap.timeline({onComplete: () => {
    //   setIsLoaded(true)
    // }});
    // loaderTl
    // .to(".loaderBineriesNumber", {
    //   opacity: 1,
    //   duration: 1,
    //   stagger: .03,
    //   ease: "power4.out"
    // })
    // .to(".loaderGreenBg", {
    //   opacity: 1,
    // })
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <Context>
            <Component {...pageProps} />
          </Context>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
