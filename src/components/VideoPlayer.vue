<template>
  <div id="videoContainer" v-if="isVideo">
    <div id="video">
      <video
        ref="myVideo"
        id="myVideo"
        playsinline
        class="video-js vjs-default-skin"
      ></video>
      <div id="time">
        {{ display }}
        <div>{{ " " }}/{{ allTime }}</div>
      </div>
      <div id="videoMenue">
        <div id="empty"></div>
        <button
          type="button"
          @click.prevent="play()"
          id="btnPlay"
          v-if="!isPlaying"
        >
          <div>
            <img src="@/assets/play-button.png" />
          </div>
        </button>
        <button
          type="button"
          @click.prevent="pause()"
          id="btnPause"
          v-if="isPlaying"
        >
          <div>
            <img src="@/assets/pause.png" />
          </div>
        </button>
        <button type="button" @click="deleteRecord()" id="btnDelete">
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
import { inject, getCurrentInstance } from "vue";

export default {
  props: ["id", "exercise"],
  data() {
    return {
      player: "",
      isPlaying: false,
      isVideo: Boolean(this.exercise?.video?.videoId) || false,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      timer: 0,
      allTime: "",
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
  mounted() {
    if (this.isVideo) this.getVideoData();
  },
  unmounted() {
    if (this.player) {
      videojs("myVideo").dispose();
    }
  },
  setup() {
    const showPopup = inject("showPopup");
    const instance = getCurrentInstance();

    const deleteRecord = async () => {
      const result = await showPopup(
        "Are you sure you want to delete the video?"
      );
      if (result.isConfirmed) {
        await instance.proxy.deleteVideoData();
      }
    };

    return { deleteRecord };
  },
  methods: {
    getVideoData() {
      if (this.isVideo) {
        this.player = videojs(this.$refs.myVideo, {
          autoplay: false,
          controls: false,
          bigPlayButton: false,
          height: 470,
          width: 300,
          sources: [
            {
              src: URL.createObjectURL(this.exercise.video.blob),
              type: "video/webm",
            },
          ],
        });

        this.allTime = this.exercise.video.time;
      }
    },
    async deleteVideoData() {
      api.changeVideoId(this.id, this.exercise.startTimestamp, "");
      this.isVideo = false;
    },
    play() {
      this.player.play();
      this.isPlaying = true;
      this.stopWatch(true);
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
      this.stopWatch(false);
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
      if (this.isPlaying && this.allTime == this.display) {
        this.stopWatch();
        this.isPlaying = false;
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
  width: 100%;
  height: 470;
  box-sizing: border-box;
  border-radius: 15px 15px 0 0;
}
.video-js {
  padding: 0;
}
#videoMenue {
  display: flex;
  justify-content: center;
  background-color: #5ba9af;
  border-radius: 0 0 15px 15px;
}
#time {
  background-color: #36686b;
  display: flex;
  justify-content: center;
  padding: 5px;
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
