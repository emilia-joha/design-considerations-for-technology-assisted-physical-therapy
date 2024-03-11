<template>
  <PatientInfo v-bind:id="id"/>
  <Video v-bind:id="id"/>
</template>
<script>
import PatientInfo from "@/components/PatientInfo.vue"
import Video from "@/components/Video.vue"

export default {
    props: ['id'],
    components: {
        PatientInfo,
        Video
    }
}
</script>
