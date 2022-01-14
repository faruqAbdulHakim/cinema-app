import CONFIGURATION from './configuration';

const API_ENDPOINT = {
  getMovieGenres: `${CONFIGURATION.API_BASE_URL}/genre/movie/list?api_key=${CONFIGURATION.API_KEY}`,
  getMoviesByGenre: (genreId, page) => `${CONFIGURATION.API_BASE_URL}/discover/movie?api_key=${CONFIGURATION.API_KEY}&with_genres=${genreId}&page=${page}`,
  getMovieImage: (posterpath) => `https://image.tmdb.org/t/p/w500${posterpath}`,
};

export default API_ENDPOINT;
