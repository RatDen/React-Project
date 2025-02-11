import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './';

const API_URL = import.meta.env.REACT_APP_API_URL;
const API_KEY = import.meta.env.REACT_APP_API_KEY;
const API_HOST = import.meta.env.REACT_APP_API_HOST;
const movies_storage = 'movies_last_fetch';

export interface Movie {
  title: string;
  rating: number;
  year: number;
  country: string;
  duration: number;
  genre: string;
  category: string;
  image: string;
}

interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: [],
};

export const fetchMovies = createAsyncThunk<
  Movie[],
  void,
  { state: RootState }
>(
  'movies/fetchMovies',
  async (_, thunkAPI) => {
    const response = await fetch(`${API_URL}?id=tt0111161`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY || '',
        'x-rapidapi-host': API_HOST || '',
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка при получении данных с API');
    }

    const data = await response.json();

    return [data];
  },
  {
    condition: (_, { getState }) => {
      const state = getState();

      if (state.movies.movies.length > 0) {
        const lastFetch = localStorage.getItem(movies_storage);
        if (lastFetch) {
          const lastFetchTime = parseInt(lastFetch, 10);
          const now = Date.now();
          const hoursPassed = (now - lastFetchTime) / (1000 * 60 * 60);

          if (hoursPassed < 24) {
            console.log('Данные уже загружены, обновление не требуется.');
            return false;
          }
        }
      }
    },
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default moviesSlice.reducer;
