import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '@/shared/config';
import { Card } from '@/components/Cards/Card';
import styles from './styles.module.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useAppSelector, useAppDispatch } from '@/app/store';
import { fetchMovies } from '@/app/store/moviesSlice';

const CARD_WIDTH = 300;

export const Cards: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, movies.length - 1));
  };

  const movieCards = movies.map((movie) => ({
    id: movie.id,
    link: `${Routes.MOVIES}${movie.id}`,
    title: movie.media.title,
    rating: movie.ratings.imdb.score,
    year: movie.media.release_date.slice(0, 4),
    country: movie.media.origin_country,
    duration: movie.media.runtime,
    genre: movie.media.genres[0]?.name || 'Неизвестно', // Добавил fallback
    category: movie.media.media_type,
    image: `https://image.tmdb.org/t/p/w500${movie.media.poster_path}`,
  }));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Фильмы-новинки &#62;</h1>
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
            {movieCards.map(
              ({
                id,
                link,
                title,
                rating,
                year,
                country,
                duration,
                genre,
                category,
                image,
              }) => (
                <Link to={link} key={id}>
                  <Card
                    title={title}
                    rating={rating}
                    year={year}
                    country={country}
                    duration={duration}
                    genre={genre}
                    category={category}
                    image={image}
                  />
                </Link>
              )
            )}
          </div>
        </div>
        <button onClick={handleNext} className={styles.next}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
