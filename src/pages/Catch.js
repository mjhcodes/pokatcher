import React, { useState, useEffect } from "react";
import { getRandomPokemons } from "../services/fetchData";
import { isObjEmpty } from "../utils/util";
import Thumbnail from "../components/Thumbnail";
import LoadingImages from "../components/LoadingImages";
import NameModal from "../components/NameModal";
import Button from "../components/Button";

const mapIdxToColor = {
  0: "#bf0449",
  1: "#03a6a6",
  2: "#f2d98d",
};

const Catch = () => {
  const [pokemons, setPokemons] = useState([]);
  const [caughtPokemon, setCaughtPokemon] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  const my_collection = localStorage.getItem("my_collection")
    ? JSON.parse(localStorage.getItem("my_collection"))
    : [];

  useEffect(() => {
    getRandomPokemons(setPokemons);
  }, []);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <article>
      <header>
        <h1 className="catch__title">
          We've stumbled upon ten Pokemon in the wild!
        </h1>
        <h2 className="catch__subtitle">
          Quick! Click on one to catch it before they disappear!
        </h2>
      </header>

      <section className="catch__pokemons">
        {pokemons.length === 0 || !pokemons ? (
          <LoadingImages />
        ) : (
          pokemons.map((pokemon, idx) => {
            return (
              <Thumbnail
                key={`pokemon_thumbnail_${idx}`}
                selected={caughtPokemon.name === pokemon.name}
                pokemon={pokemon}
                setCaughtPokemon={setCaughtPokemon}
                color={mapIdxToColor[idx % 3]}
              />
            );
          })
        )}
      </section>

      <section>
        <span style={{ cursor: "not-allowed" }}>
          <Button
            onClick={handleModalOpen}
            disabled={isObjEmpty(caughtPokemon)}
            label="CONFIRM CATCH"
            to="#"
          />
        </span>

        <NameModal
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
          my_collection={my_collection}
          caughtPokemon={caughtPokemon}
        />
      </section>
    </article>
  );
};

export default Catch;
