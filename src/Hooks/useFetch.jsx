import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([{}]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(url, options);
        const json = await result.json();
        setResult(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [url, options]);

  return { loading, result, error };
};

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
  options: PropTypes.object,
};

export default useFetch;
