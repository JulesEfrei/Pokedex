import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Tags } from "../atom";
import { colors, pokemonTypeColors } from "../../utils/variables";
import {
  getBackgroundColorFromItem,
  complete,
  capitalize,
} from "../../utils/methodes";
import { Type } from "../../utils/Types";
import { router } from "expo-router";
import { Pokemon } from "../../utils/models";

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => router.replace(`/pokemon/${pokemon.id}`)}
        style={{
          ...styles.itemContainer,
          backgroundColor:
            pokemonTypeColors[getBackgroundColorFromItem(pokemon)],
        }}
      >
        <Text style={styles.id}>#{complete(pokemon.id)}</Text>
        <View style={styles.splitContainer}>
          <View>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <View style={styles.typeContainer}>
              {pokemon.types.map((type: Type, index: Number) => (
                <Tags
                  title={type.type.name}
                  key={`${index}-${type.type.url}`}
                />
              ))}
            </View>
          </View>
          <View style={styles.spriteContainer}>
            <Image
              style={styles.img}
              source={{
                uri: pokemon.sprites.front_default!,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    position: "relative",
    width: "48%",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    overflow: "hidden",
    marginVertical: 10,
  },
  id: {
    color: "#FDFDFD",
    position: "absolute",
    top: 10,
    right: 10,
  },
  name: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
  },
  typeContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  splitContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 125,
  },
  spriteContainer: {
    width: 60,
    height: 60,
    alignSelf: "flex-end",
    position: "absolute",
    right: 5,
  },
  img: {
    width: "150%",
    height: "150%",
  },
});

export default PokemonCard;
