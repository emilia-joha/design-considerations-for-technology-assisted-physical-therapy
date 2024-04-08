<template>
  <div id="notes">
    <h2>Notes</h2>
    <div v-for="note in this.exercise.notes">
      <div class="note">
        <p class="text">{{ note.note }}</p>
        <p class="date">{{ note.date.slice(0, 10) }}</p>
      </div>
    </div>
    <button>Add Note</button>
  </div>
</template>
<script>
export default {
  props: ["id", "exercise"],
  mounted() {},
  methods: {},
};
</script>
<style>
#notes {
  display: flex;
  align-items: center;
  flex-direction: column;
}

h2 {
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
}
.note {
  margin: 10px;
  padding: 10px;
  border: solid black 2px;
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
}
</style>
