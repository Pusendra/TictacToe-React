import React, { Component } from "react";
import Square from "./Square";
import { WinningLogic, status, handleRes } from "./Helper";

export default class Board extends Component {
  state = {
    gameStates: Array(9).fill(null),
    isNext: true,
    value: "",
    current: "X",
  };
  handleClick = (i) => {
    const nextState = [...this.state.gameStates];
    nextState[i] = this.state.isNext ? "X" : "O";

    this.setState({
      gameStates: nextState,
      isNext: !this.state.isNext,
      current: !this.state.isNext ? "X" : "O",
    });
  };

  handleReset = () => {
    this.setState({
      gameStates: Array(9).fill(null),
      isNext: true,
      value: "",
      current: "X",
    });
    handleRes();
  };

  render() {
    WinningLogic(this.state.gameStates);
    return (
      <div>
        <h1 id="result">{status ? status : `Turn of ${this.state.current}`}</h1>
        <section>
          <Square
            onClick={() => {
              this.handleClick(0);
            }}
            value={this.state.gameStates[0]}
            state={this.state.gameStates}
            status={status}
          />
          <Square
            onClick={() => this.handleClick(1)}
            value={this.state.gameStates[1]}
            status={status}
          />
          <Square
            onClick={() => this.handleClick(2)}
            value={this.state.gameStates[2]}
            status={status}
          />
          <Square
            onClick={() => this.handleClick(3)}
            value={this.state.gameStates[3]}
            status={status}
          />
          <Square
            onClick={() => this.handleClick(4)}
            value={this.state.gameStates[4]}
            status={status}
          />
          <Square
            onClick={() => this.handleClick(5)}
            value={this.state.gameStates[5]}
            status={status}
          />
          <Square
            onClick={() => this.handleClick(6)}
            value={this.state.gameStates[6]}
            status={status}
          />
          <Square
            onClick={() => this.handleClick(7)}
            value={this.state.gameStates[7]}
            status={status}
          />
          <Square
            onClick={() => this.handleClick(8)}
            value={this.state.gameStates[8]}
            status={status}
          />
        </section>
        <div className="footer">
          <p>Tic Tac Toe</p>
          <br />
          <button id="btn" onClick={() => this.handleReset()}>
            Restart Game
          </button>
        </div>
      </div>
    );
  }
}
