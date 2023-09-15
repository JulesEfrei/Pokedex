import { router, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import useFetch from "../../src/hooks/useFetch";
import { colors, host, pokemonTypeColors } from "../../src/utils/variables";
import {
  capitalize,
  complete,
  getBackgroundColorFromItem,
} from "../../src/utils/methodes";
import { AntDesign } from "@expo/vector-icons";
import { Loader, Tags } from "../../src/components/atom";
import { Tabs, Type } from "../../src/utils/Types";
import { TabBar } from "../../src/components/organism";
import { useState } from "react";
import { PokemonInfoRouter } from "../../src/components/layout";

const Index: React.FC = () => {
  const { id } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState<Tabs>("about");

  const { data, loading, error } = useFetch(host + `/pokemon/${id}`);

  return (
    <>
      {error ? (
        <View>
          <View style={styles.topContainer}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              onPress={() => router.replace("/")}
            />
          </View>
          <Text style={{ textAlign: "center" }}>
            The pokemon you're searching doesn't exist
          </Text>
        </View>
      ) : null}
      {loading ? <Loader /> : null}
      {!loading
        ? data !== null && (
            <SafeAreaView>
              <View
                style={{
                  backgroundColor:
                    pokemonTypeColors[getBackgroundColorFromItem(data)],
                }}
              >
                <View style={styles.topContainer}>
                  <AntDesign
                    name="arrowleft"
                    size={24}
                    color="white"
                    onPress={() => router.replace("/")}
                  />
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{capitalize(data.name)}</Text>
                    <Text style={styles.id}>#{complete(data.id)}</Text>
                  </View>
                  <View style={styles.typesContainer}>
                    {data.types.map((type: Type, index: Number) => (
                      <Tags
                        title={type.type.name}
                        key={`${index}-${type.type.name}`}
                      />
                    ))}
                  </View>
                  <View style={styles.spriteContainer}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: data.sprites.front_default!,
                      }}
                    />
                  </View>
                </View>
                <View style={styles.bottomContainer}>
                  <TabBar onChange={setActiveTab} active={activeTab} />
                  <PokemonInfoRouter pokemon={data} activeTab={activeTab} />
                </View>
              </View>
            </SafeAreaView>
          )
        : null}
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    padding: 20,
    position: "relative",
  },
  titleContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  id: {
    color: colors.secondary,
    fontSize: 18,
  },
  typesContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  spriteContainer: {
    width: 220,
    height: 220,
    alignSelf: "center",
    marginTop: 20,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  bottomContainer: {
    backgroundColor: "white",
    width: "100%",
    height: 375,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default Index;
