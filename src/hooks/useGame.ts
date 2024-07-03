import { useState, useEffect } from "react";
import apiClient from "../services/api_client";
import { CanceledError } from "axios";
import { Genre } from "./useGenre";
import { orderItem } from "../components/SortSelector";

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
  rating_top: number;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGame = (
  genre: Genre | null,
  platform: Platform | null,
  selectedOrderItem: orderItem | null,
  searchText: string
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("selected plaform = " + platform?.name);
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GameResponse>("/games", {
        signal: controller.signal,
        params: {
          genres: genre?.id,
          platforms: platform?.id,
          ordering: selectedOrderItem?.value,
          search: searchText,
        },
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
  }, [genre, platform, selectedOrderItem, searchText]);
  return { games, errorMsg, isLoading };
};

export default useGame;
