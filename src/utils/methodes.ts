import { Type } from "./Types";

export const capitalize = (str: String) => str[0].toUpperCase() + str.slice(1);

export const complete = (id: Number) => id.toString().padStart(3, "0");

export const getBackgroundColorFromItem = (pokemon: any) => {
  const types: Type[] = pokemon.types;

  return pokemon.types[types.findIndex((type) => type.slot === 1)].type.name;
};
