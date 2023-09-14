import { FlatList, StyleSheet, View, Text } from "react-native";
import { host } from "../../utils/variables";
import useFetch from "../../hooks/useFetch";
import { PokemonCard } from "../organism";
import { SortType } from "../../utils/Types";
import { sortBy } from "../../utils/methodes";

const ListSection: React.FC<{ sort: SortType }> = ({ sort }) => {
  const { data, next, loading, error } = useFetch(
    host + "/pokemon",
    "multiple"
  );

  if (error) {
    console.log(error);
  }

  return (
    <>
      {error ? <Text>An error occured</Text> : null}
      {!loading
        ? data !== null && (
            <FlatList
              style={styles.mainContainer}
              numColumns={2}
              columnWrapperStyle={{ gap: 15 }}
              data={sortBy(sort, data)}
              renderItem={(elm) => <PokemonCard pokemon={elm.item} />}
              keyExtractor={(elm, index) => `${index}-${elm.id}`}
              //onEndReached={fetchNext} //Method to fetch more data
              // onEndReachedThreshold={2} //Load more when 2 last
              ListFooterComponent={<FooterList />}
              ListEmptyComponent={() => <Text>No data available</Text>}
            />
          )
        : null}
    </>
  );
};

const FooterList: React.FC = () => {
  return (
    <View style={styles.footerContainer}>
      <Text>No more data available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    zIndex: 0,
  },
  footerContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default ListSection;
