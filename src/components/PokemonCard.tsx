interface PokemonCardProps {
    name: string,
}

export default function PokemonCard(props: PokemonCardProps) {
    return (
        <div className="bg-[#FFEAEE] w-80 h-80">
            <h1>{props.name}</h1>
        </div>
    )
}