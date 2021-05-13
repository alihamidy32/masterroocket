<template>
  <article>
    <div class="control">
      <div class="container">
        <div class="article-container">
          <div class="title">
            <h1 class="title-first">
              {{title}}
            </h1>
          </div>
          <div class="title">
            <a href="" class="title-two">
              {{titr}}
            </a>
          </div>
        </div>
          <all-article-cards :items="posts" />
      </div>
    </div>
  </article>
</template>

<script>
import axios from 'axios';
import allArticleCards from './allArticleCards.vue'
export default {
  components: { allArticleCards },
  data(){
    return{
      title:'آخرین مقالات',
      titr:'مشاهده همه مقالات',
      posts:[],
      errored:false
    }
  },
  methods:{
    getPost(){
      axios
    .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.posts = response.data
        this.posts.splice(6, 100)
      })
      .catch(error=>{
           this.errored = true
           return error
        })
    }
  },
  mounted(){
    this.getPost()
  }
}
</script>

<style scoped>
article{
  background-color: rgb(212, 216, 204);
}
.control{
  max-width: 95rem;
  padding: 0 2rem;
  margin: auto;
}
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
   padding: 4rem 0;
}
.article-container{
  margin-bottom: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.title{
  color: rgb(54, 52, 52);
}
.title-first{
  font-size: x-large;
  color: rgb(54, 52, 52);
}
.title-two{
  text-decoration: none;
  color: rgb(54, 52, 52);
}
.title-two:hover{
  text-decoration: underline;
}
@media screen and (max-width: 45.125rem) {
  .article-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>