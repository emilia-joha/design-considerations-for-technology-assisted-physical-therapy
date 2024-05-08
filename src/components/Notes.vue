<template>
  <div id="notes">
    <h2>NOTES</h2>
    <Note
      v-for="(note, i) in this.notes"
      :key="i"
      :noteText="note.note"
      :notedate="note.date.slice(0, 10)"
    />
    <div id="write">
      <textarea id="text"></textarea>
    </div>
    <button type="button" id="btnWrite" @click.prevent="write()">
      ADD NOTE
    </button>
    <button type="button" id="btnSave" @click.prevent="save()">SAVE</button>
  </div>
</template>
<script>
import api from "@/data/api.js";
import Note from "@/components/Note.vue";
export default {
  props: ["id", "notes", "timestamp"],
  components: {
    Note,
  },
  methods: {
    write() {
      document.getElementById("write").style.display = "block";
      document.getElementById("btnWrite").style.display = "none";
      document.getElementById("btnSave").style.display = "block";
    },
    async save() {
      const date = new Date().toISOString();
      const text = document.getElementById("text").value;
      document.getElementById("text").value = "";
      document.getElementById("write").style.display = "none";
      document.getElementById("btnWrite").style.display = "block";
      document.getElementById("btnSave").style.display = "none";
      const note = { note: text, date: date };

      await api.addNote(this.id, this.timestamp, note);
      this.$forceUpdate();
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
  width: 300px;
}
h2 {
  margin: 0;
  font-size: 25px;
  font-weight: inherit;
}
.note {
  margin: 10px 0;
  padding: 15px;
  box-shadow: 0 0 10px 0 #000000;
  border-radius: 15px;
  width: 300px;
  box-sizing: border-box;
}
.date {
  font-size: 12px;
  text-align: right;
}
.text {
  font-size: 14px;
}
button {
  background-color: #5ba9af;
  border: none;
  font-size: 18px;
  padding: 10px 30px;
  margin: 10px 0;
  cursor: pointer;
  box-shadow: 0 0 10px 0 #000000;
  border-radius: 15px;
  width: 300px;
}
#write {
  display: none;
  width: 300px;
}
#btnSave {
  display: none;
}
textarea {
  width: 300px;
  box-sizing: border-box;
  padding: 15px;
  margin: 10px 0;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  border: none;
  box-shadow: 0 0 10px 0 #000000;
  border-radius: 15px;
}
textarea:focus {
  outline: none !important;
}
</style>
