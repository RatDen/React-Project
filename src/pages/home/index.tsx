import {
  useGetTopBoxOfficeMoviesQuery,
  useGetIndiaUpcomingMoviesQuery,
} from '@/services';
import { PromoSlider, Cards } from '@/shared/ui';
import { PromoSlides } from './content';

export function Home() {
  const { data: topBoxOfficeMovies } = useGetTopBoxOfficeMoviesQuery({});
  const { data: indiaUpcomingMovies } = useGetIndiaUpcomingMoviesQuery({});

  return (
    <>
      <PromoSlider content={PromoSlides} />

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

