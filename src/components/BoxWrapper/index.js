import React, { Component } from 'react';

import "./styles.css";
import BoardCollab from "../BoardCollab";
import NextPlayer from "../NextPlayer";
// const BoxWrapper = ({children}) => (
//   <main className="box-wrapper">{children}</main>
// );

class BoxWrapper extends Component {
  state = {player: "X"};

  handleClick = () => {
    this.setState({player: this.state.player === "X" ? "O" : "X"})
  }

  render() {    
    const {player} = this.state;
    return (    
      <main className="box-wrapper">
        <NextPlayer player={player} />
        <BoardCollab onClick={this.handleClick}/>
      </main>
    )
  }
}

export default BoxWrapper;