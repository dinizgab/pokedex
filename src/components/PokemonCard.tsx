import CardInfos from "./CardInfos";
import {
  BackgroundTypeColours,
  TextDarkTypeColours,
} from "../utils/TypeColours";

interface PokemonCardProps {
  id: number;
  name: string;
  img: string;
  types: Array<string>;
}

export default function PokemonCard(props: PokemonCardProps) {
  return (
    <div
      className={`relative ${
        BackgroundTypeColours[
          props.types[0] as keyof typeof BackgroundTypeColours
        ]
      } w-full h-96 rounded-lg flex justify-center`}
    >
      <img src={props.img} alt={props.name} className="h-full z-40" />
      <CardInfos name={props.name} id={props.id} types={props.types} />

      <h1
        className={`absolute top-2 z-30 text-[6rem] font-poppins font-semibold ${
          TextDarkTypeColours[
            props.types[0] as keyof typeof TextDarkTypeColours
          ]
        }`}
      >
        #{props.id}
      </h1>
    </div>
  );
}
