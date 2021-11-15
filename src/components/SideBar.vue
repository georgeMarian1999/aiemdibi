<template>
  <v-container
    class="sideBar d-flex flex-column justify-start align-center"
    fluid
  >
    <v-row v-if="!loggedIn">
      <div class="button">
        <span class="material-icons"> login </span>
        Login
      </div>
    </v-row>
    <v-row v-if="loggedIn">
      <div class="button">
        <span class="material-icons"> movie </span>
        Add movie
      </div>
    </v-row>
    <v-row v-if="loggedIn">
      <div class="button">
        <span class="material-icons"> logout </span>
        Logout
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SideBar",
  computed: {
    loggedIn() {
      return sessionStorage.getItem("crtUser") === undefined;
    }
  }
};
</script>

<style scoped>
.sideBar {
  background-color: #f8f9fb;
  height: 100vh;
}

.button {
  display: flex;
  max-height: 40px;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 15px;
  color: #03a9f5;
  cursor: pointer;
  align-items: center;
}
</style>
