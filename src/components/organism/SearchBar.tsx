import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../utils/variables";
import { router } from "expo-router";

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<String>("");

  return (
    <>
      <View style={styles.container}>
        <FontAwesome5 name="search" size={15} color={colors.black} />
        <TextInput
          style={styles.input}
          placeholder="Search Pokemon"
          onChangeText={(e) => setSearchValue(e)}
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => router.replace(`/pokemon/${searchValue}`)}
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
    width: "97%", //TODO -> Refactor
  },
});

export default SearchBar;
