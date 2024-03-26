<template>
  <div class="relative">
    <img src="@/assets/skeleton-one-legged-squat.png" />
    <div class="smallCircle" id="neck"></div>
    <div class="bigCircle" id="shoulders"></div>
    <div class="bigCircle" id="elbows"></div>
    <div class="smallCircle" id="hands"></div>
    <div class="bigCircle" id="waist"></div>
    <div class="bigCircle" id="hip"></div>
    <div class="bigCircle" id="knees"></div>
    <div class="bigCircle" id="ankle"></div>
    <div class="smallCircle" id="feet"></div>
  </div>
</template>
<script>
export default {
  props: ["id", "exercise"],
  mounted() {
    this.drawCircles();
  },
  methods: {
    drawCircles() {
      const perJointPerformance =
        this.exercise.performanceMetrics.perJointPerformance;

      for (const joint of perJointPerformance) {
        document.getElementById(joint.jointName).style.display = "block";
        if (joint.color == "red") {
          document.getElementById(joint.jointName).style.backgroundColor =
            "#FF003D";
        } else if (joint.color == "yellow") {
          document.getElementById(joint.jointName).style.backgroundColor =
            "#FFE601";
        } else if (joint.color == "green") {
          document.getElementById(joint.jointName).style.backgroundColor =
            "#BAD900";
        }
      }
    },
  },
};
</script>
<style scoped>
div {
  display: none;
}
.relative {
  margin-top: 50px;
  position: relative;
  display: block;
}
img {
  max-width: 400px;
  margin: 10px;
}
#neck {
  top: 95px;
  left: 158px;
}
#shoulders {
  top: 122px;
  left: 120px;
}
#elbows {
  top: 122px;
  left: 250px;
}
#hands {
  top: 132px;
  left: 371px;
}
#waist {
  top: 215px;
  left: 42px;
}
#hip {
  top: 268px;
  left: 0px;
}
#knees {
  top: 377px;
  left: 120px;
}
#ankle {
  top: 532px;
  left: 97px;
}
#feet {
  top: 542px;
  left: 167px;
}
.bigCircle {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 0;
  position: absolute;
}
.smallCircle {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 0;
  position: absolute;
}
</style>
