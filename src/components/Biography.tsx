import { usePokemonInfos } from "./PokemonProfile";

export function Biography() {
  const { name, animatedSprite } = usePokemonInfos();

  return (
    <div className="flex justify-center w-full">
      <img
        src={animatedSprite}
        alt={`${name} gif`}
        className="w-1/4 h-1/4"
      ></img>
    </div>
  );
}
