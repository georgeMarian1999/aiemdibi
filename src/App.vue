<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
  data: () => ({
    //
  })
};
</script>
<style>
* {
  font-family: 'Kanit', sans-serif;
}
</style>
