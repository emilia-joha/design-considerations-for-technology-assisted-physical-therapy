<template>
  <div class="container">
    <PatientInfo v-bind:id="id" />
    <Chart v-bind:id="id" />
    <button id="recordVideo" @click="changeView()">
      <div>
        <img src="@/assets/video-camera.png" />
      </div>
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
  display: flex;
  flex-direction: column;
}
#recordVideo {
  width: fit-content;
  width: 60px;
  height: 60px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  margin: auto;
}
#recordVideo img {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#recordVideo div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
