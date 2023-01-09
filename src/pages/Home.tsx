import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";

interface PokemonInterface {
  name: string;
  url: string;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Array<PokemonInterface>>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => setPokemons(res.data.results));
  }, []);

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-x-4 gap-y-4 px-8">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </>
  );
}
