import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonListItem from './PokemonListItem';
import './App.css';

const getImage = (number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
};

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  console.log('hola');

  useEffect(() => {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    axios.get(apiURL).then((response) => {
      const normalizedResults = response.data.results.map((element, index) => {
        return {
          ...element,
          number: index + 1,
          imageUrl: getImage(index + 1)
        };
      });
      setPokemons(normalizedResults);
    });
  }, []);

  return (
    <div className='pokemons'>
      {pokemons.map((element) => (
        <PokemonListItem key={element.name} imageUrl={element.imageUrl} name={element.name} number={element.number} />
      ))}
    </div>
  );
}

export default PokemonList;
