import { AbilityInterface } from "./AbilityInterface";

export interface PokemonInterface {
    id: number;
    name: string;
    sprite: string;
    types: Array<string>;
    height?: number;
    weight?: number;
    abilities?: Array<AbilityInterface>;
  }