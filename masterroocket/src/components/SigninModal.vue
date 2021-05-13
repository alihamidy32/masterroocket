<template>
  <nav>
    <div class="container">
      <div class="top">
        <div class="right">
          <div class="modal-container">
            <brand-logo class="logo" />
            <h2 class="title">عضویت در راکت</h2>
            <p class="titr">
              شما می توانید تنها با استفاده از یکی از چهار راه زیر در راکت
              <a href="" class="link"> عضو </a>
              شوید.
            </p>
            <div class="button-container">
              <a href="" class="btn"> عضویت با جی میل </a>
              <a href="" class="btn"> عضویت با گیت هاب </a>
              <a href="" class="btn"> عضویت با یاهو </a>
              <a href="" class="btn"> عضویت با لینکدین </a>
            </div>
            <div class="close-btn">
              <a href="" class="btn"> بستن </a>
            </div>
          </div>
        </div>
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
nav {
  display: none;
}
.container {
  margin: 0;
  width: 45rem;
  height: 23rem;
  position: sticky;
  right: 33%;
  background-color: rgba(241, 230, 230, 0.842);
}
.top {
  width: 100%;
  padding: 0 3rem;
}
.modal-container {
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3rem 0;
}
.logo {
  align-self: center;
}
.title {
  font-family: "Vazir";
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
}
.titr {
  font-family: "Vazir";
}
.link {
  font-family: "Vazir";
  color: rgba(54, 46, 46, 0.801);
  font-weight: bolder;
}
.button-container {
  width: 88%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0.5rem 0;
}
.btn {
  padding: 0.6rem;
  cursor: pointer;
  text-decoration: none;
  color: white;
  border-radius: 8px;
}
.close-btn {
  align-self: flex-end;
}
</style>
