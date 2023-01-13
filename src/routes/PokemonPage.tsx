import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import PokemonProfile from "../components/PokemonProfile";
import { PokemonInterface } from "../utils/PokemonInterface";

export default function PokemonPage() {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState<PokemonInterface>({
    id: 0,
    name: "",
    sprite: "",
    types: [],
    height: 0,
    weight: 0,
    abilities: [],
  });

  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(({ data }) => {
        let pokemon = {
          id: data.id,
          name: data.name,
          sprite: data.sprites.other["official-artwork"].front_default,
          types: data.types.map(
            (obj: { type: { name: string } }) => obj.type.name
          ),
          height: data.height,
          weight: data.weight,
          abilities: data.abilities.map(
            (obj: { ability: { name: string }; slot: number }) => {
              return { string: obj.ability.name, number: obj.slot };
            }
          ),
        };

        setPokemon(pokemon);
      });
  };

  useEffect(() => {
    getPokemon();
  }, [pokemonId]);

  return (
    <>
      <NavBar isProfile={true} />
      <PokemonProfile
        id={pokemon.id}
        name={pokemon.name}
        sprite={pokemon.sprite}
        types={pokemon.types}
        height={pokemon.height!}
        weight={pokemon.height!}
        abilities={pokemon.abilities!}
      />
    </>
  );
}
