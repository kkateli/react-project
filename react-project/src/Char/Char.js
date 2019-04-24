import React from "react";
import "./Char.css";

const char = props => {
  return (
    <div onClick= {props.clickChar} className="char">
      {props.word}
    </div>
  );
};
export default char;
