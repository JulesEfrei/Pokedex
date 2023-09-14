import { SortType } from "./Types";

export const host: string = "https://pokeapi.co/api/v2/";

export const colors: Record<string, string> = {
  primary: "#C9CCCE",
  secondary: "#F5F5F5",
  black: "#222C36",
};

export const pokemonTypeColors: Record<string, string> = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
  unknown: "#68A090", // Ajoutez des couleurs pour d'autres types si nécessaire
  shadow: "#302428",
};

export const navTab: { name: string; url: String; color: string }[] = [
  { name: "Pokedex", url: "/pokedex", color: "#48D0B0" },
  { name: "Moves", url: "/moves", color: "#F7786B" },
  { name: "Abilities", url: "/abilities", color: "#76BDFE" },
  { name: "Items", url: "/items", color: "#FFCE4B" },
  { name: "Locations", url: "/locations", color: "#7C538C" },
];

export const sortPossibility: SortType[] = [
  "id",
  "name",
  "weight",
  "height",
  "type",
];
