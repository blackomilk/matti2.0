<template>
  <div class="content" ref="content">
    <Mattii ref="mattii" />
    <Profile ref="profile" />
    <Skill ref="skill" />
    <Swiper ref="swiper" />
    <!-- <div class="uppullpage"> -->
      <Uppullpage ref="uppullpage" class="uppullpage"/>
    <!-- </div> -->
    <Contact class="contact"/>
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
      if (this.scrolled >= 2550 && this.scrolled <= 2552) {
        this.$refs.uppullpage.$refs.section3.style.overflow = "auto";
        this.$refs.uppullpage.$refs.uppull.style.overflow = "auto";
      } else {
        this.$refs.uppullpage.$refs.section3.style.overflow = "hidden";
        this.$refs.uppullpage.$refs.uppull.style.overflow = "hidden";
      }
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
.uppullpage {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
}
.contact {
  position: absolute;
  top: 100vh;
  left: 0;
  right: 0;
  bottom: 0;

}
</style>
