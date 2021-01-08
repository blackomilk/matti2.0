<template>
  <div class="content" ref="content">
    <Mattii />
    <Profile />
    <Skill />
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
      isTop: false
    };
  },
  mounted() {
    this.content = this.$refs.content;
    this.content.addEventListener("scroll", () => {
      // let scrolled =
      //   document.documentElement.scrollTop /
      //   (document.documentElement.scrollHeight -
      //     document.documentElement.clientHeight);
      let scrolled =
        this.content.scrollTop /
        (this.content.scrollHeight - this.content.clientHeight);
      const flag = this.content.scrollTop == this.$refs.uppullpage.$refs.upView.offsetTop
      if (flag != this.isTop) {
        this.$refs.uppullpage.$refs.upView.style.overflowY = 'scroll'
        this.$refs.uppullpage.$refs.upView.style.position = 'fixed'
        this.$refs.uppullpage.$refs.upView.style.top = 0
        this.$refs.uppullpage.$refs.upView.style.overflowX = 'hidden'
        console.log('相等了')
      } else {
        this.$refs.uppullpage.$refs.upView.style.overflowY = 'hidden'
      }
    });
  },
  methods: {
    handleVideo() {
      // let scrollY = document.documentElement.scrollTop
      // console.log("scrolltop",scrollY)
    },
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
  background-color:saddlebrown;
}
</style>