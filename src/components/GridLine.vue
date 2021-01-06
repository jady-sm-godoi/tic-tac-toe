<template>
  <div class="linha">
    <grid-item
      :player="player"
      :num="g1"
      :reset="reset"
      :winner="winner"
      @getNumber="getNumber"
    />
    <grid-item
      :player="player"
      :num="g2"
      :reset="reset"
      :winner="winner"
      @getNumber="getNumber"
    />
    <grid-item
      :player="player"
      :num="g3"
      :reset="reset"
      :winner="winner"
      @getNumber="getNumber"
    />
  </div>
</template>

<script>
import GridItem from "./GridItem.vue";

export default {
  components: { GridItem },
  props: {
    g1: String,
    g2: String,
    g3: String,
    player: String,
    reset: Boolean,
    winner: String,
  },
  emits: ["getNumber"],
  computed: {},
  methods: {
    getNumber(num) {
      this.$emit("getNumber", num);
    },
  },
};
</script>

<style scoped>
.linha {
  display: flex;
  flex-direction: horizontal;
  align-content: center;
}
</style>
