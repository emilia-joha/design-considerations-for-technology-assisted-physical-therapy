<template>
  <div class="chartContainer">
    <div class="btnContainer">
      <button id="backwardInTime" @click="handleBackward()">&#10092;</button>
    </div>
    <div id="canvas">
      <canvas id="patientHistoryChart"></canvas>
    </div>
    <div class="btnContainer">
      <button id="forwardInTime" @click="handleForward()">&#10093;</button>
    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import api from "@/data/api.js";

export default {
  props: ["id"],
  mounted() {
    this.fetchExerciseData();
  },
  data() {
    return {
      patientExercises: [],
      index: 0,
    };
  },
  methods: {
    async fetchExerciseData() {
      try {
        const data = await api.getExerciseSessions(this.id);
        this.patientExercises = data;
        this.historyChart();
      } catch (err) {
        console.log("error");
      }
    },
    handleForward() {
      document.getElementById("backwardInTime").style.display = "block";
      if (this.index > 0) {
        this.index--;
        this.patientHistoryChart.destroy();
        this.historyChart();
        if (this.index == 0) {
          document.getElementById("forwardInTime").style.display = "none";
        }
      }
    },
    handleBackward() {
      document.getElementById("forwardInTime").style.display = "block";
      const listLength = this.patientExercises.length;
      if (this.index < listLength - 3) {
        this.index++;
        this.patientHistoryChart.destroy();
        this.historyChart();
      }
      if (this.index == listLength - 3) {
        document.getElementById("backwardInTime").style.display = "none";
      }
    },
    historyChart() {
      const ctx = document.getElementById("patientHistoryChart");
      const data = this.getAverageExercise();

      this.patientHistoryChart = new Chart(ctx, {
        type: "line",
        data: {
          datasets: [
            {
              borderColor: data.map((row) => row.color),
              backgroundColor: data.map((row) => row.color),
              data: data.map((row) => row.step),
              hoverRadius: "10",
              showLine: false,
              radius: "10",
            },
          ],
          labels: data.map((row) => row.date),
          color: "#000000",
        },
        options: {
          onClick: (e) => {
            const canvasPosition = getRelativePosition(e);

            // Substitute the appropriate scale IDs
            const dataX = this.patientHistoryChart.scales.x.getValueForPixel(
              canvasPosition.x
            );
            this.changeView(dataX, data);
          },
          onHover: (event, chartElement) => {
            event.native.target.style.cursor = chartElement[0]
              ? "pointer"
              : "default";
          },
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          scales: {
            y: {
              ticks: {
                stepSize: 1,
                color: "#000000",
                font: {
                  size: "14",
                  family: "'Roboto', sans-serif",
                },
              },
              suggestedMin: 1,
              suggestedMax: 3,
            },
            x: {
              ticks: {
                color: "#000000",
                font: {
                  size: "14",
                  family: "'Roboto', sans-serif",
                },
              },
            },
          },
        },
      });
    },
    getAverageExercise() {
      const newExerciseList = [];

      for (let i = 0; i < this.patientExercises.length; i++) {
        const exercises = this.patientExercises[i].exercises;

        for (const exercise of exercises) {
          const performance = exercise.performanceMetrics.color;
          const startTime = exercise.startTimestamp.slice(2, 10);

          let color = "";
          let steps = 0;
          if (performance == "red") {
            color = "#FF003D";
            steps = 1;
          } else if (performance == "yellow") {
            color = "#FFE601";
            steps = 2;
          } else if (performance == "green") {
            color = "#BAD900";
            steps = 3;
          }

          newExerciseList.push({
            date: startTime,
            step: steps,
            color: color,
          });
        }
      }
      let exerciseSplitList = newExerciseList
        .reverse()
        .slice(this.index, this.index + 3);

      return exerciseSplitList.reverse();
    },

    changeView(dataX, data) {
      const newData = data.map((row) => row.date);
      const date = newData[dataX];
      this.$router.push(`/Patient/${this.id}/${date}`);
    },
  },
};
</script>
<style scoped>
.chartContainer {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  box-shadow: 0 0 10px 0 #000000;
  border-radius: 15px;
  box-sizing: border-box;
}
#canvas {
  width: 80%;
}
#backwardInTime,
#forwardInTime {
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: 35px;
  margin: 10px;
  padding: 0;
  font-weight: bolder;
}
#forwardInTime {
  display: none;
}
.btnContainer {
  min-width: 30.8px;
  display: block;
}
</style>
