<template>
  <div id="patientInfomation">
    <p id="patientName">{{ this.names.toUpperCase() }}</p>
    <p id="patientDateOfBirth">{{ this.dateOfBirth }}</p>
  </div>
</template>
<script>
import api from "@/data/api.js";

export default {
  props: ["id"],
  data() {
    return {
      names: "",
      dateOfBirth: "",
    };
  },
  mounted() {
    this.fetchPatientData();
  },
  methods: {
    async fetchPatientData() {
      try {
        const data = await api.getPatientDetails(this.id);
        this.names = data.names;
        this.dateOfBirth = data.dateOfBirth;
      } catch (err) {}
    },
  },
};
</script>
<style scoped>
#patientInfomation {
  padding: 15px;
  margin-bottom: 30px;
  background-color: #5ba9af;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px 0 #000000;
}
#patientInfomation p {
  text-align: center;
}
#patientName {
  font-size: 25px;
  margin: 0 0 10px 0;
}
#patientDateOfBirth {
  font-size: 18px;
  margin: 0;
}
</style>
