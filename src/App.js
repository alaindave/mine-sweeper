import React, { Component } from "react";
import "./App.css";
import { Board } from "./components/board.jsx";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
    this.handleReplay = this.handleReplay.bind(this);

    this.state = {
      randomCell: Math.floor(Math.random() * 9) + 1
    };
  }
  handleStart() {
    //Generate random between 1 and 9
    this.setState({ randomCell: Math.floor(Math.random() * 9) + 1 });
  }

  handleReplay() {
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">Mine sweep</h1>
        <p id="intro" className="font-weight-bolder">
          A mine was planted in one of the cells below.Clear the other cells to
          win.
        </p>
        <Board minedCell={this.state.randomCell} />
        <button className="btn btn-success " onClick={this.handleStart}>
          Start Game
        </button>
        <button className="btn btn-warning " onClick={this.handleReplay}>
          Replay
        </button>
      </div>
    );
  }
}

export default App;
