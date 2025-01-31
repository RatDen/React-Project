import React, { useState, useEffect } from 'react';
import Card from './Card';
import styles from './cards.module.css';

function Cards() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/movies.json')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
      })
      .catch((error) => {
        setError(error.message);
        console.error('Ошибка:', error);
      });
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.cardBlock}>
        <h1 className={styles.title}>Фильмы-новинки &#62;</h1>
        <div className={styles.cardContainer}>
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
    </div>
  );
}

export default Cards;
