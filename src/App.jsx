import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const getImage = (number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
};

function App() {
  const [pokemons, setPokemons] = useState([]);
  console.log("antes del useEffect");

  useEffect(() => {
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=151";
    console.log("codigo antes de llamada de axios");

    axios.get(apiURL).then((response) => {
      console.log("dentro del then");
      const normalizedResults = response.data.results.map((element, index) => {
        return {
          ...element,
          number: index + 1,
          imageUrl: getImage(index + 1),
        };
      });
      setPokemons(normalizedResults);
    });
    console.log("codigo después de llamada de axios");
  }, []);

  console.log("después del useEffect");

  return (
    <div className="pokemons">
      {pokemons.map((element) => (
        <div className="pokemon" key={element.name}>
          <img src={element.imageUrl} />
          <p>{element.name}</p>
          <p>number: {element.number}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
