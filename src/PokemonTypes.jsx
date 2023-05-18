import { useEffect, useState } from "react";
import axios from "axios";
import PokemonListItem from "./PokemonListItem";
import "./App.css";

const getImage = (number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
};

// con isLoading y gestión de errores
function PokemonTypes2() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiURL = "https://pokeapi.co/api/v2/type";
    setIsLoading(true);

    axios
      .get(apiURL)
      .then((response) => {
        const normalizedResults = response.data.results.map(
          (element, index) => {
            return {
              ...element,
              number: index + 1,
              imageUrl: getImage(index + 1),
            };
          }
        );
        setPokemons(normalizedResults);
        setIsLoading(false);
      })
      .catch(() => {
        setError("No se ha podido cargar la información de los pokémons");
        setIsLoading(false);
      });
    console.log("codigo después de llamada de axios");
  }, []);

  console.log("después del useEffect");

  return (
    <div className="pokemons">
      {isLoading && <h1>Loading</h1>}
      {error && <p>{error}</p>}
      {pokemons.map((element) => (
        <div key={element.name}>{element.name}</div>
      ))}
    </div>
  );
}

// gestión de errores, sin loading
function PokemonTypes() {
  const [pokemons, setPokemons] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiURL = "https://pokeapi.co/api/v2/type";

    axios
      .get(apiURL)
      .then((response) => {
        const normalizedResults = response.data.results.map(
          (element, index) => {
            return {
              ...element,
              number: index + 1,
              imageUrl: getImage(index + 1),
            };
          }
        );
        setPokemons(normalizedResults);
      })
      .catch(() => {
        setError("No se ha podido cargar la información de los pokémons");
      });
    console.log("codigo después de llamada de axios");
  }, []);

  console.log("después del useEffect");
  const showList = pokemons !== null && pokemons.length > 0;
  const showEmptyMessage = pokemons !== null && pokemons.length;

  return (
    <div className="pokemons">
      {error && <p>{error}</p>}
      {pokemons === null && <h1>Loading</h1>}
      {showEmptyMessage && <p>No hay tipos de pokemons</p>}
      {showList &&
        pokemons.map((element) => <div key={element.name}>{element.name}</div>)}
    </div>
  );
}

// Opción si estoy segura 100% no fake de que la api devuelve resultados.
// y no quiero gestionar estado error
function PokemonTypes1() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=151";
    console.log("codigo antes de llamada de axios");
    setTimeout(() => {
      axios.get(apiURL).then((response) => {
        console.log("dentro del then");
        const normalizedResults = response.data.results.map(
          (element, index) => {
            return {
              ...element,
              number: index + 1,
              imageUrl: getImage(index + 1),
            };
          }
        );
        setPokemons(normalizedResults);
      });
    }, 5000);
    console.log("codigo después de llamada de axios");
  }, []);

  console.log("después del useEffect");

  return (
    <div className="pokemons">
      {pokemons.length > 0 ? (
        pokemons.map((element) => (
          <PokemonListItem
            key={element.name}
            imageUrl={element.imageUrl}
            name={element.name}
            number={element.number}
          />
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default PokemonTypes;
