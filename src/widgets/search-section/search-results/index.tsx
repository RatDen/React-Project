import { Card } from '@/components/Cards/Card';
import { Link } from 'react-router-dom';
import { Routes } from '@/shared/config';
import styles from './styles.module.css';
import { Movie } from '@/shared/types/movie.types';
import { getYear } from '@/shared/utils/helperFunctions';

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
                title={movie.primaryTitle}
                image={movie.primaryImage}
                rating={movie.averageRating || undefined}
                year={getYear(movie.releaseDate)}
                country={
                  movie.countriesOfOrigin ? movie.countriesOfOrigin[0] : ''
                }
                duration={movie.runtimeMinutes || ''}
                genre={movie.genres ? movie.genres[0] : ''}
                category={movie.type || 'Фильм'}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
