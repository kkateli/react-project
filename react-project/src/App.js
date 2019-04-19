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
//event target is input here, because this function is called be input in Person.js
  changeNameByInput = (event)=>{
    this.setState({
    persons: [{ name: event.target.value, age: 30 }, { name: "Eli", age: 30 }]
  });
};

  render() {
    //this is another way to change styling apart from importing css file
    //sytex is javascript, not as powerful as css because some of the features are not available.
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue'
    }
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
      //if switchNameHandler has arguments, we can use arrow funtion
      //()=> this.switchNameHandler(args),this is an anomynous callback function
      <div className="App">
        <h1>I am an app</h1> 

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click = {this.switchNameHandler}
          changeByInput = {this.changeNameByInput}
        />
        <Person name="Eli" age="27"> 
          I like eating
        </Person>
        <button style = {style} onClick={this.switchNameHandler}>Switch name</button>
      </div>
    );
  }
}

export default App;
