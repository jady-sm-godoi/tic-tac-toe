<template>
  <button @click="getNumber" :disabled="winner || used">{{ option }}</button>
</template>

<script>
export default {
  data() {
    return {
      option: "",
      used: false,
    };
  },
  props: {
    player: String,
    num: String,
    reset: Boolean,
    winner: String,
  },
  watch: {
    reset() {
      this.option = "";
      this.used = false;
    },
  },
  methods: {
    getNumber() {
      this.option = this.player === "player1" ? "X" : "O";
      this.used = true;
      this.$emit("getNumber", this.num);
    },
  },
};
</script>

<style scoped>
button {
  width: 80px;
  height: 80px;
  border: 2px white solid;
  color: white;
  font-size: 32pt;
  background-color: var(--color-background);
}
</style>
