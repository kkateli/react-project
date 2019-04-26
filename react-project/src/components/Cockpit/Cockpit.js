import React from "react";
import cssClasses from "./Cockpit.module.css";
const cockpit = (props)=>{
    let appBtn = "";
    if(props.shown){
        appBtn  = cssClasses.Blue;
    }
    return (
        <div className={cssClasses.Cockpit}>
        <button className={appBtn} onClick={props.showed}>
          Show People
        </button>
        <p className={props.pName}>
          If it has more than 2 people, it is bold. If it has only one element,
          it is bold and red.
        </p>
        </div>
        
    );
}
export default cockpit;