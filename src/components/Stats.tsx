import { usePokemonInfos } from "./PokemonProfile";

export default function Stats() {
  const { stats } = usePokemonInfos();

  return (
    <div className="h-full grid grid-rows-stats-info">
      <h1 className="flex justify-center items-center font-semibold text-2xl">Base stats</h1>
      <div className="flex flex-col">
        {stats.map((stat) => (
          <div className="flex justify-between px-16" key={stat.statName}>
            <span>{stat.statName}</span>
            <span>{stat.baseStat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
