<template>
  <div class="app">
    <Navbar />
    <Hi v-if="isHi" ref="hi"/>
    <One v-else ref="one"/>
  </div>
</template>

<script>
import Navbar from '../src/components/navbar'
import Hi from '../src/components/hi'
import One from '../src/components/one'

export default {
  name: 'app',
  components: {
    Navbar,Hi,One
  },
  data() {
    return {
      isHi: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$refs.hi.$refs.hii.style.opacity = "0";
        setTimeout(() => {
          this.isHi = false;
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
  methods: {
    // _handleIconStyle() {
    //   this.$refs.icon.style.backgroundPosition = "-3.5rem -3.5rem";

    //   setTimeout(() => {
    //     this.$refs.icon.style.backgroundColor = "#fff";
    //     setTimeout(() => {
    //       this.$refs.icon.style.backgroundPosition = "3.5rem 3.5rem";
    //     }, 300);
    //   }, 300);
    // },
  },
}
</script>
<style>
  #app {
  position: sticky;
  top: 0;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  text-align: center;
  /* background-color: blue; */
  }
</style>