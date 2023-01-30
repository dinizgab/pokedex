import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { Pokemon } from "../types/Pokemon";
import {
  BackgroundTypeColours,
  TextDarkTypeColours,
} from "../types/TypeColoursInterfaces";

interface PokemonProfileProps {
  pokemonId: string;
}

export default function PokemonProfile(props: PokemonProfileProps) {
  const navigate = useNavigate();

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

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then(({ data }) => {
        const fetchPokemon: Pokemon = {
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
              return { abilityName: obj.ability.name, abilitySlot: obj.slot };
            }
          ),
          animatedSprite:
            data.sprites.versions["generation-v"]["black-white"].animated
              .front_default,
          stats: data.stats.map(
            (stat: { stat: { name: string }; base_stat: number }) => {
              return {
                statName: stat.stat.name,
                statValue: stat.base_stat,
              };
            }
          ),
        };
        setPokemon(fetchPokemon);
      });
  }, [props.pokemonId]);

  return (
      <div className="flex flex-wrap m-auto w-3/4 py-10">
        <div
          className={`rounded-t-xl p-10 ${
            BackgroundTypeColours[
              pokemon.types[0] as keyof typeof BackgroundTypeColours
            ]
          } relative flex z-0 lg:shadow-lg lg:rounded-l-xl lg:rounded-none w-full lg:w-1/2`}
        >
          <img
            className="z-20 w-full"
            src={pokemon.sprite}
            alt={pokemon.name} 
          />
          <span
            className={`absolute text-[1.5rem] lg:text-3xl left-4 top-3 lg:top-6 z-10 font-poppins font-semibold ${
              TextDarkTypeColours[
                pokemon.types[0] as keyof typeof TextDarkTypeColours
              ]
            }`}
          >
            #{pokemon.id}
          </span>
          <span
            className={`absolute text-[2rem] md:text-[4rem] lg:text-[5rem] left-4 top-8 lg:top-8 z-10 font-poppins font-bold ${
              TextDarkTypeColours[
                pokemon.types[0] as keyof typeof TextDarkTypeColours
              ]
            }`}
          >
            {pokemon.name.replace(/^\w/, (c) => c.toUpperCase())}
          </span>
        </div>
        <div className=" bg-[#FEFCFE]/70 rounded-b-xl shadow-lg lg:rounded-none lg:rounded-r-xl w-full lg:w-1/2">
          <div className="py-4 lg:py-6 flex items-center justify-around font-poppins text-sm md:text-xl font-semibold flex-wrap">
            <button onClick={() => navigate(`/pokemon/${props.pokemonId}`)}>
              Biography
            </button>
            <button
              onClick={() => navigate(`/pokemon/${props.pokemonId}/stats`)}
            >
              Stats
            </button>
            <button
              onClick={() => navigate(`/pokemon/${props.pokemonId}/evolutions`)}
            >
              Evolutions
            </button>
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
  );
}

export function usePokemonInfos() {
  return useOutletContext<Pokemon>();
}
