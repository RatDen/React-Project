import {
  API_KEY,
  API_HOST,
  API_URL_BASE,
  TOPBOX_OFFICE_URL,
  INDIA_UPCOMING_URL,
} from '@/shared/config/constants';
import { Movie } from '@/shared/types/movie.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApiSlice = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL_BASE,
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', API_KEY);
      headers.set('x-rapidapi-host', API_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getTopBoxOfficeMovies: builder.query<Movie[], {}>({
        query: () => TOPBOX_OFFICE_URL,
      }),
      getIndiaUpcomingMovies: builder.query<Movie[], {}>({
        query: () => INDIA_UPCOMING_URL,
      }),
      searchMovies: builder.query<Movie[], {}>({
        query: (searchQuery) => `autocomplete?query=${searchQuery}`,
      }),
      getSingleMovie: builder.query<Movie, {}>({
        query: (movieId) => `${movieId}`,
      }),
    };
  },
});

export const {
  useGetTopBoxOfficeMoviesQuery,
  useSearchMoviesQuery,
  useGetSingleMovieQuery,
  useGetIndiaUpcomingMoviesQuery,
} = moviesApiSlice;
