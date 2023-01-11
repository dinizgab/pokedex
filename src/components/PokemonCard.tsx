import CardInfos from "./CardInfos";

interface PokemonCardProps {
  id: number;
  name: string;
  img: string;
  types: Array<{
    type: {
      name: string;
      url: string;
    };
  }>;
  typeColor: string;
}

enum TypeColours {
  NORMAL = "bg-[#a8a878]",
  FIGHTING = "bg-[#c03028]",
  FLYING = "bg-[#a890f0]",
  POISON = "bg-[#a040a0]",
  GROUND = "bg-[#e0c068]",
  ROCK = "bg-[#b8a038]",
  BUG = "bg-[#a8b820]",
  GHOST = "bg-[#705898]",
  STEEL = "bg-[#b8b8d0]",
  FIRE = "bg-[#f08030]",
  WATER = "bg-[#6890f0]",
  GRASS = "bg-[#78c850]",
  ELECTRIC = "bg-[#f8d030]",
  PSYCHIC = "bg-[#f85888]",
  ICE = "bg-[#98d8d8]",
  DRAGON = "bg-[#7038f8]",
  DARK = "bg-[#705848]",
  FAIRY = "bg-[#ee99ac]",
}

export default function PokemonCard(props: PokemonCardProps) {
  return (
    <div
      className={`relative ${TypeColours[props.typeColor as keyof typeof TypeColours]} w-full h-96 flex justify-center bg-cover rounded-lg`}
    >
      <img src={props.img} alt={props.name} className="object-cover" />
      <CardInfos name={props.name} id={props.id} />
    </div>
  );
}
