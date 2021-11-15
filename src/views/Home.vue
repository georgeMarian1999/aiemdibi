<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <SideBar />
      </v-col>
      <v-col cols="10">
        <MovieList :movies="movie.movies" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideBar from "@/components/SideBar";
import MovieList from "@/components/MovieList";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    MovieList,
    SideBar
  },
  created() {
    this.$store.dispatch("movie/fetchMovies");
  },
  computed: {
    ...mapState(["movie"])
  }

};
</script>
