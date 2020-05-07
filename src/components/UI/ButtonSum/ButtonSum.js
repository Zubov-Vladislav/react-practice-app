import React from "react";
import classes from "./ButtonSum.module.css";

const ButtonSum = (props) => {
  const cls = [classes.ButtonSum, classes[props.type]];
  



  return (
  <div>
    <button 
    onClick = {props.CountNumMinus}
    //передать надо
    className={cls.join(" ")}>
      -
      </button>
    <button 
    onClick = {props.CountNumPlus}
    className={cls.join(" ")}>
      +
      </button>
    </div>
  )
};

export default ButtonSum;