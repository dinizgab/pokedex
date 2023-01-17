import axios from "axios";
import { useEffect, useState } from "react";
import EvolutionCard from "./EvolutionCard";
import { usePokemonInfos } from "./PokemonProfile";

export default function Evolutions() {
  const { id } = usePokemonInfos();
  const [evolutionsURL, setEvolutionsURL] = useState<string[]>([]);

  const getEvolutions = (chain: any) => {
    let current = chain;
    const urls = [];

    while (current.evolves_to.length > 0) {
      if (current.evolves_to.length === 1) {
        urls.push(`https://pokeapi.co/api/v2/pokemon/${current.species.name}/`);
      } else {
        current.evolves_to.forEach((evol: any) =>
          urls.push(`https://pokeapi.co/api/v2/pokemon/${evol.species.name}/`)
        );
      }

      current = current.evolves_to[0];
    }
    if (urls.length < 3)
      urls.push(`https://pokeapi.co/api/v2/pokemon/${current.species.name}/`);

    setEvolutionsURL(urls);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then(({ data }) => {
        axios
          .get(data.evolution_chain.url)
          .then(({ data }) => getEvolutions(data.chain));
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {evolutionsURL.map((url) => (
        <EvolutionCard
          pokemonEvolution={url}
          evolutionChainSize={evolutionsURL.length}
          key={url}
        />
      ))}
    </div>
  );
}
