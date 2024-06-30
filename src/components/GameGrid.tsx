import useGame from "../hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, errorMsg } = useGame();
  return (
    <>
      {errorMsg && <Text>{errorMsg}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 4 }}
        spacing={10}
        padding={"5"}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
