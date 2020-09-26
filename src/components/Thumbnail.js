import React from "react";
import PropTypes from "prop-types";

const Thumbnail = ({ url, color }) => (
  <button className="catch__thumbnail" style={{ border: `4px solid ${color}` }}>
    <img src={url} alt="Preview of a random Pokemon character" />
  </button>
);

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Thumbnail;
