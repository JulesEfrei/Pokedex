import { FlatList, StyleSheet, View, Text, Button } from "react-native";
import { host } from "../../utils/variables";
import useFetch from "../../hooks/useFetch";
import { PokemonCard } from "../organism";
import { SortType } from "../../utils/Types";
import { sortBy } from "../../utils/methodes";
import { useState } from "react";
import { Loader } from "../atom";

const ListSection: React.FC<{ sort: SortType }> = ({ sort }) => {
  const [url, setUrl] = useState<string>(host + "/pokemon");

  const { data, pagination, loading, error } = useFetch(url, "multiple");

  if (error) {
    console.log(error);
  }

  const fetchNext = () => {
    if (pagination.next) {
      setUrl(pagination.next!);
    }
  };

  const fetchPrev = () => {
    if (pagination.prev) {
      setUrl(pagination.prev);
    }
  };

  return (
    <>
      {error ? <Text>An error occured</Text> : null}
      {loading ? <Loader /> : null}
      {!loading
        ? data !== null && (
            <FlatList
              style={styles.mainContainer}
              numColumns={2}
              columnWrapperStyle={{ gap: 15 }}
              data={sortBy(sort, data)}
              renderItem={(elm) => <PokemonCard pokemon={elm.item} />}
              keyExtractor={(elm, index) => `${index}-${elm.id}`}
              ListFooterComponent={
                <FooterList prev={fetchPrev} next={fetchNext} />
              }
              ListEmptyComponent={() => <Text>No data available</Text>}
            />
          )
        : null}
    </>
  );
};

const FooterList: React.FC<{ prev: () => void; next: () => void }> = ({
  prev,
  next,
}) => {
  return (
    <View>
      <Button title="Prev" onPress={prev} />
      <Button title="Next" onPress={next} />
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
