import React from "react";
import "../components/Button.css";

export default function Button(props) {

  const style  = {
    height: `${props.buttonSize}`, 
    width: `${props.buttonWidth}`,
    borderTopLeftRadius: `${props.TopLeft_Radius}`,
    borderBottomLeftRadius: `${props.BottomLeft_Radius}`,
    borderTopRightRadius: `${props.TopRight_Radius}`,
    borderBottomRightRadius: `${props.BottomRight_Radius}`,

  }
  return (
    <div>
      <button
        className={`col-lg-${props.column} btn btn-primary ${props.btn_customStyle}`}
        style={style}
      >
        {props.text}
      </button>
    </div>
  );
}
