import { AbilityInterface } from "../utils/AbilityInterface";
import { BackgroundTypeColours } from "../utils/TypeColours";

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
    <div className="flex py-12">
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
