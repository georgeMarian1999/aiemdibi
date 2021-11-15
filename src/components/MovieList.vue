<template>
  <v-container>
    <v-row class="d-flex justify-start">
      <v-col v-for="movie in movies" v-bind:key="movie.id">
        <Movie v-bind:movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Movie from "@/components/Movie";

export default {
  name: "MovieList",
  props: ["movies"],
  components: { Movie }
};
</script>

<style scoped></style>
