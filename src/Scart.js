import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SingleCard from "./SingleCard";
import SingleCardInCart from "./SingleCardInCart";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    margin: "0 auto"
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  card: {}
});
class Scart extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    spacing: "16"
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    const { cartProducts, addToCart } = this.props;

    return (
      <Grid container className={classes.root} spacing={24}>
        {cartProducts.map(p => (
          <Grid item xs={12} className={classes.card}>
            <SingleCardInCart
              product={p}
              key={p.id}
              onDelete={this.props.onDelete}
              products={this.props.products}
              cartProducts={cartProducts}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

Scart.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Scart);
