<template>
  <div class="container">
    <PatientInfo v-bind:id="id" />
    <video-player :options="videoOptions" />
    <Skeleton v-bind:id="id" />
    <Notes v-bind:id="id" />
  </div>
</template>

<script>
import PatientInfo from "@/components/PatientInfo.vue";
import Notes from "@/components/Notes.vue";
import Skeleton from "@/components/skeleton.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import api from "@/data/api.js";

export default {
  props: ["id", "date"],
  components: {
    PatientInfo,
    VideoPlayer,
    Skeleton,
    Notes,
  },
  data() {
    return {
      patientData: [],
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [],
      },
    };
  },
  mounted() {
    this.fetchVideoData();
  },
  methods: {
    async fetchVideoData() {
      try {
        const apiData = await api.getExerciseSessions(this.id);
        const exerciseSession = apiData.find(
          (element) => element.startTimestamp.slice(0, 10) == this.date
        );
        const exercise = exerciseSession.exercises.find(
          (element) => element.type == "singleLeggedSquat"
        );
        this.patientData = exercise;
        this.getVideoLink();
      } catch (err) {
        console.log("error");
      }
    },
    getVideoLink() {
      console.log(this.patientData.videoId.name);
      this.sources.append({
        src: this.patientData.videoId.name,
        type: "video/webm",
      });
      console.log(this.sources.src);
    },
  },
};
</script>
