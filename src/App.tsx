import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
import { orderItem } from "./components/SortSelector";
import DynamicHeading from "./components/DynamicHeading";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelctedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedSortOrderItem, setSelectedSortOrderItem] =
    useState<orderItem | null>(null);
  const [searchText, setSearchText] = useState("");
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: '"nav nav" "aside main"',
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar setSearchText={setSearchText}></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" padding={3}>
          <GenreList
            onSelcetGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main" padding={3}>
        <DynamicHeading
          genre={selectedGenre}
          platform={selectedPlatform}
        ></DynamicHeading>

        <HStack spacing={2} paddingBottom={7}>
          <PlatformSelector
            onSelectPlatform={setSelctedPlatform}
            selectedPlatform={selectedPlatform}
          ></PlatformSelector>
          <SortSelector
            onSelectOrder={setSelectedSortOrderItem}
            selectedSortOrderItem={selectedSortOrderItem}
          ></SortSelector>
        </HStack>

        <GameGrid
          genre={selectedGenre}
          platform={selectedPlatform}
          selectedOrderItem={selectedSortOrderItem}
          searchText={searchText}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
