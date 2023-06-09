import Loader from "@/Components/Loader";
import Context from "@/context/context";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import "../styles/font.css";
import { gsap } from "gsap";

export default function App({ Component, pageProps }) {
  const [loaded, setIsLoaded] = useState(false);

  return (
    <>
      {loaded ? (
        <>
          <Context>
            <Component {...pageProps} />
          </Context>
        </>
      ) : (
        <Loader setIsLoaded={setIsLoaded}/>
      )}
    </>
  );
}
