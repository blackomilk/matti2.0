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
      // console.log(scrolled);
      // console.log('this.content',this.content.scrollTop)
      // console.log('this.content',this.content.scrollHeight)
      // console.log('this.content',this.content.clientHeight)
      if (this.content.scrollTop == this.$refs.uppullpage.$el.offsetTop) {
        this.$refs.uppullpage.$refs.upView.style.overflowY = "scroll";
        console.log('相等了')
      } else {
        this.$refs.uppullpage.$refs.upView.style.overflowY = "hidden";
        console.log('不相等')
      }
      // console.log('this.$refs.uppullpage.$refs.upView.offsetTop',this.$refs.uppullpage.$refs.upView.scrollTop)
      // console.log('this.$refs.uppullpage.$refs.upView.offsetTop',this.$refs.uppullpage.$refs.upView.scrollHeight)
      // console.log('this.$refs.uppullpage.$refs.upView.offsetTop',this.$refs.uppullpage.$refs.upView.clientHeight)
      // console.log('this.$refs.uppullpage.$refs.upView.offsetTop',this.$refs.uppullpage.$el.offsetTop)
      // if(this.$refs.uppullpage.$refs.upView.offsetTop)
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
</style>