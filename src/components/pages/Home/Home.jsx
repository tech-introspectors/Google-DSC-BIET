import React from "react";
import HeroSection from "../../HeroSection";
import TitleCenter from "./components/TitleCenter";
import Card from "./components/Card";
import Card_Details from "./data/Card_Details";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./data/Data";
import { TitleCenter1 } from "./data/TitleCenterData";

import "../Home/Home.css";

export default function Home() {
  // function ncards(val) {
  //   return <Card img={val.img} tech_Name={val.tech_Name} />;
  // }
  return (
    <>
      <div>
        <div className="container">
          <HeroSection {...homeObjOne} />
          <HeroSection {...homeObjTwo} />
          <HeroSection {...homeObjThree} />
          <HeroSection {...homeObjFour} />
        </div>
        <div className="tech_bg_color  ">
          <div className="container">
            <div className="text-center">
              <TitleCenter {...TitleCenter1} />
            </div>
            <div className="row d-flex">
              {/* <div className="col-4">{Card_Details.map(ncards)}</div> */}

              <div className="col-4">
                <Card />
              </div>
              <div className="col-4">
                <Card />
              </div>
              <div className="col-4">
                <Card />
              </div>
              <div className="col-4">
                <Card />
              </div>
              <div className="col-4">
                <Card />
              </div>
              <div className="col-4">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
