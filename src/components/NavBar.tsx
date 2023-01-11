export default function NavBar() {
  return (
    <div className="w-full h-20 p-12 py-2 bg-[#4529fa] flex flex-col items-center justify-between sm:flex-row">
      <h1 className="text-white text-2xl md:text-3xl">Pokedex</h1>
      <input
        type="text"
        placeholder="Search Pokemon"
        className="bg-slate-100 rounded-3xl h-10 w-100 p-1.5 pl-2.5 color-[#989797]"
      />
    </div>
  );
}
