import axios from "axios";
import { useEffect, useState } from "react";
import { usePokemonInfos } from "./PokemonProfile";

export function Biography() {
  const { id, name, animatedSprite, weight, height, abilities } =
    usePokemonInfos();

  const [infosMapTemplate, setInfoMapTemplate] = useState({});
  const [pokemonBiography, setPokemonBiography] = useState<string>("");

  const convertedWeight = weight! / 10;
  const convertedHeight = height! / 10;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then(({ data }) => {
        const textsArray = data.flavor_text_entries;

        setPokemonBiography(
          textsArray
            .find((text: { language: { name: string } }) => {
              return text.language.name === "en";
            })
            .flavor_text.replace(/\f/, " ")
            .replace(/POKéMON/i, "Pokémon")
        );
      });
  });

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then(({ data }) => {
        const specie = data.genera.find(
          (gender: { language: { name: string } }) => {
            return gender.language.name === "en";
          }
        ).genus;

        setInfoMapTemplate({
          specie: specie,
          weight: `${convertedWeight}Kg`,
          height: `${convertedHeight}m`,
        });
      });
  });

  return (
    <div className="grid w-full">
      <img
        src={animatedSprite}
        alt={`${name} gif`}
        className="w-1/4 h-full justify-self-center"
      ></img>

      <div className="w-full px-3 lg:px-16  font-poppins">
        <h1 className="text-center font-bold lg:text-2xl text-[#474949]">Pokemon Data</h1>
        <p className="lg:my-0 text-[#6b6d6e] text-center text-sm lg:text-base">
          {pokemonBiography}
        </p>
        <div className="text-[#6b6d6e] w-full text-sm lg:text-base">
          {Object.keys(infosMapTemplate).map((key) => (
            <div key={key} className="m-2 flex justify-between">
              <span className="w-1/4">
                {key.replace(/^\w/, (c) => c.toUpperCase())}
              </span>
              <span className="text-[#2b2c2c] w-1/3 lg:text-base">
                {infosMapTemplate[key as keyof typeof infosMapTemplate]}
              </span>
            </div>
          ))}
          <div className="m-2 flex justify-between">
            <span className="w-1/4">Abilities</span>
            <span className="flex flex-col w-1/3 text-sm lg:text-base">
              {abilities!.map((ability) => (
                <div className="text-[#2b2c2c]" key={ability.abilityName}>
                  {" "}
                  {ability.abilitySlot}.{" "}
                  {ability.abilityName
                    .replace(/-/, " ")
                    .replace(/^\w/, (c) => c.toUpperCase())}
                </div>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
