interface PokemonCardProps {
  id: number;
  name: string;
  img: string;
  types: Array<Object>;
}

export default function PokemonCard(props: PokemonCardProps) {
  return (
    <div className="bg-[#faf4f5] w-80 h-80 pt-6 flex justify-center">
      <h1 className="text-xl">{props.name}</h1>
    </div>
  );
}
