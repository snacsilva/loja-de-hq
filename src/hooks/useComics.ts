import { useState, useEffect } from 'react';
import { Comic, AxiosMarvelResponse } from '../types';
import comicsService from '../services/comics';

export const useComics = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllComics = async () => {
    try {
      setLoading(true);
      setError(null);

      const response: AxiosMarvelResponse<Comic> = await comicsService.getAllComics();
      
      setComics(response.data.data.results);
    } catch (err) {
      setError('Erro ao carregar os quadrinhos');
      console.error('Erro ao carregar comics:', err);
    } finally {
      setLoading(false);
    }
  };

  const getComic = async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      const response: AxiosMarvelResponse<Comic> = await comicsService.getComic(id);
      setComics(response.data.data.results);
    } catch (err) {
      setError('Erro ao carregar o quadrinho');
      console.error('Erro ao carregar comic:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllComics();
  }, []);

  return {
    comics,
    loading,
    error,
    fetchAllComics,
    getComic
  };
};
