import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <h1>Shopping cart</h1>
        <span className="badge badge-primary m-2">{this.state.count}</span>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default Counter;
