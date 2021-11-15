<template>
  <v-container class="movieDetail" fluid>
    <v-row>
      <v-col cols="2">
        <SideBar />
      </v-col>
      <v-col cols="10">
        <MovieDetails :movie="movie.movie" :related="movie.related" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SideBar from "@/components/SideBar";
import MovieDetails from "@/components/MovieDetails";

export default {
  components: {
    SideBar,
    MovieDetails
  },
  name: "MovieDetail",
  props: ["id"],
  created() {
    this.update();
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.update();
      }
    }
  },
  computed: {
    ...mapState(["movie"])
  },
  methods: {
    update() {
      this.fetchMovieById(this.id);
      this.fetchRelatedMovies(this.id);
      window.scroll({
        behavior: "smooth",
        top: 0
      });
    },
    ...mapActions("movie", ["fetchMovieById", "fetchRelatedMovies"])
  }
};
</script>

<style scoped>
.movieDetail {
  background-color: #E9E9E9;
}
</style>