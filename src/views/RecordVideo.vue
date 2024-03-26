<template>
  <div class="container">
    <PatientInfo v-bind:id="id" />
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
