<template>
    <div class="container">
        <canvas id="patientHistoryChart">
        </canvas>
    </div>
</template>

<script>
import { Chart } from 'chart.js/auto'
import patientExercises from '@/data/exerciseData.json'

export default {
    mounted (){
        this.historyChart()
    },
    data(){
        return {
            patientExercises
        }
    },
    methods: {
        historyChart (){
            const ctx = document.getElementById('patientHistoryChart')
            const config = {
                type: 'line',
                data: {
                datasets: [
                    {
                    data: this.getAverageExercise(),
                    }],
                labels: ""
                },
                options: {
                responsive: true,
                plugins: {
                    legend: {
                    display: false
                    }
                },
                scales: {
                    x: {
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Date',
                    }
                    },
                    y: {
                    type: 'linear',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Average',
                    }
                    }
                }
                }
            }
            this.PatientHistory = new Chart(ctx, config)
    
        },
        getAverageExercise(){
            console.log(this.patientExercises)
            for (const key in this.patientExercises[0].PatientData){
                console.log(this.patientExercises[0].PatientData[key].Data)
            }
            

        }
    }
}
</script>