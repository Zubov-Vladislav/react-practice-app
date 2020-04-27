import React from "react";
import classes from "./ButtonSize.module.css";

const ButtonSize = (props) => {
  const cls = [classes.ButtonSize, classes[props.type]];

  return <button className={cls.join(" ")}>{props.children}</button>;
};

export default ButtonSize;