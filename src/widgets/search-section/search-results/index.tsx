import { Card } from '@/components/Card';
import { Movie } from '@/shared/hooks/useMovies';
import { Link } from 'react-router-dom';
import { Routes } from '@/shared/config';

type typeProps = {
  movies: Movie[];
};

export function SearchResults({ movies }: typeProps) {
  return (
    <div>
      <h2>Результаты поиска</h2>
      <div>
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
  );
}
