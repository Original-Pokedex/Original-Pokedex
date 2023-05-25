import React, { useState, useEffect } from "react";
import { PokemonPageList } from "./PokemonPageList";
// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pokemonpages, setpokemonpages] = useState([]);

  const fetchPages = async () => {
    try {
      console.log("fetch activated");
      const response = await fetch(`${apiURL}/pokemons`);
      const pokeData = await response.json();
      console.log(pokeData);
      setpokemonpages(pokeData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  console.log("pokemon store");
  return (
    <main>
      <h1>Welcome to the Original Pokedex</h1>
      <PokemonPageList
        pokemonpages={pokemonpages}
        setpokemonpages={setpokemonpages}
      />
      <button>Add Pokemon</button>
    </main>
  );
};
