<template>
  <div id="videoContainer">
    <div id="video">
      <video
        ref="video"
        id="myVideo"
        playsinline
        class="video-js vjs-default-skin"
      ></video>
      <div id="videoMenue">
        <div id="empty"></div>
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
  </div>
</template>
<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-record/dist/css/videojs.record.css";
import api from "@/data/api.js";

export default {
  props: ["id", "exercise"],
  data() {
    return {
      player: "",
    };
  },
  mounted() {
    this.getVideoData();
  },
  unmounted() {
    if (this.player) {
      videojs("myVideo").dispose();
    }
  },
  methods: {
    getVideoData() {
      if (this.exercise.videoId != "") {
        document.getElementById("video").style.display = "block";
        document.getElementById("btnPlay").style.display = "block";
        document.getElementById("btnDelete").style.display = "block";

        this.player = videojs(this.$refs.video, {
          autoplay: false,
          controls: false,
          bigPlayButton: false,
          height: 470,
          width: 300,
          sources: [
            {
              src: this.exercise.videoId,
              type: "video/webm",
            },
          ],
        });
      }
    },
    async deleteVideoData() {
      api.changeVideoId(this.id, this.exercise.startTimestamp, "");
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
#videoContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
  width: 300px;
  box-shadow: 0 0 10px 0 #000000;
  border-radius: 15px;
}
#video {
  width: 300px;
  display: none;
}
#myVideo {
  width: 100%;
  height: 470;
  box-sizing: border-box;
  border-radius: 15px 15px 0 0;
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
  background-color: #5ba9af;
  border-radius: 0 0 15px 15px;
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
#empty {
  width: 50px;
  margin: 10px;
}
#btnDelete img {
  width: 30px;
}
#videoMenue div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
