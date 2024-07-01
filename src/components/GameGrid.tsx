import useGame from "../hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
  const { games, errorMsg, isLoading } = useGame();
  const skeltons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {errorMsg && <Text>{errorMsg}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        padding={"5"}
      >
        {isLoading &&
          skeltons.map((key) => (
            <GameCardContainer>
              <GameCardSkelton key={key} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
