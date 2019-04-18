import React, { Component } from "react";

import "./App.css";

import Person from './Person/Person';

class App extends Component {
  //we need to use state with care
  state = {
    persons: [{ name: "Kate", age: 28 }, { name: "eli", age: 28 }]
  };
  //event handler
  switchNameHandler = () => {
    //Dont do this: this.state.persons[0].name = 'Kate changed';
    //setState will auto overwrite the parts that have been changed
    //and untouch the identical parts. Changeing state will lead to changing the props
    this.setState({
      persons: [{ name: "Kate Li", age: 26 }, { name: "eli", age: 28 }]
    });
  };
  render() {
    return (
      /**This code is not HTML, it is JSX. It will be compile to different syntex when runing it. 
       * eg:<div className="App">
            <h1>I am an app</h1>
            </div>
            can be compiled to return React.creatElement('div',{className:'App},
            React.createElement(h1,null,'I am an app'));
      */
      //className is class in css.
      /**Never add anything outside the root element, here is App(Refers to index.js), because a jsx
       * only allows one root. the best practice is to add css, jsx to the root so
       * that we will not ness this around.
       */
      //if you are not wrapping anything in a element, we can use /> to self close the element
      //this.switchNameHandler doesnt have (), because we dont
      //call the function but passing the reference of the function
      <div className="App">
        <h1>I am an app</h1>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click = {this.switchNameHandler}
        />
        <Person name="Eli" age="27"> 
          I like eating
        </Person>
        <button onClick={this.switchNameHandler}>Switch name</button>
      </div>
    );
  }
}

export default App;
