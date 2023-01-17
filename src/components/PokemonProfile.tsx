import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { Pokemon } from "../types/Pokemon";
import {
  BackgroundTypeColours,
  TextDarkTypeColours,
} from "../types/TypeColoursInterfaces";

interface PokemonProfileProps {
  pokemonId: string;
}

export default function PokemonProfile(props: PokemonProfileProps) {
  const [pokemon, setPokemon] = useState<Pokemon>({
    id: 0,
    name: "",
    sprite: "",
    types: [],
    height: 0,
    weight: 0,
    abilities: [],
    animatedSprite: "",
    stats: [],
  });

  const getPokemon = () => {
    const fetchPokemon: Pokemon = {
      id: 0,
      name: "",
      sprite: "",
      types: [],
      height: 0,
      weight: 0,
      abilities: [],
      animatedSprite: "",
      stats: [],
    };

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then(({ data }) => {
        (fetchPokemon.id = data.id),
          (fetchPokemon.name = data.name),
          (fetchPokemon.sprite =
            data.sprites.other["official-artwork"].front_default),
          (fetchPokemon.types = data.types.map(
            (obj: { type: { name: string } }) => obj.type.name
          )),
          (fetchPokemon.height = data.height),
          (fetchPokemon.weight = data.weight),
          (fetchPokemon.abilities = data.abilities.map(
            (obj: { ability: { name: string }; slot: number }) => {
              return { abilityName: obj.ability.name, abilitySlot: obj.slot };
            }
          )),
          (fetchPokemon.animatedSprite =
            data.sprites.versions["generation-v"][
              "black-white"
            ].animated.front_default);

        fetchPokemon.stats = data.stats.map(
          (stat: { stat: { name: string }; base_stat: number }) => {
            return {
              statName: stat.stat.name,
              statValue: stat.base_stat,
            };
          }
        );

        setPokemon(fetchPokemon);
      });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <section className="flex p-12 bg-[#F0EFEE] lg:p-32">
      <div className="flex flex-col mx-auto w-full lg:w-2/3 lg:flex-row">
        <div
          className={`rounded-t-xl p-10 ${
            BackgroundTypeColours[
              pokemon.types[0] as keyof typeof BackgroundTypeColours
            ]
          } w-full relative flex justify-start z-0 lg:shadow-lg lg:w-1/2 lg:rounded-l-xl lg:rounded-none`}
        >
          <img
            className="z-20 w-full"
            src={pokemon.sprite}
            alt={pokemon.name}
          />
          <span
            className={`absolute text-[1.5rem] lg:text-3xl left-5 top-3 lg:top-6 z-10 font-poppins font-semibold ${
              TextDarkTypeColours[
                pokemon.types[0] as keyof typeof TextDarkTypeColours
              ]
            }`}
          >
            #{pokemon.id}
          </span>
          <span
            className={`absolute text-[2rem] lg:text-[5rem] left-5 top-8 lg:top-8 z-10 font-poppins font-bold ${
              TextDarkTypeColours[
                pokemon.types[0] as keyof typeof TextDarkTypeColours
              ]
            }`}
          >
            {pokemon.name.replace(/^\w/, (c) => c.toUpperCase())}
          </span>
        </div>
        <div className="w-full bg-[#FEFCFE]/70 rounded-b-xl shadow-lg lg:w-1/2 lg:rounded-none lg:rounded-r-xl">
          <div className="py-4 lg:py-8 flex items-center justify-around font-poppins lg:text-xl font-semibold flex-wrap">
            <Link to={`/pokemon/${props.pokemonId}`}>Biography</Link>
            <Link to={`/pokemon/${props.pokemonId}/stats`}>Stats</Link>
            <Link to={`/pokemon/${props.pokemonId}/evolutions`}>
              Evolutions
            </Link>
          </div>
          <Outlet
            context={{
              id: pokemon.id,
              name: pokemon.name,
              animatedSprite: pokemon.animatedSprite,
              stats: pokemon.stats,
              types: pokemon.types,
              weight: pokemon.weight,
              height: pokemon.height,
              abilities: pokemon.abilities,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export function usePokemonInfos() {
  return useOutletContext<Pokemon>();
}
