<template>
  <div class="chartContainer">
    <div class="btnContainer">
      <button id="backwardInTime" @click="handleBackward()">&#10096;</button>
    </div>
    <canvas id="patientHistoryChart"></canvas>
    <div class="btnContainer">
      <button id="forwardInTime" @click="handleForward()">&#10097;</button>
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
        console.log(data);
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
              },
              suggestedMin: 1,
              suggestedMax: 3,
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
          const startTime = exercise.startTimestamp.slice(0, 10);

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
<style>
.chartContainer {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#backwardInTime,
#forwardInTime {
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: 40px;
}
#forwardInTime {
  display: none;
}
.btnContainer {
  min-width: 29.42px;
  display: block;
}
</style>
