<template>
  <v-card elevation="12" max-width="250" min-height="460" outlined>
    <v-container>
      <v-row>
        <router-link :to="{name: 'MovieDetail', params: { id: movie.id }}">
          <v-img :src="movie.url" max-height="400" max-width="250"></v-img>
        </router-link>
      </v-row>
      <v-row>
        <v-col cols="8">
          {{ movie.title }}
        </v-col>
        <v-col cols="4">
          <div class="rating">
            <span class="blue--text">{{ movie.rating }}</span>
            /10
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <p class="genre">Genre: {{ movie.genre }}</p>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="rating"
            :items="ratings"
            class="rateSelect"
            dense
            height="10"
            label="Rate it"
            solo
            @change="rateMovie"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Movie",
  props: ["movie"],
  data() {
    return {
      ratings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      rating: 0
    };
  },
  methods: {
    rateMovie() {
      console.log(this.movie.id);
      console.log(this.rating);
    }
  }
};
</script>

<style scoped>
.rating {
  font-size: 12px;
  display: flex;
  flex-direction: row;
}

.genre {
  font-size: 13px;
}

.v-select >>> label {
  font-size: 1em;
}

.rateSelect {
  font-size: 11px;
}

.blue {
  color: #76b8f4;
}
</style>
