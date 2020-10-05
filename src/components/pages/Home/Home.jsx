import React from "react";
import HeroSection from "../../HeroSection";
import TitleCenter from "./components/TitleCenter";
import Card from "./components/Card";
import Card_Details from "./data/Card_Details";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./data/Data";
import { TitleCenter1 } from "./data/TitleCenterData";

import "../Home/Home.css";

export default function Home() {
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
            <div className="row d-flex justify-content-center">
              <div className="col-4">
                <Card
                  img={Card_Details[0].img}
                  tech_Name={Card_Details[0].tech_Name}
                />
              </div>
              <div className="col-4">
                <Card
                  img={Card_Details[1].img}
                  tech_Name={Card_Details[1].tech_Name}
                />
              </div>
              <div className="col-4">
                <Card
                  img={Card_Details[2].img}
                  tech_Name={Card_Details[2].tech_Name}
                />
              </div>
              <div className="col-4">
                <Card
                  img={Card_Details[3].img}
                  tech_Name={Card_Details[3].tech_Name}
                />
              </div>
              <div className="col-4">
                <Card
                  img={Card_Details[4].img}
                  tech_Name={Card_Details[4].tech_Name}
                />
              </div>
              <div className="col-4">
                <Card
                  img={Card_Details[5].img}
                  tech_Name={Card_Details[5].tech_Name}
                />
              </div>
              <div className="col-4">
                <Card
                  img={Card_Details[6].img}
                  tech_Name={Card_Details[6].tech_Name}
                />
              </div>
              <div className="col-4">
                <Card
                  img={Card_Details[7].img}
                  tech_Name={Card_Details[7].tech_Name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
