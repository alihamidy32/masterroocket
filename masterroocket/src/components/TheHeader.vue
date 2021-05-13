<template>
  <header>
    <div class="upper">
      <div class="container">
        <ul class="side">
          <li class="list-item">
            <router-link
              class="router ch-head"
              :to="{ name: 'TelegramChanel' }"
            >
              کانال تلگرام</router-link
            >
          </li>
          <li class="list-item">
            <router-link class="router ab-head" :to="{ name: 'AboutRoocket' }">
              درباره راکت
            </router-link>
          </li>
          <li class="item">
            <router-link class="router ho-head" :to="{ name: 'Home' }">
              همکاری با ما
            </router-link>
          </li>
        </ul>
        <ul class="side">
          <li class="list-item">
            <router-link class="router qu-head" to="/">
              سوالات متداول</router-link
            >
          </li>
          <li class="item">
            <router-link class="router co-head" to="/">
              ارتباط با ما</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <hr />
  </header>
</template>

<script>
export default {};
</script>
<style scoped>
.upper {
  max-width: 95rem;
  margin: auto;
  padding: 0 2rem;
}
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
hr {
  color: gray;
  opacity: 0.2;
}
.router {
  font-size: 1.5rem;
  color: gray;
  text-decoration: none;
  list-style: none;
  font-size: 1rem;
  cursor: pointer;
}
.list-item {
  padding: 1rem 0 1rem 1rem;
  list-style: none;
  text-align: center;
}
.item {
  padding: 1rem 0;
  list-style: none;
  text-align: center;
}
.side {
  display: flex;
  justify-content: space-between;
  padding: 0;
}
.middle {
  max-width: 95rem;
  margin: auto;
  padding: 0 2rem;
}
.form-control {
  padding: 1.3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form-input {
  position: relative;
}
#search-input {
  width: 37rem;
  height: 3.5rem;
  border-radius: 3rem;
  outline: none;
  font-family: "Vazir";
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
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  left: 1rem;
  bottom: 1.2rem;
  margin-left: 0.8rem;
}
.fa-spinner {
  display: none;
  font-size: 1.5rem;
  position: absolute;
  left: 0.5rem;
  bottom: 1.2rem;
  margin-left: 0.5rem;
}
.form-button {
  display: flex;
  justify-content: space-between;
}
.signin {
  background-color: rgb(20, 135, 189);
  text-decoration: none;
  font-family: "Vazir";
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 8px 20px;
  margin-left: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
}
.signin:hover {
  background-color: blue;
  color: white;
}

.login {
  background-color: rgb(244, 249, 252);
  color: rgb(24, 23, 23);
  text-align: center;
  padding: 8px 20px;
  text-decoration: none;
  font-family: "Vazir";
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
}
.login:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}
</style>
