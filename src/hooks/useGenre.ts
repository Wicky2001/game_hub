import { useState, useEffect } from "react";
import apiClient from "../services/api_client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
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
  }, []);
  return { genres, errorMsg, isLoading };
};

export default useGenre;
