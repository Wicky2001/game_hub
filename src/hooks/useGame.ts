import { useState, useEffect } from "react";
import apiClient from "../services/api_client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          setErrorMsg(null);
        } else {
          setErrorMsg(error.message);
        }
      });

    return () => controller.abort();
  }, []);
  return { games, errorMsg };
};

export default useGame;
