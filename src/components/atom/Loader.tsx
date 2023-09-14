import { View, Text, StyleSheet } from "react-native";

const Loader = () => {
  return (
    <View style={styles.loader}>
      <Text>Loader</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    //style
    borderColor: "", //Ajoute une couleur
    borderWidth: 2, //Epaisseur de ta bordure
    borderRadius: 50, //Courbe de ta bordure
  },
});

export default Loader;
