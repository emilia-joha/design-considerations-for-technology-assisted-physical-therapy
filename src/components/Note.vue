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
.date {
  font-size: 12px;

  text-align: right;
}
.text {
  font-size: 14px;
  margin: 0;
}
</style>
