<template>
  <div id="video">
    <video
      ref="video"
      id="myVideo"
      playsinline
      class="video-js vjs-default-skin"
    ></video>
    <div id="videoMenue">
      <button type="button" @click.prevent="play()" id="btnPlay">
        <div>
          <img src="@/assets/play-button.png" />
        </div>
      </button>
      <button type="button" @click.prevent="pause()" id="btnPause">
        <div>
          <img src="@/assets/pause.png" />
        </div>
      </button>
      <button type="button" @click.prevent="deleteRecord()" id="btnDelete">
        <div>
          <img src="@/assets/recycle-bin.png" />
        </div>
      </button>
    </div>
  </div>
</template>
<script>
import videojs from "video.js";
import api from "@/data/api.js";

import "video.js/dist/video-js.css";
import "videojs-record/dist/css/videojs.record.css";

export default {
  props: ["id", "date"],
  data() {
    return {
      player: "",
      patientData: [],
    };
  },
  mounted() {
    this.fetchVideoData();
  },
  unmounted() {
    if (this.player) {
      videojs("myVideo").dispose();
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
      this.patientData.push(exercise);

      if (exercise.videoId != "") {
        document.getElementById("video").style.display = "block";
        document.getElementById("btnPlay").style.display = "block";
        document.getElementById("btnDelete").style.display = "block";

        this.src = URL.createObjectURL(exercise.videoId);

        this.player = videojs(this.$refs.video, {
          autoplay: false,
          fluid: true,
          controls: false,
          bigPlayButton: false,
          aspectRatio: "9:16",
          sources: [
            {
              src: this.src,
              type: "video/webm",
            },
          ],
        });
      }
    },
    async deleteVideoData() {
      this.patientData.videoId = "";
    },
    play() {
      document.getElementById("btnPlay").style.display = "none";
      document.getElementById("btnPause").style.display = "block";
      this.player.play();
    },
    pause() {
      document.getElementById("btnPlay").style.display = "block";
      document.getElementById("btnPause").style.display = "none";
      this.player.pause();
    },
    deleteRecord() {
      this.deleteVideoData();
      document.getElementById("video").style.display = "none";
    },
  },
};
</script>
<style scoped>
#video {
  margin: 10px;
  display: none;
}
#myVideo {
  width: 100%;
  box-sizing: border-box;
}
.video-js {
  padding: 0;
}
#btnPause {
  display: none;
}
#videoMenue {
  display: flex;
  justify-content: center;
}
#videoMenue button {
  margin: 10px;
  width: 50px;
  height: 50px;
  background-color: inherit;
  border: none;
  font-size: 50px;
  cursor: pointer;
  display: none;
}
#videoMenue img {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#videoMenue div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
