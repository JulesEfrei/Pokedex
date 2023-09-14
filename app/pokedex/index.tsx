import { SafeAreaView, StatusBar } from "react-native";
import { Header } from "../../src/components/organism";
import { ListSection } from "../../src/components/layout";
import { useState } from "react";
import { SortType } from "../../src/utils/Types";

const Index: React.FC = () => {
  const [sortOn, setSortOn] = useState<SortType>("id");

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Header
          title="Pokedex"
          icon={true}
          onChangeSort={(e) => {
            console.log(e);
            setSortOn(e);
          }}
        />
        <ListSection sort={sortOn} />
      </SafeAreaView>
    </>
  );
};

export default Index;
