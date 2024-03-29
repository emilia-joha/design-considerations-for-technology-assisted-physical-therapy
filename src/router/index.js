import { createRouter, createWebHistory } from "vue-router";

import History from "@/views/PatientHistory.vue";
import Patient from "@/views/Patient.vue";
import RecordVideo from "@/views/RecordVideo.vue";

import Info from "@/components/PatientInfo.vue";
import Chart from "@/components/Chart.vue";
import Video from "@/components/VideoRecorder.vue";
import Notes from "@/components/Notes.vue";
import Skeleton from "@/components/Skeleton.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";

const routes = [
  {
    path: "/PatientHistory/:id",
    components: { default: History, Chart, Info },
    props: true,
  },
  {
    path: "/Patient/:id/:date",
    components: { default: Patient, Info, Notes, Skeleton, VideoPlayer },
    props: true,
  },
  {
    path: "/RecordVideo/:id",
    components: { default: RecordVideo, Video, Info },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
