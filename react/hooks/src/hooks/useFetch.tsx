import { useEffect, useState } from "react";

type FetchProps = {
  url: string;
};

export function useFetch<T>({ url }: FetchProps) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data: T = await res.json();

      setData(data);
      setSuccess(true);
    } catch (ex: unknown) {
      if (ex instanceof Error) {
        return setError(ex.message);
      }
      setError(`Error fetching ${url}`);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const cleanup = () => {
    setData(undefined);
    setError(undefined);
    setLoading(false);
    setSuccess(false);
  };

  useEffect(() => {
    fetchData();

    // cleanup
    return () => {
      cleanup();
    };
  }, [url]);

  return {
    data,
    isLoading,
    isSuccess,
    isError: !isSuccess,
    error,
    refetch: fetchData,
  };
}
