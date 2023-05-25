import React, { useState, useEffect } from "react";
import { PokemonDetails } from "./PokemonDetails";
import apiURL from "../api";

export const Pokemon = (props) => {
  const handleClick = async (id) => {
    const res = await fetch(`${apiURL}/pokemons/${id}`);
    const data = await res.json();
    props.setSinglePokemon([data]);
  };

  return props.singlePokemon ? (
    <>
      <PokemonDetails props={props} />
    </>
  ) : (
    <div
      id="single-pokemon"
      onClick={() => {
        handleClick(props.pokemon.id);
      }}
    >
      <h2>{props.pokemon.name}</h2>
      <img src={props.pokemon.image} width="150" height="150" />
    </div>
  );
};
