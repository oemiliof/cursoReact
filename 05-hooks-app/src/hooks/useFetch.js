import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted) {
          setState({
            data: data,
            loading: false,
            error: null,
          });
        } else {
          console.log("no se llamo el setState");
        }
      });
  }, [url]);

  return state;
};
