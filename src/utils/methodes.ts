import { Type } from "./Types";
import { useState } from "react";

export const capitalize = (str: String) => str[0].toUpperCase() + str.slice(1);

export const complete = (id: Number) => id.toString().padStart(3, "0");

export const getBackgroundColorFromItem = (pokemon: any) => {
  const types: Type[] = pokemon.types;

  return pokemon.types[types.findIndex((type) => type.slot === 1)].type.name;
};

//useState à créer
const [height, setHeight] = useState(true);
const [weight, setWeight] = useState(true);
const [name, setName] = useState(true);
const [type, setType] = useState(true);


//function de trie à appeler pour trier 
export const trie = (trie, pokemonData, setPokemonData) => {
  switch (trie) {
    case "height":
      const sortedByHeight = [...pokemonData].sort((a, b) => a.height - b.height);
      setPokemonData(sortedByHeight);
      break;

    case "weight":
      const sortedByWeight = [...pokemonData].sort((a, b) => a.weight - b.weight);
      setPokemonData(sortedByWeight);
      break;

    case "name":
      const sortedByName = [...pokemonData].sort((a, b) => a.name.localeCompare(b.name));
      setPokemonData(sortedByName);
      break;

    case "type":
      const sortedByType = [...pokemonData].sort((a, b) =>
        a.types[0].type.name.localeCompare(b.types[0].type.name)
      );
      setPokemonData(sortedByType);
      break;

    default:
      break;
  }
};