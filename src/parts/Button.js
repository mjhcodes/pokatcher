import React from "react";
import { Link } from "react-router-dom";
import { Button as MUButton } from "@material-ui/core";
import { useStyles } from "../assets/styles";

const Button = (props) => {
  const { button } = useStyles();
  return (
    <MUButton
      component={Link}
      to={props.to}
      className={button}
      variant="contained"
      color="secondary"
    >
      {props.label}
    </MUButton>
  );
};

export default Button;
