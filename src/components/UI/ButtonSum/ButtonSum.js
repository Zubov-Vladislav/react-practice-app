import React from "react";
import classes from "./ButtonSum.module.css";

const ButtonSum = (props) => {
  const cls = [classes.ButtonSum, classes[props.type]];

const BtnSum = () => {
const number = 1;
props.CountNum(number) 

}

const BtnMinus = () => {
  const number = -1;
  props.CountNum(number) 
}


  return (
  <div>
    <button 
    onClick = {BtnSum}
    className={cls.join(" ")}>
      -
      </button>
    <button 
    onClick = {BtnMinus}
    className={cls.join(" ")}>
      +
      </button>
    </div>
  )
};

export default ButtonSum;