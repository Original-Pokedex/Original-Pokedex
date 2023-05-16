import React from 'react';
import { PokemonPage } from './PokemonPage';

export const PokemonPageList = ({pokemonpages, setpokemonpages}) => {
	return (<>
		{
			pokemonpages.map((pokemonpage, idx) => {
				return <PokemonPage 
				pokemonpage={pokemonpage} setpokemonpages={setpokemonpages} key={idx}
				/>
			})
		}
	</>)
} 