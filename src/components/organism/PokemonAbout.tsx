import { View, Text, StyleSheet } from "react-native";
import { Pokemon } from "../../utils/models";
import { colors } from "../../utils/variables";
import { capitalize } from "../../utils/methodes";

const PokemonAbout: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.col}>
          <Text style={styles.colTitle}>Height</Text>
          <Text style={styles.colValue}>{pokemon.height / 10} m</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.colTitle}>Weight</Text>
          <Text style={styles.colValue}>{pokemon.weight / 10} kg</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Other</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Species</Text>
          <Text style={styles.listValue}>
            {capitalize(pokemon.species.name)}
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Base experience</Text>
          <Text style={styles.listValue}>{pokemon.base_experience}</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Abilities</Text>
          <Text style={styles.listValue}>
            {pokemon.abilities
              .map((elm) => capitalize(elm.ability.name))
              .join(", ")}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  col: {
    width: "48%",
  },
  colTitle: {
    fontSize: 20,
    color: colors.primary,
    marginBottom: 10,
  },
  colValue: {
    fontWeight: "bold",
  },
  bottomContainer: {
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  listContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    width: "50%",
  },
  listValue: {
    fontSize: 16,
  },
});

export default PokemonAbout;
