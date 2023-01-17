import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BackgroundTypeColours } from "../types/TypeColoursInterfaces";

interface EvolutionCardProps {
  pokemonEvolution: string;
  evolutionChainSize: number
}

export default function EvolutionCard(props: EvolutionCardProps) {
  const [evolutionInfos, setEvolutionInfos] = useState({
    id: 0,
    name: "",
    sprite: "",
    type: "",
  });

  useEffect(() => {
    axios.get(props.pokemonEvolution).then(({ data }) => {
      setEvolutionInfos({
        id: data.id,
        name: data.name,
        sprite: data.sprites.other["official-artwork"].front_default,
        type: data.types[0].type.name,
      });
    });
  }, []);

  return (
    <Link className={`${props.evolutionChainSize > 3 ? "w-[11rem] lg:w-1/5" : "w-1/3"} m-3 rounded-full`} to={`/pokemon/${evolutionInfos.id}`}>
      <div
        className={`lg:p-6 rounded-full ${
          BackgroundTypeColours[
            evolutionInfos.type as keyof typeof BackgroundTypeColours
          ]
        }`}
      >
        <img src={evolutionInfos.sprite} alt={evolutionInfos.name}/>
      </div>
      <h1 className="mt-0 lg:mt-[.2rem] text-center text-[1rem] lg:text-xl font-poppins font-semibold tracking-wider">
        #{evolutionInfos.id} {" "}
        {evolutionInfos.name.replace(/^\w/, (c) => c.toUpperCase())}
      </h1>
    </Link>
  );
}
