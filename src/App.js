import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import Catch from "./components/Catch";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
