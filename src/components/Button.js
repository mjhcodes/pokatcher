import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button as MUButton } from "@material-ui/core";
import { useStyles } from "../assets/styles";

const Button = ({ id, onClick, disabled, to, label }) => {
  const { button } = useStyles();
  return (
    <MUButton
      id={id}
      onClick={onClick}
      disabled={disabled}
      to={to}
      className={button}
      component={Link}
      variant="contained"
      color="secondary"
    >
      {label}
    </MUButton>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
