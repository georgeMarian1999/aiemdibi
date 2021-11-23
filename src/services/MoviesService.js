import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:8083`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getGenres() {
    return apiClient.get("/genres");
  },
  getMovies() {
    return apiClient.get("/movies");
  },
  getMovie(id) {
    return apiClient.get("/movies/" + id);
  },
  getRelated(id) {
    return apiClient.get("/related/" + id);
  },
  getByGenre(genre) {
    return apiClient.get("/genre/" + genre);
  },
  searchMovie(text) {
    return apiClient.get("/search?term=" + text);
  }
};