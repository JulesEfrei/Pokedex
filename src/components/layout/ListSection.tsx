import { FlatList, StyleSheet, View, Text } from "react-native";
import { host } from "../../utils/variables";
import useFetch from "../../hooks/useFetch";
import { PokemonCard } from "../organism";
import { useState } from "react";

const ListSection: React.FC = () => {
  const { data, next, loading, error } = useFetch(
    host + "/pokemon",
    "multiple"
  );

  if (error) {
    console.log(error);
  }

  return (
    <>
      {loading === false
        ? !error && (
            <FlatList
              style={styles.mainContainer}
              numColumns={2}
              columnWrapperStyle={{ gap: 15 }}
              data={data}
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
  },
  footerContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default ListSection;
