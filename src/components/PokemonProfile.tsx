import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { capitalizeFist } from "../utils/capitalizeFirst";
import { Pokemon } from "../utils/Pokemon";
import {
  BackgroundTypeColours,
  TextDarkTypeColours,
} from "../utils/TypeColoursInterfaces";

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
    <section className="flex justify-center p-32 bg-[#F0EFEE]">
      <div className="flex w-3/4">
        <div
          className={`rounded-l-xl p-10 ${
            BackgroundTypeColours[
              pokemon.types[0] as keyof typeof BackgroundTypeColours
            ]
          } w-1/2 relative flex justify-start z-0 shadow-lg `}
        >
          <img
            className="z-20 w-full"
            src={pokemon.sprite}
            alt={pokemon.name}
          />
          <span
            className={`absolute text-3xl top-6 z-10 font-poppins font-semibold ${
              TextDarkTypeColours[
                pokemon.types[0] as keyof typeof TextDarkTypeColours
              ]
            }`}
          >
            #{pokemon.id}
          </span>
          <span
            className={`absolute text-[5rem] top-8 z-10 font-poppins font-bold ${
              TextDarkTypeColours[
                pokemon.types[0] as keyof typeof TextDarkTypeColours
              ]
            }`}
          >
            {capitalizeFist(pokemon.name)}
          </span>
        </div>
        <div className="w-1/2 bg-[#FEFCFE]/70 rounded-r-xl shadow-lg grid grid-rows-pokemon-profile">
          <div className="w-full py-8 flex items-center justify-around font-poppins text-xl font-semibold">
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
