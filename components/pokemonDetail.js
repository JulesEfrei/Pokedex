import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const PokemonDetail = ({ pokemonName }) => {
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
      <Image
        source={{ uri: pokemonData.sprites.front_shiny }}
        style={styles.pokemon}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.pokeName}>{pokemonData.name}</Text>
        <Text style={styles.pokeId}>#{pokemonData.id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignItems: "center",
  },
  pokeName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  pokemon: {
    width: 200,
    height: 200,
  },
  pokeId: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});

export default PokemonDetail;
