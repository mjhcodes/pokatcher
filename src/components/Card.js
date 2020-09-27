import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ pokemon }) => {
  const { id, name, img } = pokemon;
  return (
    <div className={id ? "card" : "card card-disabled"}>
      <Link
        to={id ? `/pokemon/${id}` : "#"}
        onClick={() =>
          localStorage.setItem("selected", JSON.stringify(pokemon))
        }
      >
        <img src={img} alt="Pokemon character from user's collection" />
        <div className="card__label">{name}</div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Card;
