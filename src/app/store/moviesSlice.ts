import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './';

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
    const response = await fetch(
      'https://movies-ratings2.p.rapidapi.com/ratings?id=tt0111161',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            '326e010410msh7d07b6604f96fa0p1aa5c2jsn6ede76cfc93f',
          'x-rapidapi-host': 'movies-ratings2.p.rapidapi.com',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Ошибка при получении данных с API');
    }

    const data = await response.json();
    console.log(data);

    return [data];
  },
  {
    condition: (_, { getState }) => {
      const state = getState();

      if (state.movies.movies.length > 0) {
        const lastFetch = localStorage.getItem('movies_last_fetch');
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
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
    addMovie(state, action: PayloadAction<Movie>) {
      state.movies.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const { setMovies, addMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
