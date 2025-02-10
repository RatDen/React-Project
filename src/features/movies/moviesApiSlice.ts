import { API_KEY, API_HOST } from '@/shared/config/constants';
import { Movie } from '@/shared/types/movie.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApiSlice = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://imdb236.p.rapidapi.com/imdb/',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', API_KEY);
      headers.set('x-rapidapi-host', API_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getMovies: builder.query<Movie[], {}>({
        query: () => 'top250-movies',
      }),
      searchMovies: builder.query<Movie[], {}>({
        query: (searchQuery) => `autocomplete?query=${searchQuery}`,
      }),
    };
  },
});

export const { useGetMoviesQuery, useSearchMoviesQuery } = moviesApiSlice;
