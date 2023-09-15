import { View, Text, StyleSheet } from "react-native";
import { Pokemon } from "../../utils/models";

const PokemonEvolutions: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <>
      <Text>Il évolue tkt (source fiable)</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default PokemonEvolutions;
