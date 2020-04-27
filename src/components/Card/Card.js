import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.App}>
      <div className={classes.Pok}>
        <div className={classes.Img}>
          <a href={`/images/products/${props.sku}_1.jpg`}>
            <img
              className={classes.img}
              src={`/images/products/${props.answer.sku}_2.jpg`}
              alt={props.style}
            />
          </a>
        </div>
        <div className={classes.Name}>
          <p>{props.answer.title}</p>
          <hr></hr>
          <p className={classes.Buy}>
            {props.answer.currencyFormat + props.answer.price}
          </p>
          <p>
            {"or " +
              props.answer.installments +
              " x" +
              props.answer.currencyFormat +
              `${(props.answer.price / props.answer.installments).toFixed(2)}`}
          </p>
        </div>
        <div className={classes.Button}>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
