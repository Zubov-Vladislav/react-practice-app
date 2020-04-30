import React from "react";
import classes from "./ButtonDelete.module.css";

const ButtonDelete = (props) => {
  const cls = [classes.ButtonDelete, classes[props.type]];

 

  return (
  <div className={cls.join(" ")}>
      <button
      onClick = {props.deleteProductFromCart}
      className={cls.join(" ")}>X</button>
      {/* <img src={`/images/sprite_delete-icon.png`}/> */}
    </div>
  )
};

export default ButtonDelete;