import React, { useState, useEffect } from 'react';
import apiURL from '../api';

export const PokemonPage = (props) => {

    return (<>
        <h3>{props.pokemonpage.name}</h3>
    </>)
}