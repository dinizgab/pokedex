import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";
import { PokemonInterface } from "../utils/PokemonInterface";

export default function Home() {
  const [pokemons, setPokemons] = useState<Array<PokemonInterface>>([]);

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
            sprite: data.sprites.front_default,
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
    <>
      <NavBar />
      <div className="w-full grid grid-cols-1 gap-y-12 px-12 pt-12 justify-items-center bg-[#F0EFEE] md:grid-cols-2 md:gap-x-16 lg:grid-cols-3">
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
      <Outlet />
    </>
  );
}