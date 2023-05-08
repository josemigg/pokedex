import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails(props) {
  const { pokemonId } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    axios.get(apiURL).then((response) => {
      const {
        name,
        stats,
        sprites: { front_default },
      } = response.data;
      setPokemonInfo({
        name,
        imageUrl: front_default,
        stats,
      });
    });
  }, []);

  return (
    <div>
      {!pokemonInfo ? (
        <div>Cargando la información del pokémon</div>
      ) : (
        <>
          <img src={pokemonInfo.imageUrl} />
          <strong>{pokemonInfo.name}</strong>
          <h2>Stats</h2>
          {pokemonInfo.stats.map((stat) => (
            <p>
              <b>{stat.stat.name}</b> {stat.base_stat}
            </p>
          ))}
        </>
      )}
    </div>
  );
}

export default PokemonDetails;
