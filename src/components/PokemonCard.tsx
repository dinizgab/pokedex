import CardInfos from "./CardInfos";
import {
  BackgroundTypeColours,
  TextDarkTypeColours,
  ShadowTypeColours,
} from "../utils/TypeColours";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  id: number;
  name: string;
  img: string;
  types: Array<string>;
}

export default function PokemonCard(props: PokemonCardProps) {
  return (
    <Link className="w-full" to={`pokemon/${props.id}`}>
      <div
        className={`relative ${
          BackgroundTypeColours[
            props.types[0] as keyof typeof BackgroundTypeColours
          ]
        } h-96 rounded-lg flex justify-center transition ease-in-out delay-150 hover:-translate-y-2 duration-300 shadow-lg ${
          ShadowTypeColours[props.types[0] as keyof typeof ShadowTypeColours]
        }`}
      >
        <img
          src={props.img}
          alt={props.name}
          className="h-full z-40 hover:scale-105 duration-200"
        />
        <CardInfos name={props.name} id={props.id} types={props.types} />

        <h1
          className={`absolute top-2 z-30 text-[5rem] sm:text-[6rem] font-poppins font-semibold ${
            TextDarkTypeColours[
              props.types[0] as keyof typeof TextDarkTypeColours
            ]
          }`}
        >
          #{props.id}
        </h1>
      </div>
    </Link>
  );
}
