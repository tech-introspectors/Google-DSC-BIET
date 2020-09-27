import React from "react";
import HeroSection from "../../HeroSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./data/Data";

export default function Home() {
  return (
    <>
      <div className="container">
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} />
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjFour} />
        <HeroSection {...homeObjFive} />
      </div>
    </>
  );
}
