<template>
  <header>
    <router-link to="/PatientHistory">Chart</router-link>
    <router-link to="/Patient">Patient</router-link>
    <router-link to="/RecordVideo">Record Video</router-link>
  </header>
  <RouterView></RouterView>
</template>

<script setup>

</script>

<style>
body {
  margin: 0;
}
#app {
  margin:auto;
}
header {
  background-color: black;
  color: white;
  text-align: center;
  box-sizing: border-box;
}
a{
  color: white;
  text-decoration: none;
  padding: 14px;
}

.container {
  background-color: white;
}

</style>
