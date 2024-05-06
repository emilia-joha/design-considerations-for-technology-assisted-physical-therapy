<template>
  <div id="videoContainer">
    <div id="video">
      <video
        ref="myVideo"
        id="myVideo"
        playsinline
        class="video-js vjs-default-skin"
      ></video>
      <div id="time">
        {{ display }}
        <div v-if="allTime && isReplaying">{{ " " }}/{{ allTime }}</div>
      </div>
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
        <button
          type="button"
          @click.prevent="startRecording()"
          id="btnStart"
          v-if="!isRecording"
        >
          <div>
            <img src="@/assets/play-button.png" />
          </div>
        </button>
        <button
          type="button"
          @click.prevent="stopRecording()"
          id="btnStop"
          v-if="isRecording"
        >
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
      isReplaying: false,
      isRecording: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      timer: 0,
      allTime: 0,
    };
  },
  computed: {
    display() {
      return (
        this.formatTime(this.hours) +
        ":" +
        this.formatTime(this.minutes) +
        ":" +
        this.formatTime(this.seconds)
      );
    },
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
        height: 470,
        width: 300,
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
      this.isRecording = true;
      this.isReplayDisabled = true;
      this.isReplaying = false;
      this.allTime = 0;
      this.stopWatch(true);
    },
    stopRecording() {
      this.isSaveDisabled = false;
      this.isReplayDisabled = false;
      this.player.record().stopDevice();
      this.isRecording = false;

      this.allTime =
        this.formatTime(this.hours) +
        ":" +
        this.formatTime(this.minutes) +
        ":" +
        this.formatTime(this.seconds);

      this.stopWatch(false);
    },
    replayRecording() {
      this.isReplaying = true;
      const data = (this.src = URL.createObjectURL(this.player.recordedData));
      this.player.src = data;
      this.player.play();
      this.stopWatch(true);
    },
    submitVideo() {
      this.isSaveDisabled = true;
      const recordData = this.player.recordedData;
      const date = new Date().toISOString();
      api.postExerciseSession(this.id, recordData, date, this.allTime);
      this.changeView(date);
    },
    changeView(date) {
      date = date.slice(2, 10);
      this.$router.push(`/Patient/${this.id}/${date}`);
    },
    stopWatch(start) {
      if (start) {
        this.reset();
        this.timer = setInterval(this.updateTimer, 1000);
      } else {
        clearInterval(this.timer);
      }
    },
    reset() {
      clearInterval(this.timer);
      this.milliseconds = 0;
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
    },
    updateTimer() {
      if (this.isReplaying && this.allTime == this.display) {
        this.stopWatch();
        return;
      }

      this.milliseconds += 1000;
      if (this.milliseconds >= 1000) {
        this.seconds++;
        this.milliseconds -= 1000;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
          if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
          }
        }
      }
    },
    formatTime(time) {
      return time < 10 ? "0" + time : time;
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
}
#myVideo {
  box-sizing: border-box;
  width: 100%;
  border-radius: 15px 15px 0 0;
}
#time {
  background-color: #36686b;
  display: flex;
  justify-content: center;
  padding: 5px;
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
}
#videoMenue img {
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#btnStart img,
#btnStop img {
  width: 50px;
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
