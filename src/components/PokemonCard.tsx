import CardInfos from "./CardInfos";

interface PokemonCardProps {
  id: number;
  name: string;
  img: string;
  types: Array<Object>;
}

export default function PokemonCard(props: PokemonCardProps) {
  return (
    <div className="relative bg-[#faf4f5] w-80 h-80 flex bg-cover rounded-lg">
      <img src={props.img} alt={props.name} className="object-cover"/>
      <CardInfos name={props.name} id={props.id}/>
    </div>
  );
}
