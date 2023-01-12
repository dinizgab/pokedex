import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonPage() {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(({ data }) => {
        setPokemon(data);
      });
  }, [pokemonId]);

  return <div>{pokemon.name}</div>;
}
