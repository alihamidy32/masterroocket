<template>
  <article>
    <div class="container">
      <div class="learning">
        <div class="part-one">
          <i class="fas fa-graduation-cap"></i>
        </div>
        <div class="part-two">
          <h2 class="titr">
            {{ id.titr1 }}
          </h2>
          <p class="desc">
            {{ description.desc1 }}
          </p>
        </div>
      </div>
      <div class="learning">
        <div class="part-one">
          <i class="fas fa-video-camera"></i>
        </div>
        <div class="part-two">
          <h2 class="titr">
            {{ id.titr2 }}
          </h2>
          <p class="desc">
            {{ description.desc2 }}
          </p>
        </div>
      </div>
      <div class="learning">
        <div class="part-one">
          <i class="fas fa-th-large"></i>
        </div>
        <div class="part-two" @click=lock>
          <h2 class="titr">
            {{ id.titr3 }}
          </h2>
          <p class="desc">
            {{ description.desc3 }}
          </p>
        </div>
      </div>
      <div class="end">
        <div class="one">
          <h2 class="titr">
            {{ id.titr4 }}
            <span class="t-s5">
              <p class="link">
                {{ id.titr5 }}
              </p>
            </span>
          </h2>
        </div>
        <div class="last">
          <p class="desc">
            {{ description.desc4 }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["isActiveNotif","visibleNotif"],
  data() {
    return {
      id: {
        titr1: "دوره های آموزشی",
        titr2: "اخرین ویدیو ها",
        titr3: "گام های یادگیری",
        titr4: "گواهی پایان دوره",
        titr5: "جدید",
      },
      description: {
        desc1:
          " لیست دوره های آموزش ویدیوئی که با استفاده از آن ها می توانید به یک طراح و برنامه نویس تبدیل شوید.",
        desc2:
          "لیست مرتب شده آخرین ویدیوهایی که به دوره های آموزشی سایت اضافه شده",
        desc3:
          "گام های یادگیری و طراحی و برنامه نویسی وب که با استفاده از آنها قدم به قدم مهارت مورد نظر خود را فراخواهید گرفت",
        desc4: "گواهی تاییدیه کسب مهارت فنی دوره ها",
      },
    };
  },
  methods: {
    lock() {
      this.$emit('start' , true)
    },
  },
};
</script>

<style scoped>
article {
  background-color: rgb(60, 57, 77);
  width: 30rem;
  padding: 1rem;
  border-radius: 2.5rem;
}
.container {
  display: grid;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}
.learning {
  padding: 1rem;
  display: flex;
  cursor: pointer;
}
.learning:hover {
  background-color: rgba(177, 219, 238, 0.781);
  border-radius: 2rem;
}
.titr {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}
.fas {
  color: yellow;
  font-size: 1.5rem;
}
.part-two {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1rem;
}
.link {
  display: inline;
  color: black;
  font-size: small;
}
.t-s5 {
  background-color: yellow;
  padding: 0 1.5rem;
  margin-right: 0.5rem;
  border-radius: 1rem;
}
.desc {
  color: rgba(248, 245, 245, 0.609);
  text-align: justify;
  margin-top: 0.5rem;
}
.end {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  border-top: 1px solid gray;
}
.end:hover {
  background-color: rgba(177, 219, 238, 0.781);
  border-radius: 2rem;
}
</style>
