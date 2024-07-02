import { useState, useEffect } from "react";
import apiClient from "../services/api_client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface PlatformResponse {
  count: number;
  results: Platform[];
}

const usePlatform = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<PlatformResponse>("/platforms/lists/parents", {
        signal: controller.signal,
      })
      .then((res) => {
        setPlatforms(res.data.results);
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
  return { platforms, errorMsg, isLoading };
};

export default usePlatform;
