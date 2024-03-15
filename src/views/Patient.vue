<template>
  <div class="container">
    <PatientInfo v-bind:id="id" />
    <video-player v-bind:id="id" v-bind:date="date" />
    <Skeleton v-bind:id="id" />
    <Notes v-bind:id="id" />
  </div>
</template>

<script>
import PatientInfo from "@/components/PatientInfo.vue";
import Notes from "@/components/Notes.vue";
import Skeleton from "@/components/skeleton.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  props: ["id", "date"],
  components: {
    PatientInfo,
    VideoPlayer,
    Skeleton,
    Notes,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
