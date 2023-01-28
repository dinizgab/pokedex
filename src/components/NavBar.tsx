import { Link } from "react-router-dom";
import Search from "./Search";

interface NavBarProps {
  isProfile: boolean;
}

export default function NavBar(props: NavBarProps) {
  return (
    <header
      className={` w-full h-[10%] p-12 py-8 bg-[#E2330C] flex flex-col items-center ${
        props.isProfile ? "justify-center" : "justify-between"
      } sm:flex-row`}
    >
      <Link to="/">
        <h1 className="text-white text-2xl md:text-3xl">Pokedex</h1>
      </Link>
      {props.isProfile ? <></> : <Search />}
    </header>
  );
}
