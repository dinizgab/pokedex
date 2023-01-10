interface CardInfosProps {
    name: string,
    id: number
}

export default function CardInfos(props: CardInfosProps) {
    let capitalizeFist = (name: string): string => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return (
        <div className="w-100% h-20 bg-red-300/80 absolute bottom-0 left-0 right-0 flex items-center justify-center flex-col rounded-b-lg">
            <h1>{capitalizeFist(props.name)}</h1>
            <p>#{props.id}</p>
        </div>
    )
}