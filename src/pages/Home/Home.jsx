import React from "react";
import HeroSection from "../../components/HeroSection";
import TitleCenter from "./components/TitleCenter";
import Card from "./components/Card";
import Card_Details from "./data/Card_Details";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./data/Data";
import {
  TitleCenter1,
  TitleCenter2,
  TitleCenter3,
} from "./data/TitleCenterData";
import Form from "../Home/components/Form";
import Button from "./components/Button";
import FaQ from "./components/FaQ";
import Footer from "../../components/Footer";

import "../Home/Home.css";





export default function Home() {
  return (
    <>
      <div className = "main">
        <div className="container _shapeAnimation" >
          <HeroSection {...homeObjOne}  />
          <HeroSection {...homeObjTwo} />
          <HeroSection {...homeObjThree} />
          <HeroSection {...homeObjFour} />
        </div>

        {/* Technologies section */}

        <div className="tech_bg_color">
          <div className="container">
            <div className="text-center">
              <TitleCenter {...TitleCenter1} />
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-xl-4 col-md-6 mx-auto">
                <Card
                  img={Card_Details[0].img}
                  tech_Name={Card_Details[0].tech_Name}
                />
              </div>
              <div className="col-lg-6 col-xl-4 col-md-6 mx-auto">
                <Card
                  img={Card_Details[1].img}
                  tech_Name={Card_Details[1].tech_Name}
                />
              </div>
              <div className="col-lg-6 col-xl-4 col-md-6 mx-auto">
                <Card
                  img={Card_Details[2].img}
                  tech_Name={Card_Details[2].tech_Name}
                />
              </div>
              <div className="col-lg-6 col-xl-4 col-md-6 mx-auto">
                <Card
                  img={Card_Details[3].img}
                  tech_Name={Card_Details[3].tech_Name}
                />
              </div>
              <div className="col-lg-6 col-xl-4 col-md-6 mx-auto">
                <Card
                  img={Card_Details[4].img}
                  tech_Name={Card_Details[4].tech_Name}
                />
              </div>
              <div className="col-lg-6 col-xl-4 col-md-6 mx-auto">
                <Card
                  img={Card_Details[5].img}
                  tech_Name={Card_Details[5].tech_Name}
                />
              </div>
              <div className="col-lg-6 col-xl-4 col-md-6 mx-auto">
                <Card
                  img={Card_Details[6].img}
                  tech_Name={Card_Details[6].tech_Name}
                />
              </div>
              <div className="col-lg-6 col-xl-4 col-md-6 mx-auto">
                <Card
                  img={Card_Details[7].img}
                  tech_Name={Card_Details[7].tech_Name}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Technologies section ended */}

        {/* recent_project section */}

        <div className="text-center recent_project">
          <TitleCenter {...TitleCenter2} />
          <p style={{ color: "grey" }}>No Projects Available Right Now</p>
        </div>

        {/* recent_project section ended */}

        <div className="form_bg_color">
          <div className="container ">
            <div className="row">
              <div className="col-lg-6 col-md-12 mx-auto">
                <h1>Have an Awesome Idea, Lets BrainStorm</h1>
                <p className="mb-1">
                  <b>Input:</b>
                </p>
                <p className="mb-1">
                  const <b>idea</b> = ["Revolutionary Idea"];
                </p>
                <p className="mb-1">
                  if(
                  <b>
                    ! idea.includes("technicalKnowledge" || "developers" ||
                    {"  "}"domainKnowledge" || "designers "{" "}
                  </b>
                  ){" { "}
                </p>
                <p className="ml-4">
                  <b>submitIdea();</b>
                </p>
                <p className="mb-1">{" } "}</p>
                <p className="mb-1">
                  <b>Output: </b>helpReceived()
                </p>
              </div>
              <div className="col-lg-6 col-md-12 form_container">
                <div className="form_content">
                  <Form placeholder="Name*" />
                  <Form placeholder="Email*" />
                  <Form placeholder="Branch*" />
                  <Form placeholder="Year*" />
                  <Form placeholder="Idea*" />
                  <Button text="SUBMIT IDEA" column = "12" buttonSize="50px" />
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* FAQ section ----------->>>>  */}
        <div className="tech_bg_color">
          <div className="text-center">
            <TitleCenter {...TitleCenter3} />
          </div>
            <FaQ  />
        </div>
         {/* FAQ section ----------->>>> end */}



        {/* Footer ----------------->>>>>  */}
        <Footer />
      </div>
    </>
  );
}
