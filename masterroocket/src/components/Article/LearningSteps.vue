<template>
  <article class="article">
    <div class="container">
      <div class="ctrl">
        <div class="card-container">
          <div class="right">
            <h1 class="titr">گام های یادگیری</h1>
          </div>
          <div class="crad">
            <learning-card :items="cardItems" />
          </div>
          <div class="end-part">
            <p class="titr">
              به دنبال گام یادگیری دیگری هستید؟
              <a href="" class="titr"> وارد گام یادگیری راکت شوید </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import LearningCard from "./LearningCard.vue";

export default {
  components: { LearningCard },
  data() {
    return {
      cardItems: [
        {
          title: "شامل ۷ دوره",
          titr: "یادگیری جاوا اسکریپت",
          desc:
            "جاوااسکریپت یکی از زبان‌های بسیار قدرتمند است که هر روز در حال پیشرفت و تکامل است، تکامل و پیشرفت جاوااسکریپت را می‌توان...",
        },
        {
          title: "شامل ۷ دوره",
          titr: "یادگیری جاوا اسکریپت",
          desc:
            "جاوااسکریپت یکی از زبان‌های بسیار قدرتمند است که هر روز در حال پیشرفت و تکامل است، تکامل و پیشرفت جاوااسکریپت را می‌توان...",
        },
        {
          title: "شامل ۷ دوره",
          titr: "یادگیری جاوا اسکریپت",
          desc:
            "جاوااسکریپت یکی از زبان‌های بسیار قدرتمند است که هر روز در حال پیشرفت و تکامل است، تکامل و پیشرفت جاوااسکریپت را می‌توان...",
        },
        {
          title: "شامل ۷ دوره",
          titr: "یادگیری جاوا اسکریپت",
          desc:
            "جاوااسکریپت یکی از زبان‌های بسیار قدرتمند است که هر روز در حال پیشرفت و تکامل است، تکامل و پیشرفت جاوااسکریپت را می‌توان...",
        },
      ],
    };
  },
};
</script>

<style scoped>
.article {
  background-color: rgba(27, 2, 54, 0.685);
}
.container {
  max-width: 95rem;
  margin: auto;
  padding: 0 2rem;
}
.ctrl {
  padding: 4rem 0;
}
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.titr {
  color: white;
  margin-bottom: 1rem;
}
.end-part {
  margin-top: 1.4rem;
  text-align: justify;
}
.titr a {
  font-weight: bold;
}
.card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
