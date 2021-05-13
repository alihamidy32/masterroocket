<template>
  <div class="container">
    <div class="card">
      <i class="fas fa-exclamation-circle"></i>
      <p class="title">لطفا ابتدا وارد سایت شوید</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  background-color: rgb(163, 40, 101);
  position: fixed;
  right: 0;
  width: 20rem;
  height: 4rem;
  animation-name: myanimation;
  animation-duration: 4s;
}
.card {
  display: flex;
  justify-content: space-between;
}
.title {
  margin: 1rem auto;
  color: white;
}
.fa-exclamation-circle {
  font-size: 3.1rem;
  margin: 0.4rem 0 0 0;
  color: white;
}

@keyframes myanimation {
  from {
    bottom: 5rem;
  }
  to {
    bottom: 1rem;
  }
}

@media screen and (max-width: 45.125rem) {
  .container {
    background-color: rgb(163, 40, 101);
    position: fixed;
    right: 0;
    width: 15rem;
    height: 4rem;
    animation-name: myanimation;
    animation-duration: 4s;
  }
  .title {
    font-size: 0.8rem;
    color: white;
  }
  .fa-exclamation-circle {
    font-size: 1.8rem;
    color: white;
  }
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
