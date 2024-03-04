<template>
    <div class="chartContainer">
        <button id="backwardInTime"><</button>
        <canvas id="patientHistoryChart">
        </canvas>
        <button id="forwardInTime">></button>
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
                    onHover: (event, chartElement) => {
                        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
                    },
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                        enabled: false,
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
            let newExerciseList = []
            let exerciseObj = this.patientExercises[0].PatientData
            const listLength =  Object.keys(exerciseObj).length

            exerciseObj = Object.entries(exerciseObj).slice(listLength -5, listLength ).map(entry => entry[1]);
            console.log(exerciseObj)
            for (const key in exerciseObj){
                let red = 0;
                let yellow = 0;
                let green = 0;

                for (const joint in exerciseObj[key].Data){
                    let jointValue = exerciseObj[key].Data[joint]

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

                newExerciseList.push({
                    date: exerciseObj[key].Date,
                    step: steps,
                    color: color
                 })
            }
            return newExerciseList
        },
        changeView(dataX, data){
            const newData = data.map(row => row.date)
            const date = newData[dataX]
            console.log(date)
            this.$router.push(`/Patient/${date}`)
        }
    }
}
</script>
<style>
    .chartContainer {
        padding: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #backwardInTime, #forwardInTime{
        font-size: 40px;
        background-color: inherit;
        border: none;
        cursor: pointer;
        padding: 10px;
    }
</style>