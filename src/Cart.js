import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Scart from "./Scart";

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2
  }
});

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          aria-owns={open ? "simple-popper" : undefined}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleClick}
        >
          Shopping Cart
        </Button>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Scart
            cartProducts={this.props.cartProducts}
            onDelete={this.props.onDelete}
            products={this.props.products}
            cartProducts={this.props.cartProducts}
          />
        </Popover>
      </div>
    );
  }
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cart);
