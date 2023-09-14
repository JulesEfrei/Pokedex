import { StyleSheet, Text, View } from "react-native";
import Pokemon from "./src/components/Pokemon";
import useFetch from "./src/hooks/useFetch";

export default function App() {
  console.log("Render");

  const host: String = "https://pokeapi.co/api/v2/";

  const { data, loading, error } = useFetch(host + "pokemon/pichu");

  if (error !== null) {
    console.log(error);
  }

  return (
    <View style={styles.container}>
      {error !== null ? <Text>Error</Text> : null}
      {loading === false ? <Pokemon name={data.name} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
