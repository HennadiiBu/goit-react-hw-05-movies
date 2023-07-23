import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const key = 'bb7e126d2686992af4848a036ba19fca';
const mediaType = 'movie';
const timeWindow = 'day';

const BASE_URL_IMAGE = () => {
  return 'https://image.tmdb.org/t/p/w500';
};

const fetchTrendingDayMovie = async () => {
  try {
    const responce = await axios(
      `${BASE_URL}trending/${mediaType}/${timeWindow}?api_key=${key}`
    );
    return responce.data;
  } catch (message) {
    return console.log(message);
  }
};

const fetchSearchQueryMovie = async query => {
  try {
    const responce = await axios(
      `${BASE_URL}search/movie?query=${query}&api_key=${key}`
    );
    return responce.data;
  } catch (message) {
    return console.log(message);
  }
};

const fetchDetailsMovie = async id => {
  try {
    const responce = await axios(
      `${BASE_URL}movie/${id}?api_key=${key}`
    );
    return responce.data;
  } catch (message) {
    return console.log(message);
  }
};

const fetchCreditsMovie = async id => {
  try {
    const responce = await axios(
      `${BASE_URL}movie/${id}/credits?api_key=${key}`
    );
    return responce.data;
  } catch (message) {
    return console.log(message);
  }
};

const fetchReviewsMovie = async id => {
  try {
    const responce = await axios(
      `${BASE_URL}movie/${id}/reviews?api_key=${key}`
    );
    return responce.data;
  } catch (message) {
    return console.log(message);
  }
};

const apiTheMovieDB = {
  fetchTrendingDayMovie,
  fetchSearchQueryMovie,
  fetchDetailsMovie,
  fetchCreditsMovie,
  fetchReviewsMovie,
  BASE_URL_IMAGE,
};

export default apiTheMovieDB;
