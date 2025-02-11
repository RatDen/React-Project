import { PromoSlider } from '@/shared/ui';
import { PromoSlides } from './content.js';

import { Cards } from '@/components/Cards/Cards';
import {
  useGetTopBoxOfficeMoviesQuery,
  useGetIndiaUpcomingMoviesQuery,
} from '@/features/movies/moviesApiSlice';

export function Home() {
  const { data: topBoxOfficeMovies } = useGetTopBoxOfficeMoviesQuery({});
  const { data: indiaUpcomingMovies } = useGetIndiaUpcomingMoviesQuery({});

  return (
    <>
      <PromoSlider content={PromoSlides} />

      {topBoxOfficeMovies ? (
        <Cards title='Советуем к просмотру' data={topBoxOfficeMovies} />
      ) : (
        <p>Загрузка...</p>
      )}
      {indiaUpcomingMovies ? (
        <Cards
          title='Самые ожидаемые фильмы в Индии'
          data={indiaUpcomingMovies}
        />
      ) : (
        <p>Загрузка...</p>
      )}
    </>
  );
}
