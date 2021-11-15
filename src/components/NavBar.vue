<template>
  <v-app-bar app color="black" dark>
    <div class="d-flex align-center">
      <router-link :to="{name: 'Home'}" class="siteTitle">
        <h4>AiEmDiBi</h4>
      </router-link>
    </div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="searchInput"
            class="searchInput"
            clearable
            height="25"
            hide-details="auto"
            label="Search by name"
            @input="searchByText"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-select
            v-model="selectedGenre"
            :items="genres.genres"
            class="searchInput"
            clearable
            dense
            height="25"
            label="Filter by genre"
            @change="filter"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "NavBar",
  computed: {
    genres() {
      return this.genres.genres;
    },
    ...mapState(["genres"])
  },
  data() {
    return {
      selectedGenre: "",
      searchInput: ""
    };
  },
  created() {
    this.$store.dispatch("genres/fetchGenres");
  },
  methods: {
    filter() {
      if (this.selectedGenre === null) {
        this.fetchMovies();
      } else {
        this.fetchFilterByGenre(this.selectedGenre);
      }
    },
    searchByText() {
      // debounce(() => {
      //   this.fetchMoviesBySearch(this.searchInput);
      // }, 1000);
      this.fetchMoviesBySearch(this.searchInput);
    },
    ...mapActions("movie", ["fetchMovies", "fetchFilterByGenre", "fetchMoviesBySearch"])
  }
};
</script>

<style scoped>
.searchInput {
  margin-top: 15px;
  height: 10px;
}

.siteTitle {
  text-decoration: none;
  color: white;
}
</style>