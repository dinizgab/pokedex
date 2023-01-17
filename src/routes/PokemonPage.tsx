import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import PokemonProfile from "../components/PokemonProfile";

export default function PokemonPage() {
  const { pokemonId } = useParams();

  return (
    <div className="grid">
      <NavBar isProfile={true} />
      <PokemonProfile
        pokemonId={pokemonId!}
      />
    </div>
  );
}
