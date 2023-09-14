import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const PokemonAbout = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Réponse de serveur non valide");
        }
        return response.json();
      })
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du Pokémon :",
          error
        );
      });
  }, [pokemonName]);

  if (!pokemonData) {
    return <Text>Chargement en cours...</Text>;
  }

  return (
    <View>
      {/* <Text style={styles.PokemonAbout}>
        Habitat : {pokemonData.species.habitat.name}
      </Text> */}
      <Text style={styles.PokemonAbout}>
        Poids : {pokemonData.weight / 10} kg
      </Text>{" "}
      <Text style={styles.PokemonAbout}>
        Taille : {pokemonData.height / 10} m
      </Text>{" "}
      <Text style={styles.PokemonAbout}>
        Expérience de base : {pokemonData.base_experience} xp
      </Text>
      {/* <Text style={styles.PokemonAbout}>
        Type : {pokemonData.types[0].type.name}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  PokemonAbout: {
    left: 20,
    top: 20,
  },
});

export default PokemonAbout;
