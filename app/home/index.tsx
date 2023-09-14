import { SafeAreaView, View, StyleSheet } from "react-native";
import { SearchBar, Header } from "../../src/components/organism";
import { NavList } from "../../src/components/layout";
import { colors } from "../../src/utils/variables";

const Index: React.FC = () => {
  return (
    <>
      <SafeAreaView style={styles.body}>
        <View style={styles.mainLayout}>
          <Header title="What Pokemon are you looking for?" />
          <View style={styles.flexCenter}>
            <SearchBar />
            <NavList />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.primary,
  },
  mainLayout: {
    height: "90%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "white",
    overflow: "hidden",
  },
});

export default Index;
