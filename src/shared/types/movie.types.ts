export interface Movie {
  id: string;
  primaryTitle: string;
  description: string;
  primaryImage: string;
  type?: string;
  averageRating: number;
  releaseDate?: string;
  runtimeMinutes?: number;
  genres?: string[];
  contentRating?: string;
  countriesOfOrigin?: string[];
}
