import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card_container">
        <img src={props.img} alt="" />
        <h2>{props.tech_Name}</h2>
      </div>
    </>
  );
}
