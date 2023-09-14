import { useState, useEffect } from "react";
import { Pokemon } from "../utils/models";

function useFetch(url: string, mode: "simple" | "multiple" = "simple") {
  const [data, setData] = useState<any>(null);
  const [next, setNext] = useState<string | null>(null);
  const [loading, setLoading] = useState<Boolean | null>(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();

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
        if (data.next) {
          setNext(data.next);
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
            tempPokemon.sort(
              (poke1: Pokemon, poke2: Pokemon) => poke1.id - poke2.id
            ); //TODO => refactor
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

  return { data, next, loading, error };
}

export default useFetch;
