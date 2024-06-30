import useGame from "../hooks/useGame";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, errorMsg } = useGame();
  return (
    <>
      {errorMsg && <Text>{errorMsg}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.id} and {game.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
