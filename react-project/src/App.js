import React, { Component } from "react";

import "./App.css";

import Person from './Person/Person';

class App extends Component {
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
      <div className="App">
        <h1>I am an app</h1>
        
        <Person /> 
      </div>
    );
  }
}

export default App;
