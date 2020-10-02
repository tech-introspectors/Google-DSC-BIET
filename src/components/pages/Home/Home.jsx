import React from "react";
import HeroSection from "../../HeroSection";
import TitleCenter from "./components/TitleCenter";
import Card from "./components/Card";
import Card_Details from "./data/Card_Details";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./data/Data";
import { TitleCenter1 } from "./data/TitleCenterData";

export default function Home() {
  function ncards(val) {
    return <Card img={val.img} tech_Name={val.tech_Name} />;
  }
  return (
    <>
      <div className="container">
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} />
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjFour} />
        <div>
          <div className="text-center">
            <TitleCenter {...TitleCenter1} />
          </div>
          <div>{Card_Details.map(ncards)}</div>
        </div>
      </div>
    </>
  );
}
