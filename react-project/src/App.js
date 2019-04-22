import React, { Component } from "react";

import "./App.css";

import Person from "./Person/Person";

import Validation from "./Validation/Validation";

class App extends Component {
  // REVIEW (state is an object)we need to use state with care
  state = {
    persons: [
      { id: "fdsd", name: "Kate", age: 28 },
      { id: "fdsfds", name: "eli", age: 28 }
    ],
    ifShown: false,
    userInputCount:0
  };
  //event handler
  //NOTE event target is input here, because this function is called be input in Person.js
  changeNameById = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //making a copy before changing
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  showPeopleHandler = () => {
    //when button is clicked, ifshown state changes to the opposite
    this.setState({ ifShown: !this.state.ifShown });
  };

  deletePerson = index => {
    // const persons = this.state.persons; NOTE considered as bad practice, we need to make
    //changes on a copy before actually changing the original one.
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  inputLength= (event)=>{
    let count = {...this.state.userInputCount};
    count= event.target.value.length;
    this.setState({
      userInputCount:count
    });

  };

  render() {
    //this is another way to change styling apart from importing css file
    //sytex is javascript, not as powerful as css because some of the features are not available.
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue"
    };

    const inputStyle={
      border:'1px black solid',
    }
    //use if/else statement outside JSX
    let people = null;
    if (this.state.ifShown) {
      people = (
        <div>
          {/*The alternative of this 
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler}
            changeByInput={this.changeNameByInput}
            <Person name="Eli" age="27">
            I like eating
          </Person>
          /> is:
          (Convert javascript arraies to JSX!!!!) NOTE */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                changeById={event => this.changeNameById(event, person.id)}
                click={() => this.deletePerson(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      /**ANCHOR 1. This code is not HTML, it is JSX. It will be compile to different syntex when runing it. 
       * eg:<div className="App">
            <h1>I am an app</h1>
            </div>
      can be compiled to return React.creatElement('div',{className:'App},
      React.createElement(h1,null,'I am an app'));
      2. Never add anything outside the root element, here is App(Refers to index.js), because a jsx
      only allows one root. the best practice is to add css, jsx to the root so
      that we will not ness this around.
      3. if you are not wrapping anything in a element, we can use /> to self close the element
      4. this.switchNameHandler doesnt have (), because we dont call the function 
      but passing the reference of the function.
      5. if switchNameHandler has arguments, we can use arrow funtion
      ()=> this.switchNameHandler(args),this is an anomynous callback function
      6. only ternery operation(if ? :) works in JSX
      */
      //NOTE className is class in css.
      //
      <div className="App">
        <h1>I am an app</h1>
        {/* NOTE this can be one way, nut can be messy when project gets bigger */}
        {/* {this.state.ifShown ? 
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler}
              changeByInput={this.changeNameByInput}
            />
            <Person name="Eli" age="27">
              I like eating
            </Person>
          </div>
         : null} */}
        {people}
        <button style={style} onClick={this.showPeopleHandler}>
          Show People
        </button>
        <input style={inputStyle} onChange={(event)=>this.inputLength(event)}></input>
        <p>Count:{this.state.userInputCount}</p>
        <Validation len={this.state.userInputCount}/>
      </div>
    ); 
  }
}

export default App;
