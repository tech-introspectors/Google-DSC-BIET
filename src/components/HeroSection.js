import React from "react";
import "./HeroSection.css";
// import { Link } from "react-dom";

function HeroSection({
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
}) {
  return (
    <>
      <div className="home__hero-section container">
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="lg-col-7 sm-col-12">
              <div className="home__hero-text-wrapper">
                <h1 className="heading">{headline}</h1>
                <p className="home__hero-subtitle">{description}</p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
