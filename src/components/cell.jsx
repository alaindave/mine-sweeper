import React, { Component } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export class Cell extends Component {
  state = {};
  render() {
    return (
      <div>
        <button id="cell" className="btn btn-primary">
          Mine
        </button>
      </div>
    );
  }
}
