import { createRouter, createWebHistory } from "vue-router";
import History from "@/views/PatientHistory.vue";
import Chart from "@/components/Chart.vue";
import Patient from "@/views/Patient.vue";
import RecordVideo from "@/views/RecordVideo.vue";

const routes = [
  {
    path: "/PatientHistory/:id",
    components: { default: History, Chart },
  },
  { path: "/Patient/:id/:date", component: Patient },
  { path: "/RecordVideo/:id", component: RecordVideo },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
