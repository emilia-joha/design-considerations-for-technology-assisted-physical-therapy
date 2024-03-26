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
  margin-top: 50px;
  position: relative;
}
img {
  max-width: 355px;
  margin: 10px;
}
#neck {
  top: 90px;
  left: 146px;
  display: none;
}
#shoulders {
  top: 111px;
  left: 111px;
  display: none;
}
#elbows {
  top: 111px;
  left: 224px;
  display: none;
}
#hands {
  top: 122px;
  left: 338px;
  display: none;
}
#waist {
  top: 190px;
  left: 46px;
  display: none;
}
#hip {
  top: 243px;
  left: 12px;
  display: none;
}
#knees {
  top: 342px;
  left: 111px;
  display: none;
}
#ankle {
  top: 476px;
  left: 90px;
  display: none;
}
#feet {
  top: 487px;
  left: 147px;
  display: none;
}
.bigCircle {
  width: 40px;
  height: 40px;
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
