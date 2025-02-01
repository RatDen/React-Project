const urlTop250 = 'https://imdb236.p.rapidapi.com/imdb/top250-movies';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'imdb236.p.rapidapi.com',
  },
};

export const getPopularMovies = async () => {
  const response = await fetch(urlTop250, options);
  if (!response.ok) {
    return new Error('Network response failed');
  }
  const result = await response.json(); // returns array of objects
  return result;
};

export const searchMovies = async (query: string) => {
  const response = await fetch(
    `https://imdb236.p.rapidapi.com/imdb/search?originalTitle=${encodeURIComponent(
      query
    )}&type=movie&rows=48&sortOrder=DESC&sortField=averageRating`,
    options
  );
  if (!response.ok) {
    return new Error('Network response failed');
  }
  const result = await response.json();
  return result.results; // returns array of objects
};
