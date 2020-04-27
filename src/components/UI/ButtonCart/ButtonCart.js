import React from "react";
import classes from "./ButtonCart.module.css";

const ButtonCart = (props) => {
  const cls = [classes.ButtonCart, classes[props.type]];

  return <button className={cls.join(" ")}>{props.children}</button>;
};

export default ButtonCart;
