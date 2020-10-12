import React from "react";
import "../components/Button.css";

export default function Button(props) {
  return (
    <div>
      <button
        className="col-lg-12 btn btn-primary btn_customStyle"
        style={{ height: `${props.buttonSize}` }}
      >
        {props.text}
      </button>
    </div>
  );
}
