import { useState, useEffect } from "react";
import { Pokemon } from "../utils/models";

function useFetch(url: string, mode: "simple" | "multiple" = "simple") {
  const [data, setData] = useState<any>(null);
  const [pagination, setPagination] = useState<{
    prev: string | null;
    next: string | null;
  }>({ prev: null, next: null });
  const [loading, setLoading] = useState<Boolean | null>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setData(null);

    fetch(url, { signal: controller.signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (mode === "simple") {
          setData(data);
          return;
        }

        //if pagination
        const temp = pagination;
        if (data.next) {
          temp.next = data.next;
        }

        if (data.previous) {
          temp.prev = data.previous;
        }

        if (temp !== pagination) {
          setPagination(temp);
        }

        var tempPokemon: Pokemon[] = [];

        Promise.all(
          data.results.map((elm: { name: string; url: string }) => {
            return fetch(elm.url)
              .then((res) => res.json())
              .then((pokemon: Pokemon) => {
                return tempPokemon.push(pokemon);
              })
              .catch((err) => {
                setError(err);
                setLoading(false);
              });
          })
        )
          .then(() => {
            setData((curr: Pokemon[]) =>
              curr !== null ? [...curr, tempPokemon] : tempPokemon
            );
          })
          .finally(() => setLoading(false));
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      })
      .finally(() => {
        mode === "simple" && setLoading(false);
      });

    return () => controller.abort();
  }, [url]);

  return { data, pagination, loading, error };
}

export default useFetch;
