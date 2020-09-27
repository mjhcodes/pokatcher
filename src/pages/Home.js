import React, { useEffect } from "react";
import { setRandomIdArray } from "../services/fetchData";
import { placeholder } from "../assets/placeholder";
import Button from "../components/Button";
import Card from "../components/Card";

const Home = () => {
  useEffect(() => {
    setRandomIdArray();
  }, []);

  const isCollectionLoaded = localStorage.getItem("my_collection");

  const my_collection = isCollectionLoaded
    ? JSON.parse(localStorage.getItem("my_collection"))
    : [placeholder];

  const collectionLength = isCollectionLoaded ? my_collection.length : 0;

  return (
    <article>
      <header>
        <h1 className="home__title">
          Pokatchér is the placé to katch Pokémon!
        </h1>
      </header>

      <section className="column centered">
        <h2 className="home__collection-title">MY COLLECTION</h2>
        {my_collection.map((pokemon, idx) => (
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
