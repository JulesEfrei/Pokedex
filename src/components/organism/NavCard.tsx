import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { capitalize } from "../../utils/methodes";
import { colors } from "../../utils/variables";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const NavCard: React.FC<{ name: string; url: String; color: string }> = ({
  name,
  url,
  color,
}) => {
  return (
    <>
      <TouchableOpacity
        style={{
          ...styles.container,
          backgroundColor: color,
        }}
        onPress={() => {
          router.replace(`${url}`);
        }}
      >
        <Text style={styles.text}>{capitalize(name)}</Text>
        <View style={styles.logo}>
          <MaterialCommunityIcons
            name="pokeball"
            size={75}
            color={"white"}
            style={{ opacity: 0.2 }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    height: 50,
    width: "48%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 10,
  },
  text: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  logo: {
    position: "absolute",
    top: 0,
    right: 0,
    transform: [{ translateX: 15 }, { translateY: -15 }],
  },
});

export default NavCard;
