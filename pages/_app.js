import Context from "@/context/context";
import "@/styles/globals.css";
import { createContext } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}
