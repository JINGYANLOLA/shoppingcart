import React, { Component } from "react";
import Catalogs from "./Catalogs.js";
import "./App.scss";

import { Typography } from "@material-ui/core";
import Cart from "./Cart";

class App extends Component {
  state = {
    products: [],
    cartProducts: [],
    sizes: [
      { id: 1, value: "XS", checked: false },
      { id: 2, value: "S", checked: false },
      { id: 3, value: "M", checked: false },
      { id: 4, value: "ML", checked: false },
      { id: 5, value: "L", checked: false },
      { id: 6, value: "XL", checked: false },
      { id: 7, value: "XXL", checked: false }
    ],
    selectedSizes: [],
    isSignedIn: false
  };

  componentDidMount() {
    import("./products.json").then(json => {
      this.setState({ products: json.products });
    });
  }
  handleIncrement = product => {
    const products = [...this.state.products]; //... copy products
    const cartProducts = [...this.state.cartProducts];
    if (cartProducts.some(p => p.id === product.id)) {
      product["quantity"] += 1;
    } else {
      product["quantity"] = 1;
      cartProducts.push(product);
    }
    this.setState({ cartProducts, products });
  };
  handleDelete = product => {
    const products = [...this.state.products];
    const cartProducts = this.state.cartProducts.filter(
      p => p.id !== product.id
    );
    product["quantity"] = 0;
    this.setState({ cartProducts, products });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h1 textAlign="center">Wierd T-shirt</h1>
        </div>

        <Catalogs
          products={this.state.products}
          cartProducts={this.state.cartProducts}
          onIncrement={this.handleIncrement}
        />
        <Cart
          products={this.state.products}
          cartProducts={this.state.cartProducts}
          onDelete={this.state.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
