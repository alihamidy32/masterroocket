<template>
  <div class="home">
    <div class="middle">
      <div class="form-control">
        <brand-logo />
        <the-input
          @show="showModal"
          :inputDisable="disable"
          class="input"
        ></the-input>
        <button-header class="sign-btn"></button-header>
        <humberger-btn class="bars" @openDrag="activeMenu"></humberger-btn>
      </div>
    </div>
    <div class="downer" >
      <the-nav 
      @jump ="startJump"  
      class="the-nav"/>
    </div>
    <modal @close="enableSearch" :show="show">
      <template #title>
        برای استفاده از جستجو نیاز به پرکردن فیلد خالی دارید
      </template>
    </modal>
    <signin-modal class="si-modal" />
    <drag-menue v-if="showDrag"></drag-menue>
    <head-article  
    />
    <the-stories  />
    <learning-steps  id="element" />
    <all-article />
  </div>
</template>

<script>
import AllArticle from '../components/Article/AllArticle.vue';
import HeadArticle from "../components/Article/HeadArticle.vue";
import LearningSteps from "../components/Article/LearningSteps.vue";
import TheStories from "../components/Article/TheStories.vue";
import BrandLogo from "../components/BrandLogo.vue";
import ButtonHeader from "../components/ButtonHeader.vue";
import DragMenue from "../components/DragMenue.vue";
import HumbergerBtn from "../components/HumbergerBtn.vue";
import Modal from "../components/Modal.vue";
import SigninModal from "../components/SigninModal.vue";
import TheInput from "../components/TheInput.vue";
import TheNav from "../components/TheNav.vue";

export default {
  name: "Home",
  components: {
    BrandLogo,
    Modal,
    SigninModal,
    TheInput,
    ButtonHeader,
    TheNav,
    HumbergerBtn,
    DragMenue,
    HeadArticle,
    TheStories,
    LearningSteps,
    AllArticle,
  },
  data() {
    return {
      disable: false,
      show: false,
      showDrag: false,
    };
  },
  methods: {
    showModal(value) {
      this.show = !value;
      this.disable = !value;
    },
    enableSearch(value) {
      this.show = value;
      this.disable = value;
    },
    activeMenu() {
      this.showDrag = !this.showDrag;
    },
    startJump() {
      let elmnt = document.getElementById("element")
      elmnt.scrollIntoView();
    },
  },
};
</script>

<style scoped>
.middle {
  max-width: 95rem;
  margin: auto;
  padding: 0 2rem;
}
.form-control {
  padding: 1.3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bars,
.drag {
  display: none;
}

@media screen and (max-width: 64.125rem) {
  .input,
  .sign-btn,
  .the-nav {
    display: none;
  }
  .bars,
  .drag {
    display: block;
  }
}
</style>
