<template>
  <article>
    <div class="container">
      <div class="form-input">
        <input type="text" placeholder="دنبال چی میگردی ؟" id="input-menue" />
        <i class="fa fa-search"></i>
      </div>
      <li class="item" v-for="item in items" :key="item.value">
        {{ item }}
      </li>
    </div>
  </article>
</template>

<script>
export default {
  props: ["showDrag"],
  data() {
    return {
      items: [
        "صفحه اصلی",
        "ورود",
        "عضویت",
        "بحث و گفتگوها",
        "دوره های آموزشی",
        "آخرین ویدیو ها",
        "مقالات",
        "راکت کست",
        "کانال تلگرام",
        "رزومه ساز",
        "ارتباط با ما",
      ],
    };
  },
};
</script>

<style scoped>
article {
  max-width: 95rem;
  padding: 0 2rem;
  margin: auto;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.form-input {
  position: relative;
  max-width: 95rem;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid rgba(218, 211, 211, 0.774);
}
.form-input:hover {
  background-color: rgba(104, 156, 190, 0.103);
}
#input-menue {
  padding: 1rem 2.5rem;
  border: 0.5px solid rgba(218, 211, 211, 0.774);
  color: rgba(71, 67, 67, 0.582);
  width: 100%;
  font-size: 1rem;
  outline: none;
  border-radius: 0.5rem;
}
.fa-search {
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  margin: 1rem 1.7rem 0 0;
}
.item {
  padding: 1.2rem;
  border-bottom: 0.5px solid rgba(218, 211, 211, 0.774);
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.item:hover {
  background-color: rgba(104, 156, 190, 0.103);
}
</style>
