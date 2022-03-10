import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  //Gives html from what i can see and returns it to be rendered
  render() {
    return (
      <button 
        className="square" 
        //not sure where to put this but the html attributes that get given to a component seem to be then put into props so thats why we can call
        //props.onClick() because board gives the onclick and the value
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {

  constructor(props)
  {
    //Call the parent constructor, so it makes the react component i think and then whatever we are doing
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }

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

  }

  //Gives html from what i can see and returns it to be rendered
  render() {
    const status = 'Next player: X';

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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
