import React, { Component } from "react";
import "./App.css";
import { Board } from "./components/board.jsx";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
    this.state = {
      randomCell: 1
    };
  }
  handleStart() {
    //Generate random between 1 and 9

    this.setState({ randomCell: Math.floor(Math.random() * 9) + 1 });
  }

  render() {
    return (
      <div className="App">
        <h1>Mine sweep</h1>
        <Board minedCell={this.state.randomCell} />
        <button onClick={this.handleStart}>Start Game</button>
      </div>
    );
  }
}

export default App;
