import React, { useState } from "react";
import { AddForm } from "./AddForm";
import { Pokemon } from "./Pokemon";

export const PokemonList = ({
  pokemons,
  setpokemons,
  singlePokemon,
  setSinglePokemon,
  fetchPokemons,
}) => {
  const [addbuttonClick, setbuttonClick] = useState(false);

  const handleClick = () => {
    setbuttonClick(!addbuttonClick);
  };

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
        );
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
      <button id="addbutton" onClick={handleClick}>Add Pokemon</button>
      {addbuttonClick ? (
        <AddForm
          setbuttonClick={setbuttonClick}
          pokemons={pokemons}
          setpokemons={setpokemons}
          fetchPokemons={fetchPokemons}
        />
      ) : null}
    </div>
  );
};
