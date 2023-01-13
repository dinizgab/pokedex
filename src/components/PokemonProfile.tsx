import { AbilityInterface } from "../utils/AbilityInterface";
import {
  BackgroundTypeColours,
  ShadowTypeColours,
  TextDarkTypeColours,
} from "../utils/TypeColoursInterfaces";

interface PokemonProfileProps {
  id: number;
  name: string;
  sprite: string;
  types: Array<string>;
  height: number;
  weight: number;
  abilities: Array<AbilityInterface>;
}

export default function PokemonProfile(props: PokemonProfileProps) {
  const capitalizeFist = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <section className="flex pt-12 p-32 bg-[#F0EFEE]">
      <div
        className={`rounded-l-xl p-10 ${
          BackgroundTypeColours[
            props.types[0] as keyof typeof BackgroundTypeColours
          ]
        } w-1/2 relative flex justify-start z-0 shadow-lg `}
      >
        <img className="z-20 w-full" src={props.sprite} alt={props.name} />
        <span
          className={`absolute text-3xl top-6 z-10 font-poppins font-semibold ${
            TextDarkTypeColours[
              props.types[0] as keyof typeof TextDarkTypeColours
            ]
          }`}
        >
          #{props.id}
        </span>
        <span
          className={`absolute text-[5rem] top-8 z-10 font-poppins font-bold ${
            TextDarkTypeColours[
              props.types[0] as keyof typeof TextDarkTypeColours
            ]
          }`}
        >
          {capitalizeFist(props.name)}
        </span>
      </div>

      <div className="w-1/2 bg-[#FEFCFE]/70 rounded-r-xl shadow-lg "></div>
    </section>
  );
}
