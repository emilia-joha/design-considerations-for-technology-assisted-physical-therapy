<template>
    <div class="chartContainer">
        <canvas id="patientHistoryChart">
        </canvas>
    </div>
</template>

<script>
import { Chart } from 'chart.js/auto'
import { getRelativePosition } from 'chart.js/helpers';
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
            

            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [
                    {
                        borderColor: data.map(row => row.color),
                        backgroundColor: data.map(row => row.color),
                        data: data.map(row => row.step),
                        hoverRadius: "10",
                        showLine: false,
                        radius: "10",
                    }],
                    labels: data.map(row => row.date)
                },
                options: {
                    onClick: (e) => {
                        const canvasPosition = getRelativePosition(e);

                        // Substitute the appropriate scale IDs
                        const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
                        this.changeView(dataX, data) 
                    },
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                    },
                    scales: {
                        y: {
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
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
                let color = ""
                // There is 9 key joint in the exerciseData file
                if(red > 3){
                    steps = 1
                    color = "#FF003D"
                } else if (yellow >= 4 && yellow <=6){
                    steps = 2
                    color = "#FFE601"
                }else {
                    steps = 3
                    color = "#BAD900"
                }

                exerciseList.push({
                    date: this.patientExercises[0].PatientData[key].Date,
                    step: steps,
                    color: color
                 })
            }
            return exerciseList
        },
        changeView(dataX, data){
            const newData = data.map(row => row.date)
            const date = newData[dataX]
        }
    }
}
</script>
<style>
    .chartContainer {
        max-width: 800px;
        margin: auto;
        padding: 50px;
    }
</style>