import { useEffect, useState } from "react";
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Agregar un estado para manejar errores

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('error fecht url');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error)
      });
  }, [url]);

  return { data, error }; // Retornar tanto los datos como el estado de error
}
