import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
const styles = {
  card: {
    maxWidth: 500
  },
  media: {
    height: 600
  }
};
class SingleCardInCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Card className="classes.card">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require(`./products/${this.props.product.sku}_1.jpg`)}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography font-size={18}>{this.props.product.title}</Typography>
            <Typography textAlign="center">
              Price:
              {this.props.product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Fab color="primary" aria-label="Add" className={classes.fab}>
            <DeleteIcon
              onClick={() => this.props.onDelete(this.props.product)}
            />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}
SingleCardInCart.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SingleCardInCart);
