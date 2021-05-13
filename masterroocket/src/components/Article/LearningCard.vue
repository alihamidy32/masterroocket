<template>
  <article>
    <div class="card-container" v-for="(item, index) in items" :key="index">
      <div class="title">
        {{ item.title }}
      </div>
      <div class="titr">
        <a href="">
          {{ item.titr }}
        </a>
      </div>
      <div class="desc">
        {{ item.desc }}
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
article {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
}
.card-container {
  width: 100%;
  height: 15rem;
  border-radius: 2rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: rgb(65, 65, 4);
}
.title {
  background-color: rgba(128, 128, 128, 0.205);
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  color: white;
}
.titr a {
  text-decoration: none;
  color: white;
}
.titr a:hover {
  text-decoration: underline;
}
.desc {
  color: white;
  text-align: justify;
}

@media screen and (max-width: 80.125rem) {
  article {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
}

@media screen and (max-width: 45.125rem) {
  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
