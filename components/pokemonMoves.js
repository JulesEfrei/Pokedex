import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const PokemonMoves = ({ pokemonName }) => {
  const [movesData, setMovesData] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Réponse de serveur non valide");
        }
        return response.json();
      })
      .then((data) => {
        const moves = data.moves;
        const firstFourMoves = moves.slice(0, 4); // Sélectionnez les 4 premiers mouvements
        setMovesData(firstFourMoves);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données des mouvements du Pokémon :",
          error
        );
      });
  }, [pokemonName]);

  if (movesData.length === 0) {
    return <Text>Chargement en cours...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attaques :</Text>
      {movesData.map((move, index) => (
        <Text key={index} style={styles.moveName}>
          {move.move.name}
        </Text>
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
  moveName: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PokemonMoves;
