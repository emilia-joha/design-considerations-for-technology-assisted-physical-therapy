<template>
  <div id="video">
    <video ref="video" id="myVideo" class="video-js"></video>
  </div>
</template>
<script>
import videojs from "video.js";
import api from "@/data/api.js";

export default {
  props: ["id", "date"],
  data() {
    return {
      player: "",
      patientData: [],
      options: {
        fluid: true,
        autoplay: false,
        controls: true,
        sources: [],
      },
    };
  },
  mounted() {
    this.fetchVideoData();
  },
  unmounted() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    async fetchVideoData() {
      const apiData = await api.getExerciseSessions(this.id);
      const exerciseSession = apiData.find(
        (element) => element.startTimestamp.slice(0, 10) == this.date
      );
      const exercise = exerciseSession.exercises.find(
        (element) => element.type == "singleLeggedSquat"
      );

      this.src = URL.createObjectURL(exercise.videoId);

      this.player = videojs(this.$refs.video, {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: this.src,
            type: "video/webm",
          },
        ],
      });
    },
  },
};
</script>
<style scoped>
#video {
  margin: 10px;
}
#myVideo {
  height: 700px;
}
</style>
