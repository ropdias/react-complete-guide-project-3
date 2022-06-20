import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"} // If typs is undefined 'button' will be used
      className={classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
