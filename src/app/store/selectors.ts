import { RootState } from "./index";

export const selectFavoriteIds = (state: RootState) => state.favorite.favorites;