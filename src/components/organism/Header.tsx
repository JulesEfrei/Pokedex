import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { colors, sortPossibility } from "../../utils/variables";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SortType } from "../../utils/Types";
import { useState } from "react";
import { capitalize } from "../../utils/methodes";

interface Props {
  title: String;
  onChangeSort?: React.Dispatch<React.SetStateAction<SortType>>;
  icon?: Boolean;
}

const Header: React.FC<Props> = ({ title, icon = false, onChangeSort }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

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
              onPress={() => router.replace("/")}
            />
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
              <Feather name="menu" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ) : null}
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Sort modal */}
      {isOpen ? (
        <View style={styles.sortModalContainer}>
          {sortPossibility.map((value: SortType, index: Number) => (
            <TouchableOpacity
              key={`${value}-${index}`}
              onPress={() => {
                onChangeSort!(value);
                setIsOpen(false);
              }}
              style={styles.sortButton}
            >
              <Text style={styles.sortTitle}>{capitalize(value)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
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
  sortModalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    zIndex: 10,
    backgroundColor: "white",
    padding: 20,
    gap: 10,
  },
  sortButton: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    borderRadius: 10,
    width: "47%",
  },
  sortTitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});

export default Header;
