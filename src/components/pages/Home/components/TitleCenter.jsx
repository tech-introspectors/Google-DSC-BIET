import React from "react";
import "../components/TitleCenter.css";

export default function TitleCenter({ title, description }) {
  return (
    <>
      <div>
        <h1 className="_title">{title}</h1>
        <p className="_desc">{description}</p>
      </div>
    </>
  );
}
