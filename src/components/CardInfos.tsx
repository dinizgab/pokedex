import { TextTypeColours } from "../types/TypeColoursInterfaces";

interface CardInfosProps {
  name: string;
  id: number;
  types: Array<string>;
}

export default function CardInfos(props: CardInfosProps) {
  return (
    <div className="w-100% h-28 z-40 bg-white/[.88] absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center rounded-b-lg">
      <h1 className="text-[#1c1455] text-3xl font-poppins font-bold tracking-wider">
        {props.name.replace(/^\w/, (c) => c.toUpperCase())}
      </h1>
      {props.types.map((type) => (
        <span
          key={type}
          className={` font-semibold text-lg ${
            TextTypeColours[type as keyof typeof TextTypeColours]
          } tracking-widest`}
        >
          {type.toUpperCase()}
        </span>
      ))}
    </div>
  );
}
