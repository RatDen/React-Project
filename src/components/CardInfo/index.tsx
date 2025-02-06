import { useMovies } from '@/shared/hooks/useMovies';

type Movie = {
  movieId: number;
};

export function CardInfo({ movieId }: Movie) {
  const { movies, error, loading } = useMovies();
  const movie = movies.find((movie) => movie.id === movieId);
  return (
    <>
      {!!movie ? (
        <div>
          <h1>{movie.title}</h1>
          <ul>
            <li>{movie.rating}</li>
            <li>{movie.year}</li>
            <li>{movie.genre}</li>
            <li>{movie.country}</li>
            <li>{movie.duration}</li>
            <li>{movie.category}</li>
          </ul>
        </div>
      ) : (
        <div>
          <h2>Page not Found</h2>
          <p>Нет такого фильма</p>
        </div>
      )}
    </>
  );
}
