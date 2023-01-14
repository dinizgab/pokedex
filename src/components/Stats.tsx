import { usePokemonStats } from "./PokemonProfile";


export default function Stats() {
  const { stats } = usePokemonStats();

  return (
    <div className="flex justify-center">
      <h1 className="font-semibold text-2xl">Base stats</h1>
      {console.log(stats)}
    </div>
  );
}

