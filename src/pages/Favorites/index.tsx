import { useMemo } from 'react';
import { useAppSelector } from '@/app/store';
import { RootState } from '@/app/store';
import { Cards } from '@/shared/ui/cards';
import {
  useGetTopBoxOfficeMoviesQuery,
  useGetIndiaUpcomingMoviesQuery,
} from '@/services';

export function Favorites() {
  const {
    data: topBoxOfficeMovies,
    isLoading,
    error,
  } = useGetTopBoxOfficeMoviesQuery({});
  const { data: IndiaUpcomingMovies } = useGetIndiaUpcomingMoviesQuery({});
  const favoriteIds = useAppSelector((state) => state.favorite.favorites);

  const favoriteMovies = useMemo(() => {
    if (!topBoxOfficeMovies || !IndiaUpcomingMovies) return [];

    const allMovies = [...topBoxOfficeMovies, ...IndiaUpcomingMovies];

    return allMovies.filter((movie) => favoriteIds.includes(movie?.id));
  }, [topBoxOfficeMovies, IndiaUpcomingMovies, favoriteIds]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='favorite-movies'>
      {favoriteMovies.length > 0 ? (
        <Cards title='Избранное' data={favoriteMovies} />
      ) : (
        <h1>Нет избранных фильмов</h1>
      )}
    </div>
  );
}
