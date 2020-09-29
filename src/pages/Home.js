import React, { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import { placeholder } from "../assets/placeholder";
import Button from "../components/Button";
import Card from "../components/Card";

const Home = () => {
  const [activePokemon, setActivePokemon] = useState(placeholder);

  const loadedCollection = localStorage.getItem("my_collection");
  const featuredPokemon = localStorage.getItem("featured_pokemon");

  const myCollection = loadedCollection
    ? JSON.parse(loadedCollection)
    : [placeholder];
  const pendingPokemon = featuredPokemon
    ? JSON.parse(featuredPokemon)
    : myCollection[0];

  const collectionLength = loadedCollection ? myCollection.length : 0;

  const defaultPage =
    loadedCollection && featuredPokemon
      ? myCollection.findIndex((poke) => poke.id === pendingPokemon.id) + 1
      : 1;

  useEffect(() => {
    setActivePokemon(pendingPokemon);
  }, []);

  const handleChange = (e, value) => {
    setActivePokemon(myCollection[value - 1]);
  };

  return (
    <article>
      <header>
        <h1 className="home__title">
          Pokatchér is the placé to katch Pokémon!
        </h1>
      </header>

      <section className="column centered">
        <h2 className="home__collection-title">MY COLLECTION</h2>
        <Card pokemon={activePokemon} />
        <Pagination
          count={collectionLength}
          defaultPage={defaultPage}
          siblingCount={1}
          boundaryCount={1}
          hidePrevButton={collectionLength === 0}
          hideNextButton={collectionLength === 0}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
          size="small"
          style={{ marginTop: "1rem" }}
        />
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
