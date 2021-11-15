import MoviesService from "@/services/MoviesService";

export const namespaced = true;

export const state = {
  movies: [],
  movie: {},
  related: []
};

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies;
  },
  SET_MOVIE(state, movie) {
    state.movie = movie;
  },
  SET_RELATED(state, movies) {
    state.related = movies;
  }
};

export const actions = {
  fetchMovies({ commit }) {
    MoviesService.getMovies()
      .then((response) => {
        commit("SET_MOVIES", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchMovieById({ commit, getters }, id) {
    let movie = getters.getMovieById(id);

    if (movie) {
      commit("SET_MOVIE", movie);
    } else {
      MoviesService.getMovie(id)
        .then((response) => {
          commit("SET_MOVIE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  fetchRelatedMovies({ commit }, id) {
    MoviesService.getRelated(id)
      .then((response) => {
        commit("SET_RELATED", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchFilterByGenre({ commit }, genre) {
    MoviesService.getByGenre(genre)
      .then((response) => {
        commit("SET_MOVIES", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  fetchMoviesBySearch({ commit }, term) {
    MoviesService.searchMovie(term)
      .then((response) => {
        commit("SET_MOVIES", response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }
};

export const getters = {
  getMovieById: state => id => {
    return state.movies.find(movie => movie.id === id);
  }
};