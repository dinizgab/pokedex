import { Link } from "react-router-dom";
import { ArrowCircleLeft } from "phosphor-react";

interface NavBarProps {
  isProfile: boolean;
}

export default function NavBar(props: NavBarProps) {
  return (
    <header
      className={`w-full p-12 py-8 bg-[#E2330C] flex flex-col items-center justify-around md:flex-row`}
    >
      <Link to="/" className="text-white text-2xl md:text-3xl">
        Pokedex
      </Link>

      {props.isProfile ? (
        <Link className="text-white text-xl flex items-center " to="/">
          <ArrowCircleLeft size={32} className="mr-2"/>
          Go back
        </Link>
      ) : (
        <></>
      )}
    </header>
  );
}
