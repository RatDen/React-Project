import { Cards } from '@/components/Cards/Cards';
import {
  useGetTopBoxOfficeMoviesQuery,
  useGetIndiaUpcomingMoviesQuery,
} from '@/features/movies/moviesApiSlice';

export function HomePage() {
  const { data: topBoxOfficeMovies } = useGetTopBoxOfficeMoviesQuery({});
  const { data: indiaUpcomingMovies } = useGetIndiaUpcomingMoviesQuery({});

  return (
    <>
      {topBoxOfficeMovies ? (
        <Cards title='Советуем к просмотру' data={topBoxOfficeMovies} />
      ) : (
        <p>Loading...</p>
      )}
      {indiaUpcomingMovies ? (
        <Cards
          title='Самые ожидаемые фильмы в Индии'
          data={indiaUpcomingMovies}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
