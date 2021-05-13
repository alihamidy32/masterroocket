<template>
  <div class="form-button">
    <button class="signin">عضویت</button>
    <button class="login">ورود</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-button {
  display: flex;
  justify-content: space-between;
}
.signin {
  background-color: rgb(20, 135, 189);
  text-decoration: none;
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
