import { GET_MOST_POPULAR_MOVIE, GET_MOVIE_DETAILS } from '@/config/api';

export default {
  state: {
    movies: [],
    movie: [],
  },
  getters: {
    getListOfMovie(state) {
      return state.movies;
    },
    getMovieById(state) {
      return state.movie;
    },
  },
  mutations: {
    SET_NEW_MOVIE(state, payload) {
      return state.movies.push(payload);
    },
    SET_MOVIE_BY_ID(state, payload) {
      // eslint-disable-next-line no-return-assign
      return state.movie = payload;
    },
  },
  actions: {
    async GET_POPULAR_MOVIE({ commit }) {
      try {
        const response = await GET_MOST_POPULAR_MOVIE();
        commit('SET_NEW_MOVIE', response.data.results);
      } catch (err) {
        console.log('error');
      }
    },

    async GET_MOVIE_BY_ID({ commit }, id) {
      try {
        console.log(id, 'from GET BY ID');
        const response = await GET_MOVIE_DETAILS(id);
        commit('SET_MOVIE_BY_ID', response.data);
      } catch (err) {
        console.error('Error');
      }
    },
  },
};
