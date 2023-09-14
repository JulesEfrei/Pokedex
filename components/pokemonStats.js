import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const PokeStats = ({ pokemonName }) => {
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Réponse de serveur non valide");
        }
        return response.json();
      })
      .then((data) => {
        setPokeData(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du Pokémon :",
          error
        );
      });
  }, [pokemonName]);

  if (!pokeData) {
    return <Text>Chargement en cours...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistiques :</Text>
      {pokeData.stats.map((stat, index) => (
        <View key={index} style={styles.statContainer}>
          <Text style={styles.statName}>{stat.stat.name}:</Text>
          <Text style={styles.statValue}>{stat.base_stat}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  statName: {
    fontSize: 16,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PokeStats;
