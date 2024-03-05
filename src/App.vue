<template>
  <header>
    <router-link :to="`/PatientHistory/${this.id}`">Chart</router-link>
  </header>
  <RouterView></RouterView>
</template>

<script>
import patient from '@/data/patientInformation.json'

export default {
    data(){
        return {
            id: patient[0].ID
        }
    },
  }
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
