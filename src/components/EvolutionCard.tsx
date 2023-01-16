import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BackgroundTypeColours } from "../types/TypeColoursInterfaces";

interface EvolutionCardProps {
  pokemonEvolution: string;
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
      console.log(data);
      setEvolutionInfos({
        id: data.id,
        name: data.name,
        sprite: data.sprites.other["official-artwork"].front_default,
        type: data.types[0].type.name,
      });
    });
  }, []);

  return (
    <Link className="w-1/3 m-4 rounded-full" to={`/pokemon/${evolutionInfos.id}`}>
      <div
        className={`p-6 rounded-full ${
          BackgroundTypeColours[
            evolutionInfos.type as keyof typeof BackgroundTypeColours
          ]
        }`}
      >
        <img src={evolutionInfos.sprite} alt={evolutionInfos.name} />
      </div>
      <h1 className="mt-[.2rem] text-center text-xl font-poppins font-semibold tracking-wider">
        #{evolutionInfos.id}{"\n"}
        {evolutionInfos.name.replace(/^\w/, (c) => c.toUpperCase())}
      </h1>
    </Link>
  );
}
