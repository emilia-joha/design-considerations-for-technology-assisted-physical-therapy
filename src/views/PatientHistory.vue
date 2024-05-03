<template>
  <PatientInfo v-bind:id="id" />
  <div class="container">
    <Chart v-bind:id="id" />
    <button id="recordVideo" @click="changeView()">
      <p>RECORD VIDEO</p>
      <img src="@/assets/video-camera.png" />
    </button>
  </div>
</template>

<script>
import Chart from "@/components/Chart.vue";
import PatientInfo from "@/components/PatientInfo.vue";

export default {
  props: ["id"],
  components: {
    PatientInfo,
    Chart,
  },
  methods: {
    changeView() {
      this.$router.push(`/RecordVideo/${this.id}`);
    },
  },
};
</script>
<style scoped>
.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 375px;
}
#recordVideo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5ba9af;
  border: none;
  font-size: 18px;

  margin: 10px 0;
  cursor: pointer;
  box-shadow: 0 0 10px 0 #000000;
  border-radius: 15px;
  width: 300px;
  height: 40px;
}
#recordVideo img {
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
}
#recordVideo p {
  margin: 0;
}
</style>
