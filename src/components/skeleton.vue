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
.relative {
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  justify-content: center;
}
img {
  width: 300px;
  margin: 10px;
}
#neck {
  top: 77px;
  left: 149px;
  display: none;
}
#shoulders {
  top: 95px;
  left: 121px;
  display: none;
}
#elbows {
  top: 95px;
  left: 214px;
  display: none;
}
#hands {
  top: 103px;
  left: 313px;
  display: none;
}
#waist {
  top: 169px;
  left: 60px;
  display: none;
}
#hip {
  top: 207px;
  left: 31px;
  display: none;
}
#knees {
  top: 286px;
  left: 122px;
  display: none;
}
#ankle {
  top: 401px;
  left: 104px;
  display: none;
}
#feet {
  top: 411px;
  left: 152px;
  display: none;
}
.bigCircle {
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin: 0;
  position: absolute;
}
.smallCircle {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin: 0;
  position: absolute;
}
</style>
