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
  typeColor: string
}

export default function PokemonCard(props: PokemonCardProps) {
  return (
    <div
      className={`relative bg-${props.typeColor} w-80 h-80 flex bg-cover rounded-lg`}
    >
      <img src={props.img} alt={props.name} className="object-cover" />
      <CardInfos name={props.name} id={props.id} />
    </div>
  );
}
