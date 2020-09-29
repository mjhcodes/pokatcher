import React from "react";
import PropTypes from "prop-types";

const Thumbnail = ({
  selected,
  pokemon,
  setCaughtPokemon,
  focusOnConfirm,
  color,
}) => {
  return (
    <button
      onClick={() => {
        setCaughtPokemon(pokemon);
        focusOnConfirm();
      }}
      className={
        selected
          ? "catch__thumbnail catch__thumbnail-active"
          : "catch__thumbnail"
      }
      style={{ border: `4px solid ${color}` }}
    >
      <img src={pokemon.sprites.front_default} alt="Random Pokemon character" />
    </button>
  );
};

Thumbnail.propTypes = {
  selected: PropTypes.bool.isRequired,
  pokemon: PropTypes.object.isRequired,
  setCaughtPokemon: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Thumbnail;
