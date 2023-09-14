import { View, Text, StyleSheet } from "react-native";
import { capitalize } from "../../utils/methodes";

const Tags: React.FC<{ title: String }> = ({ title }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{capitalize(title)}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: "#f2f2f24d",
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 13,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "white",
  },
});

export default Tags;
