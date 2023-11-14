import { useEffect, useState } from "react"; 
import Form from "../../Molecules/Form/Form";
import { Generations } from "../../Molecules/Generation/Generations";
import Pokemon from "../../Molecules/Pokemon/Pokemon";
import "./Main.css";

const Main = () => {
  const [generations, setGenerations] = useState([]);
  const [pokemonName, setPokeName] = useState("");
  const [pokemon, setPokemon] = useState({
    types: [],
    height: "",
    name: "",
    sprites: { front_default: "" },
  });

  // Función pokeFetch
  const pokeFetch = (apiUrl) => {
    return fetch(apiUrl).then((response) => {
      if (!response.ok) {
        throw new Error(`La solicitud falló, error: ${response.status}`);
      }
      return response.json();
    });
  };

// Generations Fetch y set Generations
useEffect(() => {
    pokeFetch(`https://pokeapi.co/api/v2/generation`)
      .then((data) => setGenerations(data.results));
  }, []); 

  // Función handleChangeForm
  const handleChangeForm = (e) => {
    const newPokeName = e.target.value.toLowerCase().trim();
    setPokeName(newPokeName);
  };

  // Función handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    pokeFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((data) => setPokemon(data))
      .catch(() => {
        alert("Valor no encontrado en la PokeAPI");
      });
  };

  return (
    <>
      <main>
        <Form onChange={handleChangeForm} onSubmit={handleSubmit} />
        <Generations generations={generations} />
        <Pokemon
          pokemonName={pokemon.name}
          pokemonImg={pokemon.sprites.front_default}
          pokemonHeight={pokemon.height / 10 + " m"}
          pokemonTypes={pokemon.types}
        />
      </main>
    </>
  );
};

export default Main;
