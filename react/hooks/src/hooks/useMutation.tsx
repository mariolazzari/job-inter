import { useState, useEffect } from "react";
import { FetchMethod } from "../types/FetchMethod";

type MutationProps<T> = {
  url: string;
  method: FetchMethod;
} & Partial<{
  body: Partial<T>;
  token: string;
}>;

export function useMutation<T>({ url, method, body, token }: MutationProps<T>) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [headers, setHeaders] = useState<HeadersInit>({
    "Content-Type": "application/json",
  });

  async function mutation() {
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers,
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data: T = await res.json();

      setData(data);
      setSuccess(true);
    } catch (ex) {
      const error = ex instanceof Error ? ex.message : "Error fetching data";
      setError(error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      setHeaders(prevHeaders => ({ ...prevHeaders, Authorization: token }));
    }
  }, [token]);

  return { mutation, data, isLoading, isSuccess, isError: !isLoading, error };
}
