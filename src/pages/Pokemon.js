import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavigateBeforeOutlinedIcon from "@material-ui/icons/NavigateBeforeOutlined";
import { placeholder } from "../assets/placeholder";
import Hero from "../components/Hero";

const Pokemon = () => {
  const selected = localStorage.getItem("selected")
    ? JSON.parse(localStorage.getItem("selected"))
    : placeholder;

  return (
    <article className="two-columns">
      <section className="column mobile-centered">
        <Link to="/" className="pokemon__back">
          <NavigateBeforeOutlinedIcon />
          <p>Return to Collection</p>
        </Link>
        <Hero img={selected.img} />
      </section>

      <section className="column mobile-centered pokemon__details-section">
        <h1 className="pokemon__name">{selected.name}</h1>
        {selected.id && (
          <Fragment>
            <p className="pokemon__details">
              <strong>Types:</strong> {selected.types.join(", ")}
            </p>
            <p className="pokemon__details">
              <strong>Abilities:</strong> {selected.abilities.join(", ")}
            </p>
          </Fragment>
        )}
      </section>
    </article>
  );
};

export default Pokemon;
