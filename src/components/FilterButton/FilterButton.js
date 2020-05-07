import React from "react";
import cl from "./FilterButton.module.css";
import { connect } from "react-redux";
import { handlesFilterSize } from "../../store/reducers/products";

const FilterButton = (props) => {
  const onButtonClick = () => {
    props.handlesFilterSize(props.buttonFilter.value);
  };
  return (
    <button
      onClick={onButtonClick}
      className={`${props.buttonFilter.active ? cl.active : cl.Button}`}
    >
      {props.buttonFilter.value}
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlesFilterSize: (sizes) => dispatch(handlesFilterSize(sizes)),
  };
};

export default connect(null, mapDispatchToProps)(FilterButton);
