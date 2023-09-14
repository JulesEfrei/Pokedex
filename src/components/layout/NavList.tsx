import { View, StyleSheet } from "react-native";
import { navTab } from "../../utils/variables";
import { NavCard } from "../organism";

const NavList: React.FC = () => {
  return (
    <>
      <View style={styles.grid}>
        {navTab.map((elm, index) => (
          <NavCard
            name={elm.name}
            url={elm.url}
            color={elm.color}
            key={`${elm.name}-${index}`}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  grid: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
  },
});

export default NavList;
