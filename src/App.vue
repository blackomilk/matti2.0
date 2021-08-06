<template>
  <div class="app">
    <NavBar ref="nav" @clickHamburger="clickHamburgerFn" />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "../src/components/navbar";

export default {
  name: "app",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
  mounted() {
    // const internalInstance = getCurrentInstance()
    // const $bus = internalInstance.appContext.config.globalProperties.$bus;
    // $bus.on("hideNav", (scrolled) => {
    //   if (scrolled && scrolled <= 0.13) {
    //     this.$refs.nav.$refs.navbar.style.opacity = (0.13 - scrolled) / 0.13;
    //   }
    // });
  },
  methods: {},
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
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000;
}
</style>
