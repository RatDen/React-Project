import { useState, useEffect } from 'react';

export interface Movie {
  id: number;
  title: string;
  rating: number;
  year: number;
  country: string;
  duration: number;
  genre: string;
  category: string;
  image: string;
}

interface MoviesData {
  movies: Movie[];
}

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/movies.json');
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        const data: MoviesData = await response.json();
        setMovies(data.movies);
      } catch (err: any) {
        setError(err.message);
        console.error('Ошибка:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, error, loading };
};
