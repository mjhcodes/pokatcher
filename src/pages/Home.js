import React, { useEffect } from "react";
import { setRandomOffset } from "../services/fetchData";
import { placeholder } from "../assets/placeholder";
import Button from "../components/Button";
import Card from "../components/Card";

const Home = () => {
  useEffect(() => {
    setRandomOffset();
  }, []);

  const isCollection = localStorage.getItem("collection");

  const collection = isCollection
    ? localStorage.getItem("collection")
    : [placeholder];

  const collectionLength = isCollection ? collection.length : 0;

  return (
    <article>
      <header>
        <h1 className="home__title">
          Pokatchér is the placé to katch Pokémon!
        </h1>
      </header>

      <section className="column centered">
        <h2 className="home__collection-title">MY COLLECTION</h2>
        {collection.map((pokemon, idx) => (
          <Card key={`pokemon_card_${idx}`} pokemon={pokemon} />
        ))}
        <p className="home__collection-count">
          There are {collectionLength} Pokemon in your collection
        </p>
      </section>

      <section className="home__instructions-section">
        <p className="home__instructions">
          To view a Pokemon from your collection in more detail, click its image
          above, or, click the button below to catch some more!
        </p>
      </section>

      <section>
        <Button to="/catch" label="CATCH POKÉMON" />
      </section>
    </article>
  );
};

export default Home;
