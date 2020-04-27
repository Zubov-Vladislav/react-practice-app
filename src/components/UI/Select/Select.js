import React from "react";
import classes from "./Select.module.css";

const Select = (props) => {
  return (
    <div className={classes.Select}>
      <form>
        <label>Order by</label>
        <select> 
          
          <option>Select</option>
          <option>Lowest to highest</option>
        </select>
      </form>
    </div>
  );
};

export default Select;
