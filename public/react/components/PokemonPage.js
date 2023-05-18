import React, { useState, useEffect } from 'react';
import apiURL from '../api';

export const PokemonPage = (props) => {

    return (<>
        <h2>{props.pokemonpage.name}</h2>
        <img src={props.pokemonpage.image} width="150" height="150" />
    </>)
}