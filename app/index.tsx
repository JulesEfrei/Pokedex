import { Text } from "react-native";
import { router } from "expo-router";

const Index: React.FC = () => {
  setTimeout(() => {
    router.replace("/home");
  }, 1000);

  return (
    <>
      <Text>Loading...</Text>
    </>
  );
};

export default Index;
