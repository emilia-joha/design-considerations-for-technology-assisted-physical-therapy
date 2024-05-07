<template>
  <header>
    <router-link v-bind:id="id" :to="`/PatientHistory/${this.id}`"
      >Chart</router-link
    >
  </header>
  <RouterView></RouterView>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
    };
  },
  mounted() {
    this.$router.push(`/PatientHistory/${this.id}`);
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
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
  max-width: 375px;
}
</style>
