import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '@/shared/config';
import { Card } from '@/components/Cards/Card';
import styles from './styles.module.css';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useGetMoviesQuery } from '@/features/movies/moviesApiSlice';

const CARD_WIDTH = 300;

export const Cards: FC = () => {
  let { data: movies, isLoading, isError } = useGetMoviesQuery({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  movies = movies?.slice(10);
  const moviesLength = movies?.length || 1;

  if (isLoading) {
    return <p className={styles.loading}>Загрузка...</p>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, moviesLength - 1));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Фильмы-новинки &#62;</h1>
      {isError && <p className={styles.error}>Ошибка: {isError}</p>}
      <div className={styles.slider}>
        <button onClick={handlePrev} className={styles.prev}>
          <IoIosArrowBack />
        </button>
        <div className={styles.sliderWrapper}>
          <div
            className={styles.sliderMove}
            style={{
              transform: `translateX(-${currentIndex * CARD_WIDTH}px)`,
            }}
          >
            {movies &&
              movies.map((movie) => (
                <Link to={`${Routes.MOVIES}${movie.id}`} key={movie.id}>
                  <Card
                    title={movie.primaryTitle}
                    image={movie.primaryImage}
                    rating={movie.averageRating || undefined}
                    year={
                      movie.releaseDate
                        ? Number(movie.releaseDate.split('-')[0])
                        : undefined
                    }
                    country={
                      movie.countriesOfOrigin ? movie.countriesOfOrigin[0] : ''
                    }
                    duration={movie.runtimeMinutes || undefined}
                    genre={movie.genres ? movie.genres[0] : ''}
                    category={movie.type || 'Фильм'}
                  />
                </Link>
              ))}
          </div>
        </div>
        <button onClick={handleNext} className={styles.next}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
