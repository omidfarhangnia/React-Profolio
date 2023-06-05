import HomeSection from "@/Components/HomeSection";
import Navbar from "@/Components/Navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <HomeSection />
      </div>
    </>
  );
}
