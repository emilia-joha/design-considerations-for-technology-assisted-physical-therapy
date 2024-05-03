<template>
  <PatientInfo v-bind:id="id" />
  <div class="container">
    <Video v-bind:id="id" />
  </div>
</template>
<script>
import PatientInfo from "@/components/PatientInfo.vue";
import Video from "@/components/VideoRecorder.vue";

export default {
  props: ["id"],
  components: {
    PatientInfo,
    Video,
  },
  data() {
    return {};
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
</style>
