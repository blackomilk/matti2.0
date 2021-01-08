<template>
  <div class="app">
    <Navbar />
    <!-- <Hi v-if="hiShow" ref="hi" :scrolled="scrolled" /> -->
    <One ref="one" @scrollIsDown="scrolledIsDown" />
  </div>
</template>

<script>
import Navbar from "../src/components/navbar";
import Hi from "../src/components/hi";
import One from "../src/components/one";
export default {
  name: "app",
  components: {
    Navbar,
    Hi,
    One,
  },
  data() {
    return {
      // hiShow: true,
    };
  },
  methods: {},
  mounted() {
    // this.handleVideo();
    this.$nextTick(() => {
      setTimeout(() => {
        // this.$refs.hi.$refs.hii.style.opacity = "0";
        setTimeout(() => {
          // this.hiShow = false;
          this.oneShow = true;
          setTimeout(() => {
            this.$refs.one.$refs.p.style.backgroundPositionX = "0%";
          }, 100);
        }, 2000);
      }, 1700);
    });

    // if (scrolled > 70) {
    //   this.$refs.icon.style.display = "block";
    // } else if (scrolled < 70) {
    //   this.$refs.icon.style.display = "none";
    // }
    // if(scrolled) {
    //   this.$refs.one.$refs.icon.style.width = this.$refs.one.$refs.icon.style.height =
    //   document.documentElement.clientWidth *
    //     20 *
    //     (scrolled * scrolled * scrolled) +
    //   "px";
    // }
    // console.log('+++++',this.$refs.one.$refs.icon.style.width)
    // console.log('----',document.documentElement.clientWidth)
  },
};
</script>
<style>
#app,
.app {
  position: relative;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000;
}
</style>