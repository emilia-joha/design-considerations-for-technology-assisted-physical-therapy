<template>
  <div class="container">
    <PatientInfo v-bind:id="id" />
    <VideoPlayer v-bind:id="id" v-if="done" v-bind:exercise="exercise" />
    <Skeleton v-bind:id="id" v-if="done" v-bind:exercise="exercise" />
    <Notes v-bind:id="id" v-if="done" v-bind:exercise="exercise" />
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
      exercise: this.fetchData(),
      done: false,
    };
  },
  methods: {
    async fetchData() {
      const apiData = await api.getExerciseSessions(this.id);
      const exerciseSession = apiData.find(
        (element) => element.startTimestamp.slice(0, 10) == this.date
      );
      const exercise = exerciseSession.exercises.find(
        (element) => element.type == "singleLeggedSquat"
      );
      this.exercise = exercise;
      this.done = true;
    },
  },
};
</script>
