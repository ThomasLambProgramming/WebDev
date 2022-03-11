import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//We can make a function that takes in props and returns whatever we want to be rendered, this is a funciton component we do this 
//when the function only needs to have the render function and use a class that extents react.component when we need more than render
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {/*Display the props value as the button text*/}
      {props.value}
    </button>
  );
}


class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i)
  {
    const squaresNew = this.state.squares.slice();

    //Exit early if the square has a value or the game has already been won
    if (calculateWinner(squaresNew) || squaresNew[i])
      return;

    squaresNew[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squaresNew,
      xIsNext: !this.state.xIsNext,
    });
  }

  //Gives html from what i can see and returns it to be rendered
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner ' + winner 
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props)
  {
    //Call the parent react.component constructor as well as this one so it is one whole component with our addons
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }




  //Gives html from what i can see and returns it to be rendered
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
