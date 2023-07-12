import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async(url, options)  => {
    let response;
    let json;
    try {
      setError(null); // Para quando der um novo request definir como null o erro
      setLoading(true); //Aparece carregando
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError('Erro');
    } finally {
      // Este sempre vai ocorrer, independente de erro ou não
      setData(json);
      setLoading(false);
      return {response, json} 
    }
  }, []);

  return { data, error, loading, request };
}

export default useFetch;