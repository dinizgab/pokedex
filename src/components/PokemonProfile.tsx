import { AbilityInterface } from "../utils/AbilityInterface";
import { BackgroundTypeColours } from "../utils/TypeColoursInterfaces";

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
  return (
    <div className="flex p-12 bg-[#F0EFEE]">
      <img
        className={` ${
          BackgroundTypeColours[
            props.types[0] as keyof typeof BackgroundTypeColours
          ]
        }
        w-1/2
        `}
        src={props.sprite}
        alt={props.name}
      />
      <div className="w-1/2 bg-[#FEFCFE]/70">
        asdfasdf
      </div>
    </div>
  );
}
