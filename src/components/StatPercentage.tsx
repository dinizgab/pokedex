import { BackgroundTypeColours } from "../utils/TypeColoursInterfaces";

interface StatPercentageProps {
  typeColor: string;
  statValue: number;
  maxStat: number;
}

export default function StatPercentage(props: StatPercentageProps) {
  
  const percentage: number = Math.ceil(100 * (props.statValue / props.maxStat));
  return (
    <div
      style={{width: `${percentage}%`}}
      className={`h-1 rounded-full ${
        BackgroundTypeColours[
          props.typeColor as keyof typeof BackgroundTypeColours
        ]
      } align-center`}
    ></div>
  );
}
