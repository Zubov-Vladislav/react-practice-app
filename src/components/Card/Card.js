import React from "react";
import classes from "./Card.module.css";
import { connect } from "react-redux";
import { getProductById } from "../../store/reducers/products";
import{addProductToCart} from "../../store/reducers/cart"

const Card = (props) => {
  return (
    <div className={classes.App}>
      <div className={classes.Pok}>
        <div className={classes.Img}>
          <a href={`/images/products/${props.sku}_1.jpg`}>
            <img
              className={classes.img}
              src={`/images/products/${props.product.sku}_2.jpg`}
              alt={props.style}
            />
          </a>
        </div>
        <div className={classes.Name}>
          <p>{props.product.title}</p>
          <hr></hr>
          <p className={classes.Buy}>
            {props.product.currencyFormat + props.product.price}
          </p>
          <p>
            {"or " +
              props.product.installments +
              " x " +
              props.product.currencyFormat +
              `${(props.product.price / props.product.installments).toFixed(
                2
              )}`}
          </p>
        </div>
        <div className={classes.Button}>
          <button onClick ={()=>props.addProductToCart(props.product.id)}>В корзину</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store, ownProps) => {
  return {
    product: getProductById(store, ownProps.id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (id) => dispatch(addProductToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
