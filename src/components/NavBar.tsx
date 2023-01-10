export default function NavBar() {
    return (
        <div className="w-full h-20 color-[#2A3D45] bg-[#9c05e2] flex justify-between items-center p-12 mb-8">
            <h1 className="text-3xl">Pokedex</h1>
            <input type="text" placeholder="Search Pokemon" className="bg-[#e9e7e7] rounded-3xl h-10 w-100 p-1.5 pl-2.5 color-[#989797]"/>
        </div>
    )
}