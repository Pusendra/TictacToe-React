import React, { Component } from "react";
import Square from "./Square";
import { WinningLogic, status, handleRes } from "./Helper";

export default class Board extends Component {
  state = {
    gameStates: Array(9).fill(null),
    isNext: true,
    value: "",
    current: "X"
  };
  handleClick = (i) => {
    const nextState = [...this.state.gameStates];
    nextState[i] = this.state.isNext ? "X" : "O";

    this.setState({
      gameStates: nextState,
      isNext: !this.state.isNext,
      current: !this.state.isNext ? "X" : "O"
    });
  };

  handleReset = () => {
    this.setState({
      gameStates: Array(9).fill(null),
      isNext: true,
      value: "",
      current: "X"
    });
    handleRes();
  };

  render() {
    const { gameStates, current } = this.state;
    WinningLogic(gameStates);
    return (
      <div>
        <h1 id="result">
          {status
            ? status
            : gameStates.every((item) => item != null)
            ? "game over!!!"
            : `Turn of ${current}`}
        </h1>
        <section>
          {gameStates.map((item, index) => {
            return (
              <Square
                key={index}
                handleClick={() => {
                  this.handleClick(index);
                }}
                value={gameStates[index]}
                state={gameStates}
                status={status}
              />
            );
          })}
        </section>
        <div className="footer">
          <p>Tic Tac Toe</p>
          <br />
          <button id="btn" onClick={this.handleReset}>
            Restart Game
          </button>
        </div>
      </div>
    );
  }
}
