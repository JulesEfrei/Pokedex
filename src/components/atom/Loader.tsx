import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}> en cours de chargement...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
  },
});

export default Loader;
