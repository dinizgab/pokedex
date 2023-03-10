import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";
import { Pokemon } from "../types/Pokemon";

export default function Home() {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);

  const getPokemons = () => {
    let endpoints: Array<string> = [];

    for (let i: number = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(
      endpoints.map((endpoint) => {
        axios.get(endpoint).then(({ data }) => {
          let pokemon = {
            id: data.id,
            name: data.name,
            sprite: data.sprites.other["official-artwork"].front_default,
            types: data.types.map(
              (obj: { type: { name: string } }) => obj.type.name
            ),
          };
          setPokemons((pokemons) => [pokemon, ...pokemons]);
        });
      })
    );
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      <NavBar isProfile={false} />
      <section className="w-full flex flex-wrap justify-center gap-y-12 p-8 justify-items-center bg-[#F0EFEE] gap-x-16 ">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprite}
            types={pokemon.types}
          />
        ))}
      </section>
    </div>
  );
}
