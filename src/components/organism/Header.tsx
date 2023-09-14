import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../utils/variables";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header: React.FC<{ title: String; icon?: Boolean }> = ({
  title,
  icon = false,
}) => {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.logo}>
          <MaterialCommunityIcons
            name="pokeball"
            size={150}
            color={colors.secondary}
          />
        </View>
        {icon ? (
          <View style={styles.iconContainer}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              onPress={() => router.replace("/home")}
            />
            <Feather name="menu" size={24} color="black" />
          </View>
        ) : null}
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    padding: 20,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: colors.black,
    marginTop: 20,
  },
  logo: {
    position: "absolute",
    right: 0,
    top: 0,
    transform: [{ translateX: 50 }, { translateY: -50 }],
  },
});

export default Header;
