<template>
  <article>
    <div class="article">
      <div class="container">
        <div class="control">
          <div class="story">
            <div class="title-story">
              <h1 class="title">
                {{ id.title1 }}
              </h1>
            </div>
            <div class="titr-story">
              <a href="" class="titr">
                {{ id.title2 }}
              </a>
            </div>
          </div>
          <card-stories :items="posts" @handleEvent="showNotif" />
          <notif v-if="notification" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Notif from "../Notif.vue";
import CardStories from "./CardStories.vue";
export default {
  components: { CardStories, Notif },

  data() {
    return {
      notification: false,
      id: {
        title1: "جدیدترین دوره ها",
        title2: "مشاهده همه دوره ها",
      },
      posts: [
        {
          title: " آموزش composer",
          desc:
            "در آموزش composer شما یاد میگیرید که از composer در یک پروژه واقعی PHP به چه شکلی استفاده کنید. با composer شما می‌توانید از حجم زیادی پکیج استفاده کن...",
          titr: "دسترسی رایگان برای اعضای ویژه",
          numberOfLike: 0,
          clock: "12:15:35",
          price: "125,000 تومان",
          image:
            "https://i.pinimg.com/originals/e4/26/57/e426570fa3a22217660ef34eb148d831.jpg",
        },
        {
          title: "آموزش شی گرایی php",
          desc:
            "در طول دوره آموزش شی گرایی php ما سعی میکنیم، شما را با مفاهیم مربوط به شی گرایی در زبان php به شکل کامل و پروژه محور آشنا کنیم.",
          titr: "دسترسی رایگان برای اعضای ویژه",
          numberOfLike: 0,
          clock: "12:15:35",
          price: "125,000 تومان",
          image:
            "https://i.pinimg.com/originals/e4/26/57/e426570fa3a22217660ef34eb148d831.jpg",
        },
        {
          title: " آموزش mysql",
          desc:
            "در دوره آموزش mysql به شکل کامل از سطح مقدماتی تا پیشرفته کار با پایگاه داده mysql را به شما آموزش می‌دهیم تا شما بتوانید به سادگی با آن کار کنید.",
          titr: "دسترسی رایگان برای اعضای ویژه",
          numberOfLike: 0,
          clock: "12:15:35",
          price: "125,000 تومان",
          image:
            "https://i.pinimg.com/originals/e4/26/57/e426570fa3a22217660ef34eb148d831.jpg",
        },
        {
          title: "آموزش php ۸",
          desc:
            "در دوره آموزش php ۸ سعی کرده‌ایم شما را با تغییرات و ویژگی‌های جدید php ۸ به شکل کامل و کاربردی آشنا کنیم تا بتواین در پروژهای خود از php ۸ استفاده کن...",
          titr: "دسترسی رایگان برای اعضای ویژه",
          numberOfLike: 0,
          clock: "12:15:35",
          price: "125,000 تومان",
          image:
            "https://i.pinimg.com/originals/e4/26/57/e426570fa3a22217660ef34eb148d831.jpg",
        },
      ],
    };
  },
  methods: {
    showNotif() {
      this.notification = !this.notification;
    },
  },
};
</script>

<style scoped>
.article {
  width: 100%;
  background-image: linear-gradient(rgb(228, 223, 223), white);
}
.container {
  max-width: 95rem;
  padding: 0 2rem;
  margin: auto;
}
.control {
  padding: 4rem 0;
}
.story {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.title {
  font-size: x-large;
  cursor: pointer;
  color: rgba(73, 69, 69, 0.932);
}
.titr {
  color: rgba(73, 69, 69, 0.932);
}
.titr:hover {
  text-decoration: none;
}

@media screen and (max-width: 45.125rem) {
  .story {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>
