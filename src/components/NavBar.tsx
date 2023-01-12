import Search from "./Search";

export default function NavBar() {
  return (
    <div className="w-full h-24 p-12 py-2 bg-[#E2330C] flex flex-col items-center justify-between sm:flex-row">
      <h1 className="text-white text-2xl md:text-3xl">Pokedex</h1>
      <Search />
    </div>
  );
}
