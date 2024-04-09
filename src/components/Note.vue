<template>
  <div class="note">
    <p class="text">{{ noteText }}</p>
    <p class="date">{{ notedate }}</p>
  </div>
</template>
<script>
export default {
  props: ["noteText", "notedate"],
};
</script>
<style scoped>
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
</style>
