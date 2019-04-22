import React from "react";
import "./Char.css";

const char = props => {
  return (
    <div className="char">
      {props.word}
    </div>
  );
};
export default char;
