<template>
  <div class="content" ref="content">
    <Mattii ref="mattii" />
    <Profile ref="profile" />
    <Skill ref="skill" />
    <Swiper ref="swiper" />
    <Uppullpage ref="uppullpage" />
    <Contact />
  </div>
</template>

<script>
import Mattii from "./hellomatii";
import Uppullpage from "./uppullpage.vue";
import Swiper from "./swiper";
import Profile from "./profile";
import Skill from "./skills";
import Contact from "./contact";
export default {
  name: "one",
  components: {
    Mattii,
    Uppullpage,
    Swiper,
    Profile,
    Skill,
    Contact,
  },
  props: {},
  data() {
    return {
      isShow: true,
      isTop: false,
      scrolled: null,
    };
  },
  watch: {
    scrolled(newVal, oldVal) {
      // console.log(this.scrolled);
      if (newVal > oldVal) {
        if (this.scrolled > 50) {
          this.$refs.mattii.$refs.matti.style.overflowY = "hidden";
        }
      } else {
        if (this.scrolled > 0) {
          this.$refs.mattii.$refs.matti.style.overflowY = "hidden";
        }
        if (this.scrolled === 0) {
          this.$refs.mattii.$refs.matti.style.overflowY = "scroll";
        }
      }
    },
  },
  mounted() {
    this.$refs.content.addEventListener("scroll", () => {
      this.scrolled = this.$refs.content.scrollTop;
    });
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
.content::-webkit-scrollbar {
  display: none;
}
.abc {
  background-color: saddlebrown;
}
</style>