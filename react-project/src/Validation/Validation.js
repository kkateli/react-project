import React from "react";

const validation = props => {
  //REVIEW this doesnt work!!! relats to the REVIEW down below.
  // let lenCount= (<p>Too short!</p>);
  // if(props.len>5){
  //     lenCount=(<p>Too long!</p>)
  // };
  let countLen = "Too short!!";
  if (props.len > 5) {
    countLen = "Too long!!";
  }

  return (
    //This is the other way, works
    //   <div>
    //   { props.len<5?

    //   <p>Too short!</p>  :
    //   <p>Too long</p>

    //   }
    //</div>
    <div>
      <p>{countLen}</p>
    </div>

    // REVIEW doesnt work !!
    //{lenCount}
  );
};
export default validation;
