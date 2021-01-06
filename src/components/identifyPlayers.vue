<template>
  <div>
    <input type="text" placeholder="player one" v-model="playerXName" />
    <input type="text" placeholder="player two" v-model="playerOName" />
    <button type="button" @click="getPlayer">
      START
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerXName: "",
      playerOName: "",
    };
  },
  methods: {
    getPlayer() {
      this.$emit("setPlayer", this.playerXName, this.playerOName);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
div input {
  padding: 5px;
  text-align: center;
  margin: 2px;
}
div button {
  margin: 10px 0;
  padding: 8px 40px;
  border: 0;
  border-radius: 17px;
  background-color: brown;
  color: aliceblue;
  font-size: 18px;
}
div button:hover {
  opacity: 0.9;
}
</style>
