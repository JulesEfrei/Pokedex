import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Tabs } from "../../utils/Types";
import { capitalize } from "../../utils/methodes";
import { colors } from "../../utils/variables";

interface Props {
  onChange: React.Dispatch<React.SetStateAction<Tabs>>;
  active: Tabs;
}

const TabBar: React.FC<Props> = ({ onChange, active }) => {
  const tabs: Tabs[] = ["about", "stats", "evolutions", "moves"];

  return (
    <View style={styles.container}>
      {tabs.map((elm: Tabs, index: Number) => (
        <TouchableOpacity
          key={`${elm}-${index}`}
          onPress={() => onChange(elm)}
          style={
            active === elm
              ? { borderBottomColor: "blue", borderBottomWidth: 2 }
              : {}
          }
        >
          <Text
            style={[styles.itemText, active === elm ? { color: "black" } : {}]}
          >
            {capitalize(elm)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  itemText: {
    color: colors.primary,
    paddingBottom: 20,
  },
});

export default TabBar;
