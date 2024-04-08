<template>
  <div id="patientInfomation">
    <p id="patientName">{{ this.names }}</p>
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
  margin: 10px;
}
#patientInfomation p {
  text-align: center;
  margin: 10px;
}
#patientName {
  font-size: 20px;
}
</style>
