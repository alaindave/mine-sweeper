import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

export class Board extends Component {
  red_cell = {
    backgroundColor: "red",
    height: "50px",
    width: "50px"
  };

  green_cell = {
    backgroundColor: "important green",
    height: "50px",
    width: "50px"
  };

  styles = this.red_cell;

  cellArray = [];

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicked: 1,
      currentStatus: " ",
      score: 0,
      win: ""
    };
  }

  handleClick(e) {
    // eslint-disable-next-line
    if (this.props.minedCell != e.target.id) {
      e.target.style.backgroundColor = "green";
      this.cellArray.push(e.target.id);
      console.log("cellArray:" + this.cellArray);
      console.log("cellArray length:" + this.cellArray.length);
      this.setState({ score: this.state.score + 1 });

      // eslint-disable-next-line
      if (this.cellArray.length == 8) {
        this.setState({ win: "you won!" });
      }
    } else {
      this.setState({ currentStatus: "You blew up!" });
    }
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <p className="gameStatus">{this.state.currentStatus}</p>
        <div id="firstRow">
          <button id="1" style={this.styles} onClick={this.handleClick}>
            1
          </button>
          <button id="2" style={this.styles} onClick={this.handleClick}>
            2
          </button>
          <button id="3" style={this.styles} onClick={this.handleClick}>
            3
          </button>
        </div>
        <div id="secondRow">
          <button id="4" style={this.styles} onClick={this.handleClick}>
            4
          </button>
          <button id="5" style={this.styles} onClick={this.handleClick}>
            5
          </button>
          <button id="6" style={this.styles} onClick={this.handleClick}>
            6
          </button>
        </div>
        <div id="thirdRow">
          <button id="7" style={this.styles} onClick={this.handleClick}>
            7
          </button>
          <button id="8" style={this.styles} onClick={this.handleClick}>
            8
          </button>
          <button id="9" style={this.styles} onClick={this.handleClick}>
            9
          </button>
          <p id="won" className="font-weight-bolder">
            {this.state.win}
          </p>
          <p id="score">Score:{this.state.score}</p>
        </div>
      </div>
    );
  }
}
