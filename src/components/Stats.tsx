import { usePokemonInfos } from "./PokemonProfile";
import StatPercentage from "./StatPercentage";

export default function Stats() {
  const { stats, types } = usePokemonInfos();
  const level: number = 100;
  const iv: number = 31;
  const ev: number = 252;

  const maxStats: Array<{ statName: string; statValue: number }> = [];

  let statsTotal: number = 0;

  stats!.forEach((stat) => {
    statsTotal += stat.statValue;
  });

  stats!.forEach((stat) => {
    if (stat.statName === "hp") {
      maxStats.push({
        statName: stat.statName,
        statValue:
          ((iv + 2 * stat.statValue + ev / 4) * level) / 100 + 10 + level,
      });
    } else {
      maxStats.push({
        statName: stat.statName,
        statValue: ((iv + 2 * stat.statValue + ev / 4) * level) / 100 + 5,
      });
    }
  });

  stats!.length < 7
    ? stats!.push({ statName: "Total", statValue: statsTotal })
    : null;

  return (
    <div className=" flex flex-col">
      <h1 className="flex justify-center items-center font-semibold text-2xl">
        Base stats
      </h1>
      <div className="h-1/2 flex flex-wrap p-4">
        {stats!.map((stat, index) => ( 
          <div
            className="grid grid-cols-4 lg:px-16 font-poppins text-[#6b6d6e] w-full"
            key={stat.statName}
          >
            <div className="flex items-center">
              {stat.statName
                .replace(/-/g, " ")
                .replace(/special/g, "sp.")
                .replace(/^\w/, (c) => c.toUpperCase())}
            </div>

            <div className="flex items-center justify-self-center">{stat.statValue}</div>

            <div className="flex items-center">
              <StatPercentage typeColor={types[0]} statValue={stat.statValue} maxStat={maxStats[index].statValue}/>
            </div>

            <div className="flex items-center justify-self-center">
              {maxStats[index].statValue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
