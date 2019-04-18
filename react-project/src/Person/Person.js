//This is Person component
import React from 'react';

const person = (props)=>{
    //there is the way to declear name and age
    //wrap what's returned in brakets to have multiple lines
    //children here is a reserved word to return information we written in the element: 
    //<Person>here is the info</Person>
    //we can pass methods as props, this can change the state 
    //from another file which doesnt have direct access
    return( 
        <div><p onClick={props.click}>I am {props.name} I am {props.age}</p>
        <p>{props.children}</p>
        </div>
        )
}
export default person;