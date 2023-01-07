export default function NavBar() {
    return (
        <div className="w-full h-20 color-[#2A3D45] bg-[#F5853F] flex justify-between items-center p-12">
            <h1 className="text-3xl">Pokedex</h1>
            <input type="text" placeholder="Search Pokemon" className="bg-[#FFEAEE] rounded-2xl w-100 p-1.5 pl-2.5 color-[#989797]"/>
        </div>
    )
}