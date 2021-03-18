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
        // if (this.$refs.uppullpage.$refs.ssticky.style.position === "sticky") {
        //   this.$refs.uppullpage.$refs.uppull.style.overflow = "auto";
        // } else {
        //   this.$refs.uppullpage.$refs.uppull.style.overflow = "hidden";
        // }
      } else {
        if (this.scrolled > 0) {
          this.$refs.mattii.$refs.matti.style.overflowY = "hidden";
        }
        if (this.scrolled === 0) {
          this.$refs.mattii.$refs.matti.style.overflowY = "scroll";
        }

        // if (this.$refs.uppullpage.$refs.ssticky.style.position === "sticky") {
        //   this.$refs.uppullpage.$refs.uppull.style.overflow = "auto";
        // } else {
        //   this.$refs.uppullpage.$refs.uppull.style.overflow = "hidden";
        // }
        // if (this.scrolled === 2550) {
        //   this.$refs.uppullpage.$refs.uppull.style.overflow = "auto";
        // }
        // if (this.scrolled < 2550) {
        //   this.$refs.uppullpage.$refs.upView.style.overflowY = "hidden";
        // }
      }
    },
  },
  mounted() {
    this.$refs.content.addEventListener("scroll", () => {
      this.scrolled = this.$refs.content.scrollTop;
      // this.scrolled =
      //   this.$refs.content.scrollTop /
      //   (this.$refs.content.scrollHeight - this.$refs.content.clientHeight);
      //   console.log(this.$refs.content.scrollTop)
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