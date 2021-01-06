<template>
  <div id="grid">
    <grid-line
      g1="1"
      g2="2"
      g3="3"
      :player="player"
      :reset="reset"
      :winner="winner"
      @getNumber="getNumber"
    ></grid-line>
    <grid-line
      g1="4"
      g2="5"
      g3="6"
      :player="player"
      :reset="reset"
      :winner="winner"
      @getNumber="getNumber"
    ></grid-line>
    <grid-line
      g1="7"
      g2="8"
      g3="9"
      :player="player"
      :reset="reset"
      :winner="winner"
      @getNumber="getNumber"
    ></grid-line>
  </div>
</template>

<script>
export default {
  props: { player: String, reset: Boolean, winner: String },
  emits: ["getNumber"],
  methods: {
    getNumber(num) {
      this.$emit("getNumber", num);
    },
  },
};
</script>
