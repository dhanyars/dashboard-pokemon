import React from "react";
import "./App.scss";
import { Pokemon, PokemonDetails } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Pokemon}></Route>
        <Route path="/PokemonDetails" component={PokemonDetails}></Route>
      </Router>
    </div>
  );
}

export default App;
