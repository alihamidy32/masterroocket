<template>
  <article>
    <div class="article-container">
      <div class="container">
        <div class="flex">
          <div class="content">
            <div class="justify">
              <div class="title-hash">
                <p class="title">
                  {{ items.title }}
                </p>
                <i class="fa fa-arrow-left"></i>
              </div>
            </div>
            <h1 class="titr">
              {{ items.titr }}
            </h1>
            <p class="desc">
              {{ items.description }}
            </p>
          </div>
          <div></div>
          <div class="svg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            saepe enim iure recusandae, corporis ipsum. Aspernatur maxime nisi,
            nam libero ipsum, et consequatur voluptates iusto ad voluptate illo
            numquam autem! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fuga natus, similique velit tempore corporis explicabo minima
            nisi ex accusantium quasi provident fugit, maxime illo vero eum
            voluptatem officia dolore incidunt! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aliquid aut laborum illum quisquam.
            Itaque, distinctio quis odit impedit blanditiis, rerum ut iure
            inventore minima praesentium maiores nobis, explicabo aut alias.
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      items: {
        title: "شروع یادگیری برنامه نویسی",
        titr: "آموزش برنامه نویسی با راکت",
        description:
          "ما باور داریم که کاربران ایرانی لایق بهترین‌ها هستند، از این رو ما تمام تلاش خود را می‌کنیم تا بتوانیم فیلم‌ها و مقالات آموزشی بروز و کاربردی را در اختیارتان قرار دهیم تا با استفاده از آنها بتوانید جزء بهترین‌ها در صنعت طراحی و برنامه‌نویسی وب شوید. ما ادعا نمی‌کنیم که بهترین هستیم ولی همیشه تمام تلاش خود را می‌کنیم بهترین عملکرد را به شما ارائه دهیم.",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
article {
  background-color: rgba(32, 25, 58, 0.794);
}
.article-container {
  max-width: 95rem;
  height: 40rem;
  margin: auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
}
.container {
  width: 100%;
  padding: 4rem 0;
}
.flex {
  display: flex;
  align-items: flex-end;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.title-hash {
  display: flex;
  align-items: center;
}
.justify {
  padding: 1rem 1rem 0 1rem;
  margin-bottom: 1rem;
  height: 3.5rem;
  background-color: rgba(185, 182, 182, 0.651);
  border-radius: 2rem;
  cursor: pointer;
}
.justify:hover {
  background-color: rgba(214, 214, 6, 0.89);
}
.fa-arrow-left {
  font-size: 1rem;
  margin-right: 0.5rem;
  color: white;
  align-self: center;
}
.title {
  color: white;
  font-size: 1rem;
}
.titr {
  color: white;
  font-size: 2.7rem;
  margin-bottom: 1rem;
}
.desc {
  color: white;
  align-self: flex-start;
  text-align: justify;
  font-size: 1.2rem;
  width: 80%;
}
.svg {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
}

@media screen and (max-width: 64.125rem) {
  .svg {
    display: none;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .desc {
    align-self: center;
  }
}
</style>
