<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-img
          :src="movie.url"
          max-width="300"></v-img>
      </v-col>
      <v-col class="movieInformation" cols="8">
        <v-row>
          <div>
            <h1>{{ movie.title }}</h1>
            <p><b>Genre: {{ movie.genre }}</b></p>
          </div>
        </v-row>
        <v-row>
          <div>
            <p>{{ movie.description }}</p>
          </div>
        </v-row>
        <v-row>
          <div class="ratingContainer">
            <div class="rating"><p class="blue--text">{{ movie.rating }}</p>/10</div>
            <v-select
              :items="items"
              clearable
              dense
              label="Rate it"
              outlined
            ></v-select>
          </div>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="related">
      <h2 class="relatedText">Related</h2>
      <MovieList :movies="related" />
    </v-row>
  </v-container>
</template>

<script>
import MovieList from "@/components/MovieList";

export default {
  name: "MovieDetails",
  components: { MovieList },
  props: ["movie", "related"],
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  }

};
</script>

<style scoped>
.related {
  margin-top: 20px;
}

.relatedText {
  margin-left: 10px
}

.movieInformation {
  margin-top: 30px;
}

.rating {
  display: flex;
  font-size: 30px;
  flex-direction: row;
  margin-right: 25px;
}

.ratingContainer {
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
}
</style>