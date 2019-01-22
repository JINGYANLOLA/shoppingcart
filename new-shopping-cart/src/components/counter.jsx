import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };
  render() {
    return (
      <div>
        <h1>Shopping cart</h1>
        <span style={this.styles}>{this.state.count}</span>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}
export default Counter;
