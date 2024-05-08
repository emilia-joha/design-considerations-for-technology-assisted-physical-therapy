<template>
  <div id="notes">
    <h2>NOTES</h2>
    <Note
      @callDeleteMethod="deleteMethod"
      v-for="(note, i) in this.notes"
      :key="i"
      :noteText="note.note"
      :noteDate="note.date.slice(0, 10)"
    />
    <div v-if="isWrite" id="write">
      <textarea placeholder="Write note..." id="text"></textarea>
    </div>
    <button
      v-if="!isWrite"
      type="button"
      id="btnWrite"
      @click.prevent="write()"
    >
      ADD NOTE
    </button>
    <button v-if="isWrite" type="button" id="btnSave" @click.prevent="save()">
      SAVE
    </button>
  </div>
</template>
<script>
import api from "@/data/api.js";
import Note from "@/components/Note.vue";
import { inject, getCurrentInstance } from "vue";

export default {
  props: ["id", "notes", "timestamp"],
  components: {
    Note,
  },
  data() {
    return {
      isWrite: false,
      dataFromNote: "",
    };
  },
  setup() {
    const showPopup = inject("showPopup");
    const instance = getCurrentInstance();

    const deleteMethod = async (text, textDate) => {
      const result = await showPopup(
        "Are you sure you want to delete this note?"
      );
      if (result.isConfirmed) {
        const note = { note: text, date: textDate };
        await instance.proxy.delete(note);
      }
    };

    return { deleteMethod };
  },
  methods: {
    write() {
      this.isWrite = true;
    },
    async save() {
      const date = new Date().toISOString();
      const text = document.getElementById("text").value;
      this.isWrite = false;
      const note = { note: text, date: date };
      await api.addNote(this.id, this.timestamp, note);
      this.$forceUpdate();
    },
    async delete(note) {
      await api.deleteNote(this.id, this.timestamp, note);
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
  width: 300px;
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
