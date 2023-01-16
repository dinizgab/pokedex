import { Ability } from "./Ability";
import { Stat } from "./Stat";

export type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  types: Array<string>;
  height?: number;
  weight?: number;
  abilities?: Array<Ability>;
  animatedSprite?: string;
  stats?: Array<Stat>;
};
