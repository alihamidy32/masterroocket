<template>
  <div class="container">
    <i class="fa fa-bars" @click="clickBars"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickBars() {
      this.$emit("openDrag", false);
    },
  },
};
</script>

<style scoped>
.fa-bars {
  font-size: 1.7rem;
  cursor: pointer;
}
</style>
