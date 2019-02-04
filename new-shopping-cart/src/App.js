import React, { Component } from "react";
import Catalogs from "./Catalogs.js";
import "./App.scss";
import firebase from "firebase";
import { Typography } from "@material-ui/core";

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
    const products = [...this.state.products];
    const cartProducts = [...this.state.cartProducts];
    if (cartProducts.some(p => p.id === product.id)) {
      product["quantity"] += 1;
    } else {
      product["quantity"] = 1;
      cartProducts.push(product);
    }
    this.setState({ cartProducts, products });
  };

  getPagedData = () => {
    const { selectedSizes, products: allproducts } = this.state;

    const filtered =
      selectedSizes.length > 0
        ? allproducts.filter(p =>
            p.availableSizes.some((s, i) =>
              selectedSizes.some((c, j) => c.value === s)
            )
          )
        : allproducts;
    return { totalCount: filtered.length, data: filtered };
  };

  render() {
    const { totalCount, data: products } = this.getPagedData();
    return (
      <React.Fragment>
        <div>
          <h1 textAlign="center">Catalog</h1>
        </div>

        <Catalogs
          products={products}
          cartProducts={this.state.cartProducts}
          onIncrement={this.handleIncrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
