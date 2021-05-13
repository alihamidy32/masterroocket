<template>
  <article>
    <div class="container">
      <div class="card" v-for="(item , index) in items" :key="index">
        <div class="img-container">
          <img src="https://i.pinimg.com/originals/e4/26/57/e426570fa3a22217660ef34eb148d831.jpg" alt="" class="img">
          <i class="fas fa-tag"></i>
        </div>
        <div class="titr">
          <h3 class="card-titr">{{item.title}}</h3>
          <div class="hash">
            <a href="" class="hash-tag">{{item.body}}</a>
          </div>
        </div>
        <div class="end-part">
          <div class="comment">
            <div class="num-of-cmt">12</div>
            <div class="cmt">
              <i class="fas fa-comment"></i>
            </div>
          </div>
          <div class="comment">
            <div class="num-of-like">19</div>
            <div class="like-heart">
              <i class="fas fa-heart"></i>
          </div>
            </div>
        </div>
      </div>
      <div class="card-login">
        <div class="card-login-container">
          <div class="card-login-title">
            {{data.title}}
          </div>
          <div class="card-login-desc">
            {{data.desc}}
          </div>
          <div class="card-btn">
            <div class="btn">
              <a href="" class="btn-one">
                {{data.btn1}}
              </a>
            </div>
            <div class="btn--two">
              <a href="" class="btn-two">
                {{data.btn2}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props:{
    items:{
      type:Object,
      require:true,
      default:()=>({})
    }
  },
  data(){
    return{
      data:{
        title:'نوشتن راهی برای گسترش ایده‌ها',
        desc:'نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به روز باشیم، ما در راکت فضای رو به شکلی آماده کردیم تا شما بتونید ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران برنامه‌نویس عضو راکت قرار بدید.',
        btn1:'ساخت اکانت جدید',
        btn2:'ورود به سایت'
      }
    }
  }
}
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: repeat(4 , minmax(0,1fr));
  gap: 2rem;
}
.card{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white;
  border-radius: 1rem;
}
.card-login{
  grid-column: 3 / 5;
  grid-row: 1 / 2;
}
.card-login-container{
  background-color: rgb(219, 219, 219);
  padding: 1rem; 
  height: 100%;
  border:1px solid rgb(117, 116, 116);
  border-radius: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-login-title{
  font-size: 1.75rem;
  font-weight: bolder;
  margin-bottom:.5rem;
}
.card-login-desc{
  font-size: 1.2rem;
  margin-top: 1rem;
}
.card-btn{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  height: 5rem;
}
.btn-two{
 background-color: rgb(189, 179, 180);
  color: white;
  text-decoration: none;
  padding: .5rem 1rem;
  border-radius: 1.2rem;
}
.btn-one{
  background-color: rgba(31, 24, 49, 0.822);
  color: white;
  text-decoration: none;
   padding: .5rem 1rem;
   border-radius: 1.2rem;
}
.img-container{
  position: relative;
}
.img{
  width: 100%;
  height: 12rem;
  padding: 1rem;
  border-radius: 1.5rem;
}
.titr{
  padding: 0 1rem;
  text-align: justify;
  direction: ltr;
  align-self: center;
}
.card-titr{
  margin-top: 1rem;
}
.end-part{
  display: flex;
  padding: 1.2rem 1.5rem;
}
.fa-tag{
  position: absolute;
  margin: 1.2rem 0 0 1.5rem;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  color: white;
}
.hash{
  margin-top: 1rem;
}
.comment{
  display:flex;
  padding: 0 .5rem;
}
.fa-heart{
  margin-right: .3rem;
}
.fa-comment{
  margin-right: .3rem;
}


@media screen and (max-width: 45.125rem) {
  .container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
  }
  .titr{
    display: flex;
    flex-direction: column;
  }
}
</style>