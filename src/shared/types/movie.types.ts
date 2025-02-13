export interface Movie {
  id: string;
  url: string;
  primaryTitle: string;
  description: string;
  primaryImage: string;
  type?: string;
  averageRating?: number;
  releaseDate?: string;
  runtimeMinutes?: number | null;
  genres?: string[] | null;
  contentRating?: string;
  countriesOfOrigin?: string[];
  isAdult?: boolean;
}
