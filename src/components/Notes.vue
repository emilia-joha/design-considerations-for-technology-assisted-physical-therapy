<template>
  <div id="notes">
    <h2>Notes</h2>
    <div v-for="note in this.exercise.notes">
      <div class="note">
        <p class="text">{{ note.note }}</p>
        <p class="date">{{ note.date.slice(0, 10) }}</p>
      </div>
    </div>
    <div id="write">
      <textarea id="text"></textarea>
    </div>
    <button type="button" id="btnWrite" @click.prevent="write()">
      Add Note
    </button>
    <button type="button" id="btnSave" @click.prevent="save()">Save</button>
  </div>
</template>
<script>
import api from "@/data/api.js";
export default {
  props: ["id", "exercise"],
  mounted() {},
  methods: {
    write() {
      document.getElementById("write").style.display = "block";
      document.getElementById("btnWrite").style.display = "none";
      document.getElementById("btnSave").style.display = "block";
    },
    save() {
      const date = new Date().toISOString();
      const text = document.getElementById("text").value;
      document.getElementById("write").style.display = "none";
      document.getElementById("btnWrite").style.display = "block";
      document.getElementById("btnSave").style.display = "none";
      const note = { note: text, date: date };
      api.addNote(this.id, this.exercise.startTimestamp, note);
    },
  },
};
</script>
<style scoped>
#notes {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
}

h2 {
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
}
.note {
  margin: 10px;
  padding: 10px;
  border: solid black 1px;
  width: 300px;
}
.date {
  font-size: 12px;
  text-align: right;
}
.text {
  font-size: 14px;
}
button {
  background-color: black;
  border: none;
  color: white;
  font-size: 18px;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0 0 10px 0 #000000;
}
#write {
  display: none;
}
#btnSave {
  display: none;
}
textarea {
  width: 300px;
  padding: 10px;
  border-color: black;
  border-width: 1px;
  border-style: solid;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}
textarea:focus {
  outline: none !important;
}
</style>
