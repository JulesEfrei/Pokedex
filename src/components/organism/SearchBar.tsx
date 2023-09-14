import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../utils/variables";

interface Props {
  onChange: React.Dispatch<React.SetStateAction<String>>;
}

const SearchBar: React.FC<Props> = ({ onChange }) => {
  return (
    <>
      <View style={styles.container}>
        <FontAwesome5 name="search" size={15} color={colors.black} />
        <TextInput
          style={styles.input}
          placeholder="Search Pokemon"
          onChangeText={onChange}
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
    width: "97%", //TODO -> Refactor
  },
});

export default SearchBar;
