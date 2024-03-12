<template>
  <div class="container">
    <PatientInfo v-bind:id="id" />
    <Notes v-bind:id="id" />
    <Skeleton v-bind:id="id" />
  </div>
</template>
<script>
import PatientInfo from "@/components/PatientInfo.vue";
import Notes from "@/components/Notes.vue";
import Skeleton from "@/components/skeleton.vue";

export default {
  props: ["id"],
  components: {
    PatientInfo,
    Notes,
    Skeleton,
  },
};
</script>
