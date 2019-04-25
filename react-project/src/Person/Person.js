//This is Person component
import React from "react";
import cssClasses from "./Person.module.css";
// import Radium from 'radium';

const person = props => {
  // const style ={
  //   '@media (min-width: 500px)':{
  //     width:'450px'
  //   }
  // };
  /* ANCHOR 1. there is the way to declear name and age
    2. wrap what's returned in brakets to have multiple lines
    3. we can pass methods as props, this can change the state 
    from another file which doesnt have direct access*/

  /* NOTE children here is a reserved word to return information we written in the element: 
        <Person>here is the info</Person> */

  /* NOTE onChange will update if input changes */
  /* NOTE value={props.name} enables two way binding so that the input knows the current value*/
  return (
    <div className={cssClasses.Person}>
      <p onClick={props.click}>
        I am {props.name} I am {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeById} value={props.name} />
    </div>
  );
};
// export default Radium(person);
export default person;
