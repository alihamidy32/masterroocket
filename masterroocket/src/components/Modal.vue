<template>
  <div class="modal" v-if="show">
    <div class="modal-container">
      <i class="fas fa-close" @click="closeModal"></i>
      <div class="modal-error">
        <p class="error">
          <slot name="title">title</slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
  },
};
</script>

<style scoped>
.modal {
  width: 25rem;
  height: 10rem;
  background-color: rgba(170, 170, 80, 0.342);
  border-radius: 1rem;
  position: relative;
  top: 50%;
  right: 42%;
  z-index: 100;
}
.modal-container {
  padding: 0 2rem;
  position: relative;
}
.fa-close {
  font-size: 1.5rem;
  position: absolute;
  top: 1.5rem;
  right: 3rem;
  cursor: pointer;
}
.error {
  font-size: 1rem;
  font-weight: bolder;
  text-align: justify;
  padding: 4.2rem 0.2rem;
}
</style>
