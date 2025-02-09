import { Card } from '@/components/Card';
import { Movie } from '@/shared/hooks/useMovies';
import { Link } from 'react-router-dom';
import { Routes } from '@/shared/config';
import styles from './styles.module.css';

type typeProps = {
  movies: Movie[];
};

export function SearchResults({ movies }: typeProps) {
  return (
    <div className={styles.results_wrapper}>
      <h2 className={styles.results_title}>Результаты поиска</h2>
      <ul className={styles.results_cards}>
        {movies.map((movie) => (
          <li className={styles.results_item} key={movie.id}>
            <Link to={`${Routes.MOVIES}${movie.id}`}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}
