import { View, Text, StyleSheet } from "react-native";
import { Pokemon, PokemonStat, Stat } from "../../utils/models";
import { colors } from "../../utils/variables";
import { capitalize } from "../../utils/methodes";

const PokemonStats: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <>
      <View>
        {pokemon.stats.map((elm: PokemonStat, index: Number) => (
          <View style={styles.container} key={`${index}`}>
            <Text style={styles.name}>{capitalize(elm.stat.name)}</Text>
            <Text style={styles.value}>{elm.base_stat}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 15,
  },
  name: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "bold",
    width: "50%",
  },
  value: {
    fontWeight: "bold",
  },
});

export default PokemonStats;
