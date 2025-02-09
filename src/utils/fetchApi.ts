import axios from 'axios';

export const baseUrl = 'https://imdb236.p.rapidapi.com';

export const fetchApi = (url: string) => {
  const response = axios.get(url, {
    headers: {
      'x-rapidapi-key': 'e2ebbd9940mshc63dc93c79e40efp17e07fjsnd2a11f9588a6',
      'x-rapidapi-host': 'imdb236.p.rapidapi.com',
    },
  });
};
