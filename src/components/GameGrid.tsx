import { useEffect, useState } from "react";
import apiClient from "../services/api_client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    apiClient
      .get<GameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  }, []);

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
