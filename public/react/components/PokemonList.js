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
  const [addForm, setAddForm] = useState(null);
  const [addButtonClicked, setAddButtonClicked] = useState(false);

  const handleClick = () => {
    console.log("this is being clicked ");
    setAddButtonClicked(true);
    setAddForm(
      <AddForm
        pokemons={pokemons}
        setpokemons={setpokemons}
        fetchPokemons={fetchPokemons}
      />
    );
  };

  return addButtonClicked ? (
    <div>{addForm}</div>
  ) : singlePokemon ? (
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
      <button id="addbutton" onClick={handleClick}>
        Add Pokemon
      </button>
    </div>
  );
};
