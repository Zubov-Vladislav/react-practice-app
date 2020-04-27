import React from "react";
import classes from "./ButtonSum.module.css";

const ButtonSum = (props) => {
  const cls = [classes.ButtonSum, classes[props.type]];

  return (
  <div>
    <button className={cls.join(" ")}>-</button>
    <button className={cls.join(" ")}>+</button>
    </div>
  )
};

export default ButtonSum;