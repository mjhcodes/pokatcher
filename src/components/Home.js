import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <Link to="/pokemon/1">SELECT POKEMON</Link>
      <Link to="/catch">CATCH POKEMON</Link>
    </Fragment>
  );
};

export default Home;
