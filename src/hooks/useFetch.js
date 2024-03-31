import { useEffect, useState } from "react";

const useFetch = (url, method, body) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      setLoading(true);
      
      const option = {
        method: method,
      }

      if (method === "POST") option.body = JSON.stringify(body);
  
      try {
        const response = await fetch(url, option);
        const result = await response.json();

        setData(result);
      } catch(e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }) ()
  }, [url, method, body]);

  return { data, loading, error };
}

export default useFetch;