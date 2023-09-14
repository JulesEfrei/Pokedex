import axios from "axios";
import { Text, View, StyleSheet } from "react-native";

const PokemonEvolutions = ({ evolutionChainUrl }) => {
  const [evolutionData, setEvolutionData] = useState([]);

    // a compléter

  useEffect(() => {
    fetch(evolutionChainUrl)
      .then((response) => {
        const evolutions = extractEvolutions(response.data);
        setEvolutionData(evolutions);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données d'évolution du Pokémon :",
          error
        );
      });
  }, [evolutionChainUrl]);

  const extractEvolutions = (data) => {
    const evolutions = [];
    let current = data.chain;

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
      <Text>Évolutions :</Text>
      <Text>{evolutionData.map((evolution) => `${evolution.name}, `)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  PokeEvo: {
    left: 20,
    top: 30,
  },
});

export default PokemonEvolutions;
