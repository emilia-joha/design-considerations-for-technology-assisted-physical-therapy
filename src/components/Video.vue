<template>
  <div id="video">
    <video
      ref="myVideo"
      id="myVideo"
      playsinline
      class="video-js vjs-default-skin"
    ></video>
    <div id="videoMenue">
      <button
        type="button"
        @click.prevent="replayRecording()"
        v-bind:disabled="isReplayDisabled"
        id="btnReplay"
      >
        <div>
          <img src="@/assets/replay.png" />
        </div>
      </button>
      <button type="button" @click.prevent="startRecording()" id="btnStart">
        <div>
          <img src="@/assets/play-button.png" />
        </div>
      </button>
      <button type="button" @click.prevent="stopRecording()" id="btnStop">
        <div>
          <img src="@/assets/stop-button.png" />
        </div>
      </button>
      <button
        type="button"
        @click.prevent="submitVideo()"
        v-bind:disabled="isSaveDisabled"
        id="btnSave"
      >
        <div>
          <img src="@/assets/diskette.png" />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import "videojs-record/dist/css/videojs.record.css";
import videojs from "video.js";
import "webrtc-adapter";
import Record from "videojs-record/dist/videojs.record.js";
import RecordRTC from "recordrtc";
import "@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js";
import WebmWasmEngine from "videojs-record/dist/plugins/videojs.record.webm-wasm.js";
import api from "@/data/api.js";

export default {
  props: ["id"],
  data() {
    return {
      player: "",
      isSaveDisabled: true,
      isReplayDisabled: true,
    };
  },
  unmounted() {
    videojs("myVideo").dispose();
  },
  mounted() {
    this.setPlayer();

    this.player.on("deviceReady", () => {
      this.player.record().start();
    });
  },
  methods: {
    setPlayer() {
      this.player = videojs(this.$refs.myVideo, {
        fluid: true,
        aspectRatio: "9:16",
        controls: false,
        autoplay: false,
        bigPlayButton: false,
        controlBar: {
          deviceButton: false,
          recordToggle: false,
          pipToggle: false,
          volumePanel: false,
        },
        plugins: {
          record: {
            maxLength: 180,
            audio: false,
            video: true,
            debug: false,
            videoWorkerURL: "../../node_modules/webm-wasm/dist/webm-worker.js",
            videoWebAssemblyURL: "webm-wasm.wasm",
          },
        },
      });
    },
    startRecording() {
      this.player.record().getDevice();
      document.getElementById("btnStart").style.display = "none";
      document.getElementById("btnStop").style.display = "block";
    },
    stopRecording() {
      this.isSaveDisabled = false;
      this.isReplayDisabled = false;
      this.player.record().stopDevice();
      document.getElementById("btnStart").style.display = "block";
      document.getElementById("btnStop").style.display = "none";
    },
    replayRecording() {
      const data = (this.src = URL.createObjectURL(this.player.recordedData));
      this.player.src = data;
      this.player.play();
    },
    submitVideo() {
      this.isSaveDisabled = true;
      const recordData = this.player.recordedData;
      const date = new Date().toISOString();
      api.postExerciseSession(this.id, recordData, date);
      this.changeView(date);
    },
    changeView(date) {
      date = date.slice(0, 10);
      this.$router.push(`/Patient/${this.id}/${date}`);
    },
  },
};
</script>
<style scoped>
#video {
  margin: 10px;
  max-width: 1920px;
}
#myVideo {
  width: 100%;
  box-sizing: border-box;
}
#btnStop {
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
.video-js {
  padding: 0;
}
</style>
