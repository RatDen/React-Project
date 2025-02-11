import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const saveFavoritesToLocalStorage = (favorites: number[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const loadFavoritesFromLocalStorage = (): number[] => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

interface FavoriteState {
  favorites: number[];
}

const initialState: FavoriteState = {
  favorites: loadFavoritesFromLocalStorage(),
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
        saveFavoritesToLocalStorage(state.favorites);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
      saveFavoritesToLocalStorage(state.favorites);
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((id) => id !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
      saveFavoritesToLocalStorage(state.favorites);
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
