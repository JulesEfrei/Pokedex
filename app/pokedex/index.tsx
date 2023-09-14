import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { Header } from "../../src/components/organism";
import { ListSection } from "../../src/components/layout";

const Index: React.FC = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Header title="Pokedex" icon={true} />
        <ListSection />
      </SafeAreaView>
    </>
  );
};

export default Index;
