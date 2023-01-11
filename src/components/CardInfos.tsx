interface CardInfosProps {
  name: string;
  id: number;
  types: Array<string>;
}

export default function CardInfos(props: CardInfosProps) {
  let capitalizeFist = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="w-100% h-28 z-40 bg-white/90 absolute bottom-0 left-0 right-0 flex items-center justify-center rounded-b-lg">
      <h1 className="text-4xl font-poppins font-bold">
        {capitalizeFist(props.name)}
      </h1>
    </div>
  );
}
