import React, { Component } from 'react';

import "./styles.css";
import BoardCollab from "../BoardCollab";
import NextPlayer from "../NextPlayer";
import HistoryCollab from "../HistoryCollab";
// const BoxWrapper = ({children}) => (
//   <main className="box-wrapper">{children}</main>
// );

class BoxWrapper extends Component {
  state = {
    player: "X",
    squares: Array(9).fill("")
    };

  handleClick = index => {
    const {player, squares} = this.state;

    (!squares[index] && (squares[index] = player));

    this.setState({
      player: player === "X" ? "O" : "X",
      squares
    }) 
  }

  render() {    
    const { player, squares } = this.state;
    return (    
      <main className="box-wrapper">
        <NextPlayer player={player} />
        <BoardCollab squares={squares} onClick={this.handleClick}/>
        <HistoryCollab />
      </main>
    );
  };
}

export default BoxWrapper;