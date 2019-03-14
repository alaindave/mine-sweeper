import React, { Component } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const style = {
  backgroundColor: red
};

export class Board extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <h1>Boards</h1>
        <div id="firstRow">
          <div id="cell1" className="cell" />
          <div id="cell2" className="cell" />
          <div id="cell3" className="cell" />
        </div>
        <div id="secondRow">
          <div id="cell4" className="cell" />
          <div id="cell5" className="cell" />
          <div id="cell6" className="cell" />
        </div>
        <div id="thirdRow">
          <div id="cell7" className="cell" />
          <div id="cell8" className="cell" />
          <div id="cell9" className="cell" />
        </div>
      </div>
    );
  }
}
