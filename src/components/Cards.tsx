import React, { FC, useState } from 'react';
import { Card } from './Card';
import styles from './cards.module.css';
import { useMovies } from './useMovies';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export const Cards: FC = () => {
  const { movies, error, loading } = useMovies();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cardWidth = 300;

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
    <>
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
                transform: `translateX(-${currentIndex * cardWidth}px)`,
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              {movies.map((movie) => (
                <Card
                  key={movie.id}
                  title={movie.title}
                  rating={movie.rating}
                  year={movie.year}
                  country={movie.country}
                  duration={movie.duration}
                  genre={movie.genre}
                  category={movie.category}
                  image={movie.image}
                />
              ))}
            </div>
          </div>
          <button onClick={handleNext} className={styles.next}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};
