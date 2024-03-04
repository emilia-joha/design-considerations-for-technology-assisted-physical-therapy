import { createRouter, createWebHistory } from "vue-router";
import History from "@/views/PatientHistory.vue";
import Chart from "@/components/Chart.vue";
import Patient from "@/views/Patient.vue";
import RecordVideo from "@/views/RecordVideo.vue";

const routes = [
  {
    path: "/PatientHistory",
    components: { default: History, Chart },
  },
  { path: "/Patient/:date", component: Patient },
  { path: "/RecordVideo", component: RecordVideo },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
