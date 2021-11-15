import MoviesService from "@/services/MoviesService";

export const namespaced = true;

export const state = {
  genres: []
};

export const mutations = {
  SET_GENRES(state, genres) {
    state.genres = genres;
  }
};

export const actions = {
  fetchGenres({ commit }) {
    MoviesService.getGenres()
      .then((res) => {
        commit("SET_GENRES", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
