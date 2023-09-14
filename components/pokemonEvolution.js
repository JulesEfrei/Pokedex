import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, StyleSheet } from "react-native";

const PokemonEvolutions = ({ evolutionChainUrl }) => {
  const [evolutionData, setEvolutionData] = useState([]);

  useEffect(() => {
    fetch(evolutionChainUrl)
      .then((response) => response.json())
      .then((data) => {
        const evolutions = extractEvolutions(data.chain);
        setEvolutionData(evolutions);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données d'évolution du Pokémon :",
          error
        );
      });
  }, [evolutionChainUrl]);

  const extractEvolutions = (chain) => {
    const evolutions = [];
    let current = chain;

    while (current) {
      evolutions.push({
        name: current.species.name,
        id: current.species.url.split("/").slice(-2, -1)[0], // Obtenir l'ID du Pokémon
      });
      current = current.evolves_to[0];
    }

    return evolutions;
  };

  if (evolutionData.length === 0) {
    return (
      <Text style={styles.PokeEvo}>Ce Pokémon n'a pas d'évolution connue.</Text>
    );
  }

  return (
    <View>
      <Text style={styles.title}>Évolutions :</Text>
      {evolutionData.map((evolution, index) => (
        <Text key={index} style={styles.evolutionName}>
          {evolution.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  evolutionName: {
    fontSize: 16,
  },
  PokeEvo: {
    left: 20,
    top: 30,
  },
});

export default PokemonEvolutions;
