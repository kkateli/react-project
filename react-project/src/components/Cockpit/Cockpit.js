import React from "react";
const cockpit = (props)=>{
    return (
        <div>
        <button className={props.appBtn} onClick={props.showed}>
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