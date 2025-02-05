import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '@/shared/config';
import { Card } from './Card';
import styles from './cards.module.css';
import { useMovies } from './useMovies';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const CARD_WIDTH = 300;

export const Cards: FC = () => {
  const { movies, error, loading } = useMovies();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (loading) {
    return <p className={styles.loading}>Загрузка...</p>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, movies.length - 1));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Фильмы-новинки &#62;</h1>
      {error && <p className={styles.error}>Ошибка: {error}</p>}
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
            {movies.map((movie) => (
              <Link to={`${Routes.MOVIES}${movie.id}`} key={movie.id}>
                <Card
                  title={movie.title}
                  rating={movie.rating}
                  year={movie.year}
                  country={movie.country}
                  duration={movie.duration}
                  genre={movie.genre}
                  category={movie.category}
                  image={movie.image}
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
