<template>
  <nav>
    <div class="container" >
      <li class="list-item">
        <router-link class="router" :to="{ name: 'Home' }">
          صفحه اصلی
        </router-link>
      </li>
      <li class="list-item">
        <span class="title" @click="showNotif"> دوره های آموزشی </span>
        <div class="title-abr">
          <header-notif
          v-if="isActiveNotif" 
          @start="startJump"
           />
        </div>
      </li>
      <li class="list-item">بحث و گفتگوها</li>
      <li class="list-item">مقالات</li>
      <li class="list-item">راکت کست</li>
      <li class="list-item">رزومه ساز</li>
    </div>
  </nav>
</template>

<script>
import HeaderNotif from "./Article/HeaderNotif.vue";
export default {
 
  components: { HeaderNotif },
  data() {
    return {
      isActiveNotif: false,
    };
  },
  methods: {
    showNotif() {
      this.isActiveNotif = !this.isActiveNotif;
      
    },
    startJump() {
      this.$emit('jump' , true)
    },
  },
  watch: {
    isActiveNotif(nvalue, old) {
      console.log(nvalue, old);
      
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  margin: auto;
  background-color: rgba(32, 25, 58, 0.794);
}
.container {
  max-width: 95rem;
  padding: 0 2rem;
  margin: auto;
  display: flex;
  align-items: center;
}
.list-item {
  padding: 1rem;
  list-style: none;
  text-align: center;
  font-size: 1.5rem;
  color: rgb(238, 228, 228);
  text-decoration: none;
  list-style: none;
  font-size: 1rem;
  cursor: pointer;
}
.router {
  font-size: 1.5rem;
  color: rgb(238, 228, 228);
  text-decoration: none;
  list-style: none;
  font-size: 1rem;
  cursor: pointer;
}
.title-abr {
  margin-top: 1rem;
  width: 30rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  position: absolute;
}
</style>
