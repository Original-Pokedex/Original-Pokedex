import React, { useState, useEffect } from "react";
import { PokemonList } from "./PokemonList";
// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pokemons, setpokemons] = useState([]);
  const [singlePokemon, setSinglePokemon] = useState([]);

  const fetchPokemons = async () => {
    try {
      console.log("fetch activated");
      const response = await fetch(`${apiURL}/pokemons`);
      const pokeData = await response.json();
      console.log(pokeData);
      setSinglePokemon(null);
      setpokemons(pokeData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  console.log("pokemon store");
  return (
    <main>
      <h1>Welcome to the Original Pokedex</h1>
      <PokemonList
        pokemons={pokemons}
        setpokemons={setpokemons}
        singlePokemon={singlePokemon}
        setSinglePokemon={setSinglePokemon}
        fetchPokemons={fetchPokemons}
      />
    </main>
  );
};
