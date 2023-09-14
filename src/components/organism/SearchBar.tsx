import React, { useState } from "react";
import { TextInput, View, StyleSheet, Keyboard } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../utils/variables";

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [pokemonInfo, setPokemonInfo] = useState<any>(null);

  const handleSearch = async () => {
    // Clear any previous info
    setPokemonInfo(null);

    // API request to fetch data
    try {
      // Fetch the data API
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      // Convert the response to JSON
      const data = await response.json();
      // Set the Pokemon info
      setPokemonInfo(data);

      // Log the Pokemon info in the console
      console.log("Request OK");
      console.log("Name:", data.name);
      console.log("Type:", data.types.type.name);
      console.log("Stats:", data.stats);
    } catch (error) {
      console.error("Error:", error);
    }

    // Hide the clavier
    Keyboard.dismiss();
  };

  return (
    <>
      <View style={styles.container}>
        <FontAwesome5 name="search" size={15} color={colors.black} />
        <TextInput
          style={styles.input}
          placeholder="Search Pokemon"
          onChangeText={(e) => setSearchValue(e)}
          onSubmitEditing={handleSearch} // Call handleSearch (the user presses Enter)
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 50,
    width: "90%",
  },
  input: {
    paddingLeft: 10,
    width: "97%",
  },
});

export default SearchBar;
