<template>
  <nav>
    <div class="container">
      <div class="page">
        <brand-logo />
        <div class="login-container">
          <div class="login-control"></div>
        </div>
        <p class="titr">
          با ورود و یا ثبت نام در راکت شما
          <a href="" class="link-titr"> شرایط و قوانین </a>
          استفاده از سرویس های سایت راکت را می پذیرید.
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
import BrandLogo from "./BrandLogo.vue";
export default {
  components: { BrandLogo },
};
</script>

<style scoped>
.container {
  background-color: rgba(241, 230, 230, 0.842);
  max-width: 95rem;
  padding: 0 2rem;
  margin: auto;
}
.page {
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.login-container {
  background-color: white;
  width: 35rem;
  height: 35rem;
}
</style>
