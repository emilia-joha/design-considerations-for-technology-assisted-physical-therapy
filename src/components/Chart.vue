<template>
    <div class="chartContainer">
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
            const data = this.getAverageExercise();

            const config = {
                type: 'line',
                data: {
                datasets: [
                    {
                    data: data.map(row => row.step),
                    }],
                labels: data.map(row => row.date)
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                        display: false
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            }
            this.PatientHistory = new Chart(ctx, config)
    
        },
        getAverageExercise(){
            let exerciseList = []
            for (const key in this.patientExercises[0].PatientData){
                let red = 0;
                let yellow = 0;
                let green = 0;

                for (const joint in this.patientExercises[0].PatientData[key].Data){
                    let jointValue = this.patientExercises[0].PatientData[key].Data[joint]

                    if(jointValue == "Red"){
                        red ++
                    }else if(jointValue = "Yellow"){
                        yellow ++
                    }else {
                        green ++
                    }
                }

                let steps = 0;
                // There is 9 key joint in the exerciseData file
                if(red > 3){
                    steps = 1
                } else if (yellow >= 4 && yellow <=6){
                    steps = 2
                }else {
                    steps = 3
                }

                exerciseList.push({
                    date: this.patientExercises[0].PatientData[key].Date,
                    step: steps
                 })
            }
            return exerciseList
        }
    }
}
</script>
<style>
    .chartContainer {
        max-width: 800px;
    }
</style>