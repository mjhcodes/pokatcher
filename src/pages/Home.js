import React, { useEffect } from "react";
import { setRandomOffset } from "../services/fetchData";
import Button from "../components/Button";

const Home = () => {
  useEffect(() => {
    setRandomOffset();
  }, []);

  return (
    <article>
      <header>
        <h1 className="home__title">
          Pokatchér is the placé to katch Pokémon!
        </h1>
      </header>
      <section>
        <Button to="/pokemon/1" label="SELECT POKÉMON" />
      </section>
      <section>
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
