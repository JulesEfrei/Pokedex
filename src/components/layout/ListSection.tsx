import {
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { host } from "../../utils/variables";
import useFetch from "../../hooks/useFetch";
import { PokemonCard } from "../organism";

const ListSection: React.FC = () => {
  // ?offset=20&limit=200

  const { data, loading, error } = useFetch(host + "/pokemon", "multiple");

  if (error) {
    console.log(error);
  }

  return (
    <>
      {loading === false
        ? !error && (
            <FlatList
              style={styles.mainContainer}
              data={data}
              renderItem={(elm) => <PokemonCard pokemon={elm.item} />}
              keyExtractor={(elm, index) => `${index}-${elm.id}`}
              numColumns={2}
              columnWrapperStyle={{ gap: 15 }}
            />
          )
        : null}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // padding: 20, //TODO : Refactor
  },
});

export default ListSection;
