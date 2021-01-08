import { GET_MOST_POPULAR_MOVIE } from '@/config/api';

export default {
  state: {
    movie: [],
  },
  getters: {
    getListOfMovie(state) {
      return state.movie;
    },
  },
  mutations: {
    SET_NEW_MOVIE(state, payload) {
      return state.movie.push(payload);
    },
  },
  actions: {
    async GET_POPULAR_MOVIE({ commit }) {
      try {
        const response = await GET_MOST_POPULAR_MOVIE();
        console.log(response, 'response');
        commit('SET_NEW_MOVIE', response.data.results);
      } catch (err) {
        console.log('error');
      }
    },
  },
};
