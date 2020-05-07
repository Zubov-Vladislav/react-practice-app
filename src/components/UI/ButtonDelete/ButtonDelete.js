import React from "react";
import classes from "./ButtonDelete.module.css";

const ButtonDelete = (props) => {
  const cls = [classes.ButtonDelete, classes[props.type]];

  return (
  <div className={cls.join(" ")}>
      <button
      onClick = {props.deleteProductFromCart}
      onMouseOver = {props.deleteStyle}
      className={cls.join(" ")}>X</button>
    </div>
  )
};

export default ButtonDelete;