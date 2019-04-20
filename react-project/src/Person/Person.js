//This is Person component
import React from 'react';
import "./Person.css";

const person = (props)=>{
    /* ANCHOR 1. there is the way to declear name and age
    2. wrap what's returned in brakets to have multiple lines
    3. we can pass methods as props, this can change the state 
    from another file which doesnt have direct access*/
    
    /* NOTE children here is a reserved word to return information we written in the element: 
        <Person>here is the info</Person> */
   
    /* NOTE onChange will update if input changes */
    /* NOTE value={props.name} enables two way binding so that the input knows the current value*/
    return( 
        <div className = 'Person'>
        <p onClick={props.click}>I am {props.name} I am {props.age}</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changeByInput} value={props.name}/>
        </div>
        )
}
export default person;  