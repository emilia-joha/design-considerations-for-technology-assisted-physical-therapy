import { createRouter, createWebHistory } from "vue-router";
import History from "@/views/PatientHistory.vue";
import Patient from "@/views/Patient.vue";
import RecordVideo from "@/views/RecordVideo.vue";

const routes = [
  { path: "/PatientHistory", name: "Patient History", component: History },
  { path: "/Patient", name: "Patient", component: Patient },
  { path: "/RecordVideo", name: "Record Video", component: RecordVideo },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
