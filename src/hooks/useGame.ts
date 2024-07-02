import { useState, useEffect } from "react";
import apiClient from "../services/api_client";
import { CanceledError } from "axios";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGame = (genre: Genre | null) => {
  const [games, setGames] = useState<Game[]>([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GameResponse>("/games", {
        signal: controller.signal,
        params: { genres: genre?.id },
      })
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data);
        setIsLoading(false); // set is loaded true
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          setErrorMsg(null);
        } else {
          setErrorMsg(error.message);
        }
      });

    return () => controller.abort();
  }, [genre]);
  return { games, errorMsg, isLoading };
};

export default useGame;
