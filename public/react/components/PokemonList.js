import React from "react";
import { Pokemon } from "./Pokemon";

export const PokemonList = ({ pokemons, setpokemons, singlePokemon, setSinglePokemon }) => {
console.log(pokemons)
  return singlePokemon ? (
    <div>
      {singlePokemon.map((pokemon, idx) => {
        return (
          <Pokemon 
            pokemon={pokemon}
            setpokemons={setpokemons}
            singlePokemon={singlePokemon}
            setSinglePokemon={setSinglePokemon}
            key={idx}
          />
        )
      })}
    </div>
  ) : (
    <div className="pokemon-list">
      {pokemons.map((pokemon, idx) => {
        return (
          <Pokemon
            pokemon={pokemon}
            setpokemons={setpokemons}
            setSinglePokemon={setSinglePokemon}
            key={idx}
          />
        );
      })}
    </div>
  );
};
