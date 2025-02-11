import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
  favorites: number[];
}

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(id => id !== action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(id => id !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
