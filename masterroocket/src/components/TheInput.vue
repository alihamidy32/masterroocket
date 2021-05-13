<template>
  <div class="form-input">
    <i class="fa fa-search" @click="updateInput"></i>
    <input
      type="text"
      placeholder="دنبال چی میگردی ؟"
      id="search-input"
      v-model="search"
      :disabled="inputDisable"
      @keyup.enter="updateInput"
    />
    <i class="fa fa-close" v-if="visibleClose" @click="clearInput"></i>
    <i class="fa fa-spinner" v-if="visibleSpinner"></i>
  </div>
</template>

<script>
export default {
  props: ["inputDisable"],
  data() {
    return {
      search: "",
      visibleClose: false,
      visibleSpinner: false,
    };
  },
  methods: {
    updateInput() {
      this.$emit("show", this.search);
      setTimeout(() => {
        this.visibleSpinner = true;
      }, 1000);
      setTimeout(() => {
        this.visibleSpinner = false;
        this.visibleClose = true;
      }, 5000);
    },
    clearInput() {
      this.search = "";
      this.visibleClose = false;
    },
  },
};
</script>

<style scoped>
.form-input {
  position: relative;
}
#search-input {
  width: 37rem;
  height: 3.5rem;
  border-radius: 3rem;
  outline: none;
  font-size: 1.2rem;
  text-align: right;
  color: gray;
  background-color: rgba(165, 156, 156, 0.034);
  padding: 0 3rem;
  align-self: center;
}
.fa-search {
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  margin-top: 1rem;
  margin-right: 1.2rem;
}
.fa-close {
  /* display: none; */
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  left: 1rem;
  bottom: 1.2rem;
  margin-left: 0.8rem;
}
.fa-spinner {
  /* display: none; */
  font-size: 1.5rem;
  position: absolute;
  left: 0.5rem;
  bottom: 1.2rem;
  margin-left: 0.5rem;
}
</style>
