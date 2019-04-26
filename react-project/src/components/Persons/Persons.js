import Person from "./Person/Person";
import React from "react";
//persons is the function name(the blue print of its component), props.persons is one of its properties. They are different
const persons = props => {
  return props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        key={person.id}
        changeById={event => props.changed(event, person.id)}
        click={() => props.deleted(index)}
      />
    );
  });
};
export default persons;