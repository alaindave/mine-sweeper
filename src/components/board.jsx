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
    backgroundColor: "green",
    height: "50px",
    width: "50px"
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      styles: this.red_cell,
      clicked: 1,
      currentStatus: "Keep playing..."
    };
  }

  handleClick(e) {
    this.setState({ clicked: e.target.id });
    if (this.props.minedCell != e.target.id) {
      //this.setState({ styles: this.green_cell });
      e.target.style.backgroundColor = "green";
    } else {
      this.setState({ currentStatus: "You blew up!" });
    }
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <p>Cell number {this.props.minedCell} is mined</p>
        <p>You clicked {this.state.clicked}</p>
        <p>{this.state.currentStatus}</p>
        <div id="firstRow">
          <button id="1" style={this.state.styles} onClick={this.handleClick}>
            1
          </button>
          <button id="2" style={this.state.styles} onClick={this.handleClick}>
            2
          </button>
          <button id="3" style={this.state.styles} onClick={this.handleClick}>
            3
          </button>
        </div>
        <div id="secondRow">
          <button id="4" style={this.state.styles} onClick={this.handleClick}>
            4
          </button>
          <button id="5" style={this.state.styles} onClick={this.handleClick}>
            5
          </button>
          <button id="6" style={this.state.styles} onClick={this.handleClick}>
            6
          </button>
        </div>
        <div id="thirdRow">
          <button id="7" style={this.state.styles} onClick={this.handleClick}>
            7
          </button>
          <button id="8" style={this.state.styles} onClick={this.handleClick}>
            8
          </button>
          <button id="9" style={this.state.styles} onClick={this.handleClick}>
            9
          </button>
        </div>
      </div>
    );
  }
}
