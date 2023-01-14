import { Ability } from "./Ability";

export type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  types: Array<string>;
  height?: number;
  weight?: number;
  abilities?: Array<Ability>;
  animatedSprite?: string;
  stats?: Array<{ statName: string; baseStat: number }>;
};
