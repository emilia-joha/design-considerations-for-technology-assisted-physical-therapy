<template>
    <div class="container">
        <PatientInfo v-bind:id="id"/>
        <Chart v-bind:id="id"/>
        <button id="recordVideo" @click="changeView()">Record Exercise</button>
    </div>
</template>

<script>
import Chart from "@/components/Chart.vue"
import PatientInfo from "@/components/PatientInfo.vue"

export default {
    props: ['id'],
    components: {
        PatientInfo,
        Chart
    },
    methods: {
        changeView(){
            this.$router.push(`/RecordVideo/${id}`)
        }
    }
}
</script>
<style>
.container {
    display: flex;
    flex-direction: column;
}
button {
    width: fit-content;
    padding: 5px;
    cursor: pointer;
    margin: auto;
}
</style>