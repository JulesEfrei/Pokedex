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
    <View style={styles.container}>
      <Text style={styles.infoText}>
        Habitat : {pokemonData.species.habitat.name}
      </Text>
      <Text style={styles.infoText}>
        Poids : {pokemonData.weight / 10} kg
      </Text>
      <Text style={styles.infoText}>
        Taille : {pokemonData.height / 10} m
      </Text>
      <Text style={styles.infoText}>
        Expérience de base : {pokemonData.base_experience} xp
      </Text>
      <Text style={styles.infoText}>
        Type : {pokemonData.types[0].type.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PokemonAbout;
