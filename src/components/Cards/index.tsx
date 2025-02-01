import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { getPopularMovies } from '@/services/api';
import { fakeMovies } from '@/services/fakeMovies';
import Card from '@/components/Card';
import styles from './styles.module.css';

type Movie = {
  id: string;
  primaryTitle: string;
  averageRating: number;
  releaseDate: string;
  countriesOfOrigin?: string;
  runtimeMinutes: number;
  genres?: string;
  primaryImage: string;
};

export function Cards() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // set to false bc no working api

  // это был рабочий код, но апи перестала работать
  // useEffect(() => {
  //   const loadMovies = async () => {
  //     try {
  //       const popularMovies = await getPopularMovies();
  //       setMovies(popularMovies);
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         setError(error.message);
  //       } else {
  //         throw error;
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadMovies();
  // }, []);

  return (
    <div className={styles.container}>
      {error && <div className='error-message'>{error}</div>}
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className={styles.cardBlock}>
          <h1 className={styles.title}>Топ-250 Фильмов</h1>
          <div className={styles.cardsContainer}>
            {/* сейчас нет кэширования, картинки-постеры фильмов в высоком
            разрешении загружаются каждый раз поэтому slice */}
            {fakeMovies.slice(0, 8).map((movie) => (
              <React.Fragment key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <Card
                    key={movie.id}
                    title={movie.primaryTitle}
                    rating={movie.averageRating || 0}
                    year={Number(movie.releaseDate.split('-')[0])}
                    country={movie.countriesOfOrigin[0] || ''}
                    duration={movie.runtimeMinutes}
                    genre={movie.genres[0] || ''}
                    image={movie.primaryImage}
                  />
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
