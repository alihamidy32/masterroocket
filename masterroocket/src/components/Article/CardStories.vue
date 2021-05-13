<template>
  <div class="card-container">
    <article v-for="(item, index) in items" :key="index">
      <div class="card">
        <div class="card-img">
          <img :src="item.image" class="img" />
          <div class="right">
            <p class="elm">تکمیل ضبط</p>
            <div class="left">
              <i class="fas fa-bell" @click="notifEvent"></i>
              <i class="fas fa-star" id="fa-star"></i>
            </div>
          </div>
        </div>
        <div class="special">
          <div class="ti-de">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="desc">
              {{ item.desc }}
            </div>
          </div>
          <div class="av-st">
            <i class="fa fa-star"></i>
            <div class="avail">
              {{ item.titr }}
            </div>
          </div>
          <div class="end-cart">
            <div class="right-hand">
              <div class="right-side">
                <div class="heart" :counter="counter">
                  {{ counter }}
                </div>
                <div class="like-heart">
                  <i class="fas fa-heart" @click="numLike"></i>
                </div>
              </div>
              <div class="clock">
                {{ item.clock }}
              </div>
              <div class="num-clock">
                <i class="fas fa-clock"></i>
              </div>
            </div>
            <div class="left-hand">
              {{ item.price }}
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    numberOfLike: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      counter: this.numberOfLike,
    };
  },
  methods: {
    numLike() {
      return (this.counter += 1);
    },
    notifEvent() {
      this.$emit("handleEvent", false);
    },
  },
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  border-radius: 1rem;
}
.card {
  background-color: white;
  border-radius: 1rem;
  height: 38rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: -2px 3px rgba(39, 38, 38, 0.109);
}
.card-img {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.img {
  width: 100%;
  height: 20rem;
  border-radius: 1.9rem;
  padding: 1rem;
  object-fit: cover;
}
.elm {
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 0.5rem 0.5rem 0 0;
  font-size: small;
  background-color: rgba(128, 128, 128, 0.856);
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
}
.fa-bell {
  color: white;
  font-size: 1.3rem;
  position: absolute;
  top: 1rem;
  left: 2.9rem;
  margin-top: 0.7rem;
  margin-left: 0.8rem;
  cursor: pointer;
}
#fa-star {
  font-size: 1.3rem;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  color: yellow;
  margin-top: 0.6rem;
}
.title {
  font-size: larger;
}
.title:hover {
  text-decoration: underline;
}
.ti-de {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.desc {
  max-width: 95rem;
  width: 100%;
  margin: 1rem auto;
  text-align: justify;
  font-size: small;
}
.av-st {
  display: flex;
  align-items: flex-start;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.avail {
  color: red;
  font-size: small;
  font-weight: bold;
  margin-right: 0.5rem;
}
.fa-star {
  color: red;
}
.end-cart {
  width: 100%;
  background-color: rgba(187, 187, 187, 0.267);
  padding: 1rem 1.3rem;
  border-radius: 8px 8px 18px 18px;
  display: flex;
  justify-content: space-between;
}
.like-heart {
  font-size: 1rem;
  color: rgb(255, 255, 255);
  margin-right: 0.5rem;
  cursor: pointer;
}
.like-heart:hover {
  color: red;
}
.num-clock {
  font-size: 1rem;
  color: rgb(56, 53, 53);
  margin-right: 0.5rem;
}
.right-hand,
.left-hand {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: small;
}
.right-side {
  margin-left: 0.5rem;
  display: flex;
  align-items: flex-start;
}

@media screen and (max-width: 80.125rem) {
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
}

@media screen and (max-width: 45.125rem) {
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
