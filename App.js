import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PokemonDetail from "./components/pokemonDetail";
import PokemonStats from "./components/pokemonStats";
import PokemonAbout from "./components/pokemonAbout";
import PokemonMoves from "./components/pokemonMoves";
import PokemonEvolution from "./components/pokemonEvolution";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [selectedText, setSelectedText] = useState(1);

  const toggleText = (textNumber) => {
    setSelectedText(textNumber);
  };

  const renderContent = () => {
    switch (selectedText) {
      case 1:
        return <PokemonAbout pokemonName="charizard" />;
      case 2:
        return <PokemonStats pokemonName="charizard" />;
      case 3:
        return <PokemonEvolution pokemonName="charizard" />;
      case 4:
        return <PokemonMoves pokemonName="charizard" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backPoke}></View>
      <Pressable
        style={styles.returnBack}
        onPress={() => console.log("Return Back Pressed")}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </Pressable>

      <View style={styles.backDescription}>
        <PokemonDetail pokemonName="charizard" />
    
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            {[1, 2, 3, 4].map((buttonNumber) => (
              <Pressable
                key={buttonNumber}
                style={({ pressed }) => [
                  styles.button,
                  { backgroundColor: pressed ? "lightgray" : "white" },
                ]}
                onPress={() => toggleText(buttonNumber)}
              >
                <Text
                  style={
                    selectedText === buttonNumber
                      ? styles.selectedText
                      : styles.text
                  }
                >
                  {buttonNumber === 1
                    ? "About"
                    : buttonNumber === 2
                    ? "Base Stats"
                    : buttonNumber === 3
                    ? "Evolution"
                    : "Moves"}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {renderContent()}

        <StatusBar style="auto" />
      </View>
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
  backPoke: {
    backgroundColor: "#ff6f7d",
    width: windowWidth * 0.8,
    height: windowHeight * 0.4,
    borderRadius: 20,
    position: "absolute",
    top: 0,
    zIndex: 0,
  },
  backDescription: {
    backgroundColor: "#ffff",
    width: windowWidth * 0.8,
    height: windowHeight * 0.25,
    borderRadius: 20,
    top: windowHeight * 0.1,
    zIndex: 2,
  },
  buttonRow: {
    flexDirection: "row",
    top: windowHeight * 0.02,
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: windowWidth * 0.04,
    color: "black",
  },
  selectedText: {
    fontSize: windowWidth * 0.04,
    color: "Grey",
    textDecorationLine: "underline",
  },
  returnBack: {
    top: windowHeight * -0.06,
    left: windowWidth * -0.065,
    zIndex: 100000,
  },
});
