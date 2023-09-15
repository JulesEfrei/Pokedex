import { SortType, Type } from "./Types";
import { Pokemon } from "./models";

export const capitalize = (str: String) => str[0].toUpperCase() + str.slice(1);

export const complete = (id: Number) => id.toString().padStart(3, "0");

export const getBackgroundColorFromItem = (pokemon: Pokemon) => {
  return pokemon.types[pokemon.types.findIndex((type) => type.slot === 1)].type
    .name;
};

export const sortBy: (sort: SortType, pokemonList: Pokemon[]) => Pokemon[] = (
  sort,
  pokemonList
) => {
  switch (sort) {
    case "height":
      return pokemonList.sort((a, b) => a.height - b.height);
    case "weight":
      return pokemonList.sort((a, b) => a.weight - b.weight);
    case "name":
      return pokemonList.sort((a, b) => a.name.localeCompare(b.name));
    case "type":
      return pokemonList.sort((a, b) =>
        a.types[0].type.name.localeCompare(b.types[0].type.name)
      );
    default:
      return pokemonList.sort((a, b) => a.id - b.id);
  }
};
