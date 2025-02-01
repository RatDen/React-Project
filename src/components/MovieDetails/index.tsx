import { fakeMovies } from '@/services/fakeMovies';

type Movie = {
  movieId: string;
};

export function MovieDetails({ movieId }: Movie) {
  const movie = fakeMovies.find((movie) => movie.id === movieId);
  console.log(movie);
  return (
    <>
      {!!movie ? (
        <div>
          <h1>{movie?.primaryTitle}</h1>
          <p>{movie?.description}</p>
        </div>
      ) : (
        <h2>Page not Found</h2>
      )}
    </>
  );
}
