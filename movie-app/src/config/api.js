import axios from 'axios';

const DEFAULT_URL = process.env.VUE_APP_API_URL;
const API_KEY = process.env.VUE_APP_API_KEY;

function buildUrl(url) {
  return `${DEFAULT_URL + url}?api_key=${API_KEY}&language=en-US&page=1`;
}

// eslint-disable-next-line import/prefer-default-export
export const GET_MOST_POPULAR_MOVIE = () => axios.get(buildUrl('movie/popular'));
