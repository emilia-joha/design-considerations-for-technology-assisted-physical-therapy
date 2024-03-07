<template>
    <div id="patientInfomation">
        <p>{{this.names}}</p>
        <p>{{this.dateOfBirth}}</p>
    </div>
</template>
<script>
import api from '@/data/api.js'

export default {
    props: ['id'],
    data(){
        return {
            names : "",
            dateOfBirth : ""
        }
    },
    mounted(){
        this.fetchPatientData()
    },
    methods: {
        async fetchPatientData(){
           try {
            const data = await api.getPatientDetails(this.id);
            this.names = data.names;
            this.dateOfBirth = data.dateOfBirth;
           }
           catch (err){

           }
            
        }
    }
}
</script>
<style>
    #patientInfomation p {
        text-align: center;
    }
</style>