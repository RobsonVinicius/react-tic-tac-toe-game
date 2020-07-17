import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      xIsNext: true, 
      stepNumber: 0,
      history: [
        { squares: Array(9).fill(null) }
      ],
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slide();
    const winner = calculateWinner(squares);
    if(winner || squares[i]) { 
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : "O";
    this.setState({
      history: history.concat({
        squares: squares,
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length.length,
    });
  }
}

render() {
  const history = this.state.history;
  const current = history.[history.length - 1];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) =>{
    const desc = move ? 'Vá até #' + move : move : 'Comece o Jogo';
    return (
      <li key={move}>
        <button onClick={() => {this.jumpTo(move)}}>
          {desc}
        </button>
      </li>
    );
  });
  let status = winner ? 'O vencedor é ' + winner : 'Próximo Jogador é' + (this.state.xIsNext ? 'X' : 'O');

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          onClick={(i) => this.handleClick(i)} 
          squares={current.squares}
        ></Board>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ul>
          {moves}
        </ul>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  return null;  
}
