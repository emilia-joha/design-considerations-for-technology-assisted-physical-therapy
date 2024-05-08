<template>
  <div class="note">
    <div>
      <button type="button" @click="callDeleteMethod" class="btnDelete">
        <div>
          <img src="@/assets/recycle-bin.png" />
        </div>
      </button>
    </div>
    <p class="text">{{ noteText }}</p>
    <p class="date">{{ noteDate }}</p>
  </div>
</template>
<script>
export default {
  props: ["noteText", "noteDate"],
  methods: {
    callDeleteMethod() {
      this.$emit("callDeleteMethod", this.noteText, this.noteDate);
    },
  },
};
</script>
<style scoped>
.note {
  margin: 10px 0;
  padding: 15px;
  box-shadow: 0 0 10px 0 #000000;
  border-radius: 15px;
  width: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.date {
  font-size: 12px;
  text-align: right;
}
.text {
  font-size: 14px;
  margin: 0;
}
.btnDelete {
  background-color: white;
  border: none;
  cursor: pointer;
  float: right;
  padding: 0;
}
.btnDelete img {
  width: 15px;
}
</style>
