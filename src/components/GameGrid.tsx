import useGame from "../hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/usePlatform";
import { orderItem } from "./SortSelector";

interface GameGridProps {
  genre: Genre | null;
  platform: Platform | null;
  selectedOrderItem: orderItem | null;
  searchText: string;
}
const GameGrid = ({
  genre,
  platform,
  selectedOrderItem,
  searchText,
}: GameGridProps) => {
  const { games, errorMsg, isLoading } = useGame(
    genre,
    platform,
    selectedOrderItem,
    searchText
  );
  const skeltons = [1, 2, 3, 4, 5, 6];
  if (errorMsg) {
    return <Text>{errorMsg + "Can't fetch games"}</Text>;
  }
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 4 }}
        spacing={10}
      >
        {isLoading &&
          skeltons.map((key) => (
            <GameCardContainer key={key}>
              <GameCardSkelton />
            </GameCardContainer>
          ))}
        {games.map((game, key) => (
          <GameCardContainer key={key}>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
