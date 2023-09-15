import { View } from "react-native";
import { Tabs } from "../../utils/Types";
import { Pokemon } from "../../utils/models";
import {
  PokemonAbout,
  PokemonStats,
  PokemonEvolutions,
  PokemonMoves,
} from "../organism";

const PokemonInfoRouter: React.FC<{ activeTab: Tabs; pokemon: Pokemon }> = ({
  activeTab,
  pokemon,
}) => {
  return (
    <>
      <View style={{ marginTop: 20 }}>
        {activeTab === "about" ? <PokemonAbout pokemon={pokemon} /> : null}
        {activeTab === "stats" ? <PokemonStats pokemon={pokemon} /> : null}
        {activeTab === "evolutions" ? (
          <PokemonEvolutions pokemon={pokemon} />
        ) : null}
        {activeTab === "moves" ? <PokemonMoves pokemon={pokemon} /> : null}
      </View>
    </>
  );
};

export default PokemonInfoRouter;
