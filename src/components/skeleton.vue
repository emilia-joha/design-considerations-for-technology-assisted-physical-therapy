<template>
  <div class="relative">
    <img src="@/assets/avatar.png" />
    <div class="smallCircle" id="neck"></div>
    <div class="bigCircle" id="shoulderRight"></div>
    <div class="bigCircle" id="shoulderLeft"></div>
    <div class="bigCircle" id="elbowRight"></div>
    <div class="bigCircle" id="elbowLeft"></div>
    <div class="smallCircle" id="handRight"></div>
    <div class="smallCircle" id="handLeft"></div>
    <div class="bigCircle" id="waist"></div>
    <div class="bigCircle" id="hipRight"></div>
    <div class="bigCircle" id="hipLeft"></div>
    <div class="bigCircle" id="kneeRight"></div>
    <div class="bigCircle" id="kneeLeft"></div>
    <div class="smallCircle" id="ankleRight"></div>
    <div class="smallCircle" id="ankleLeft"></div>
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
  width: 300px;
  box-shadow: 0 0 10px 0 #000000;
  border-radius: 15px;
}
img {
  height: 450px;
  margin: 10px;
}
#neck {
  top: 66px;
  left: 140px;
  display: none;
}
#shoulderRight {
  top: 90px;
  left: 82px;
  display: none;
}
#shoulderLeft {
  top: 90px;
  left: 182px;
  display: none;
}
#elbowRight {
  top: 163px;
  left: 83px;
  display: none;
}
#elbowLeft {
  top: 163px;
  left: 182px;
  display: none;
}
#handRight {
  top: 237px;
  left: 89px;
  display: none;
}
#handLeft {
  top: 237px;
  left: 190px;
  display: none;
}
#waist {
  top: 170px;
  left: 132px;
  display: none;
}
#hipRight {
  top: 214px;
  left: 113px;
  display: none;
}
#hipLeft {
  top: 214px;
  left: 153px;
  display: none;
}
#kneeRight {
  top: 324px;
  left: 118px;
  display: none;
}
#kneeLeft {
  top: 324px;
  left: 150px;
  display: none;
}
#ankleRight {
  top: 427px;
  left: 126px;
  display: none;
}
#ankleLeft {
  top: 427px;
  left: 153px;
  display: none;
}
.bigCircle {
  width: 31px;
  height: 31px;
  border-radius: 18px;
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
