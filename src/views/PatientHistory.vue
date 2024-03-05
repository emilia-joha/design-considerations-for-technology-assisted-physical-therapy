<template>
    <div class="container">
        <Chart />
        <button id="recordVideo" @click="changeView()">Record Exercise</button>
    </div>
</template>

<script>
import Chart from "@/components/Chart.vue"

export default {
    components: {
        Chart
    },
    methods: {
        changeView(){
            this.$router.push(`/RecordVideo/${this.$route.params.id}`)
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