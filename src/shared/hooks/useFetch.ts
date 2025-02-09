import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://imdb236.p.rapidapi.com/imdb/autocomplete',
  params: { query: 'break' },
  headers: {
    'x-rapidapi-key': 'e2ebbd9940mshc63dc93c79e40efp17e07fjsnd2a11f9588a6',
    'x-rapidapi-host': 'imdb236.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
