import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";

interface PokemonInterface {
  id: number;
  name: string;
  sprite: string;
  types: Array<string>;
  principalTypeColor: string;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Array<PokemonInterface>>([]);

  useEffect(() => {
    const endpoints: Array<string> = getPokemons();
    axios.all(
      endpoints.map((endpoint) => {
        axios.get(endpoint).then((res) => {
          let pokemon = {
            id: res.data.id,
            name: res.data.name,
            sprite: res.data.sprites.front_default,
            types: res.data.types.map((obj: { type: { name: string; }; }) => obj.type.name),
            principalTypeColor: res.data.types[0].type.name,
          };
          setPokemons((pokemons) => [pokemon, ...pokemons]);
        });
      })
    );
  }, []);

  function getPokemons(): Array<string> {
    let endpoints: Array<string> = [];

    for (let i: number = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    return endpoints;
  }

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-3 gap-x-16 gap-y-12 px-12 pt-8 justify-items-center bg-slate-300">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprite}
            types={pokemon.types}
          />
        ))}
      </div>
    </>
  );
}
