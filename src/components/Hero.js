import React from "react";
import PropTypes from "prop-types";

const Hero = ({ img }) => (
  <div className="pokemon__hero">
    <img src={img} alt="Featured Pokemon character" />
  </div>
);

Hero.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Hero;
