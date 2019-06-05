import React, { Component } from 'react';

import "./styles.css";


class SquareCollab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "X"
    }
  }

  handleClick = () => {
    // if ternário
    this.setState(this.state.content === "X" ? {content: "O"} : {content: "X"});
    
    // const newState = {};

    // if(this.state.content === "X") {
    //   newState.content = "O"; 
    // } else {
    //   newState.content = "X"; 
    // }

    // this.setState(newState);
  };

  render() {
    return (
      <button onClick={this.handleClick} className="square-collab">               {this.state.content}
      </button>
    )
  }
}

// Stateless
  // const handleClick = () => {
  //   console.log("Foi");
  // }

  // const SquareCollab = () => (
  //   <button onClick={handleClick} className="square-collab">X</button>
  // );

export default SquareCollab;