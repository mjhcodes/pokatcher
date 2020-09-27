import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavigateBeforeOutlinedIcon from "@material-ui/icons/NavigateBeforeOutlined";
import { placeholder } from "../assets/placeholder";
import Hero from "../components/Hero";

const Pokemon = () => {
  let featured_pokemon = localStorage.getItem("featured_pokemon");
  featured_pokemon = featured_pokemon
    ? JSON.parse(featured_pokemon)
    : placeholder;

  const types = featured_pokemon.types.map((type) => type.type.name);
  const abilities = featured_pokemon.abilities.map(
    (ability) => ability.ability.name
  );

  return (
    <article className="two-columns">
      <section className="column mobile-centered">
        <Link to="/" className="pokemon__back">
          <NavigateBeforeOutlinedIcon />
          <p>Return to Collection</p>
        </Link>
        <Hero img={featured_pokemon.sprites.front_default} />
      </section>

      <section className="column mobile-centered pokemon__details-section">
        <h1 className="pokemon__name">{featured_pokemon.name}</h1>
        {featured_pokemon.id && (
          <Fragment>
            <p className="pokemon__details">
              <strong>Types:</strong> {types.join(", ")}
            </p>
            <p className="pokemon__details">
              <strong>Abilities:</strong> {abilities.join(", ")}
            </p>
          </Fragment>
        )}
      </section>
    </article>
  );
};

export default Pokemon;
