<template>
  <header>
    <router-link v-bind:id="id" :to="`/PatientHistory/${this.id}`"
      >Chart</router-link
    >
  </header>
  <div class="viewContainer">
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}
header {
  background-color: black;
  color: white;
  text-align: center;
  box-sizing: border-box;
}
a {
  color: white;
  text-decoration: none;
  padding: 14px;
}

.viewContainer {
  background-color: white;
  margin: auto;
  box-sizing: border-box;
  max-width: 700px;
}
</style>
