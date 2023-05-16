import React, { useState, useEffect } from 'react';
import { PokemonPageList } from './PokemonPageList';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

    const [pokemonpages, setpokemonpages] = useState([]);

    const fetchPages = async () => {
        try {
            console.log('fetch activated');
            const response = await fetch(`${apiURL}/pokemons`);
            const pokeData = await response.json();
            console.log(pokeData);
            setpokemonpages(pokeData);
        } catch (err) {
            console.log("Oh no an error! ", err)
        }
    }

    useEffect(() => {
        fetchPages();
    }, []);

    console.log("pokemon store");
    return (
        <main>
            <h1>Pokemons Store</h1>
            <p id="quote"> Welcome to our infamous Pokemon E-Commerce site, there's a ton of options to select from.
                We strive to meet the needs of all of our customers and plan to expand our inventory selection in the near future.
            </p>
            <PokemonPageList pokemonpages={pokemonpages} setpokemonpages={setpokemonpages} />
            <button>Add Pokemon!</button>

        </main>
    );
}
