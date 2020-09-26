import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./parts/Header";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import Catch from "./components/Catch";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokemon/:id">
            <Pokemon />
          </Route>
          <Route exact path="/catch">
            <Catch />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
