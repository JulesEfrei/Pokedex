import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Pokemon, PokemonMove } from "../../utils/models";
import { capitalize } from "../../utils/methodes";
import { colors } from "../../utils/variables";

const PokemonMoves: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <>
      <ScrollView>
        {pokemon.moves.map((elm: PokemonMove, index: Number) => (
          <View style={styles.container} key={`${index}`}>
            <Text style={styles.name}>{capitalize(elm.move.name)}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // marginBottom: 15,
  },
  name: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "bold",
    width: "50%",
  },
});

export default PokemonMoves;
