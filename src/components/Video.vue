<template>
  <div id="video">
    <video id="myVideo" playsinline class="video-js vjs-default-skin"></video>
    <div id="videoMenue">
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
      options: {
        controls: true,
        autoplay: false,
        fluid: true,
        loop: false,
        height: 700,
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
            videoEngine: "webm-wasm",
            videoWorkerURL: "../../node_modules/webm-wasm/dist/webm-worker.js",
            videoWebAssemblyURL: "webm-wasm.wasm",
          },
        },
      },
    };
  },
  unmounted() {
    videojs("myVideo").dispose();
  },
  mounted() {
    this.player = videojs("#myVideo", this.options, () => {
      // print version information at startup
      var msg =
        "Using video.js " +
        videojs.VERSION +
        " with videojs-record " +
        videojs.getPluginVersion("record") +
        " and recordrtc " +
        RecordRTC.version;
      videojs.log(msg);
    });

    this.player.on("deviceReady", () => {
      this.player.record().start();
    });

    this.player.on("finishRecord", () => {
      this.isSaveDisabled = false;
    });
  },
  methods: {
    startRecording() {
      this.player.record().getDevice();
      document.getElementById("btnStart").style.display = "none";
      document.getElementById("btnStop").style.display = "block";
    },
    stopRecording() {
      this.player.record().stopDevice();
      document.getElementById("btnStart").style.display = "block";
      document.getElementById("btnStop").style.display = "none";
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
<style>
#video {
  margin: 10px;
}
#myVideo {
  height: 700px;
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
</style>
