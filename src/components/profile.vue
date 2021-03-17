<template>
  <div class="profile" ref="profile">
    <p class="name">此项目使用Vue搭建</p>
    <img class="vue" src="../assets/vue.png" alt="">
  </div>
</template>

<script>
export default {
  name: "profile",
  mounted() {
    const top = this.$refs.profile.style.top;
    console.log("toptoptoptop", top);
    if (top === 0) {
      this.$refs.vue.style.display = "block";
      this.$refs.vue.style.animation = "typing 2s 2s steps(15, end)";
    }
  },
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100vh;
  /* text-align: left; */
  font-size: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(243, 243, 246);
  /* background-color: skyblue; */
}
.name {
  width: 15em;
  white-space: nowrap;
  border-right: 2px solid transparent;
  /* animation: typing 2s steps(15, end), blink-caret 0.75s step-end infinite; */
  animation: typing 2s steps(15, end);
  overflow: hidden;
  margin-top: 2rem;
}
.vue {
  width: 5rem;
  height: 5rem;
  margin-top: 1rem;
}
/* 打印效果 */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 15em;
  }
}
/* 光标闪啊闪 */
@keyframes blink-caret {
  from,
  to {
    box-shadow: 1px 0 0 0 transparent;
  }
  50% {
    box-shadow: 1px 0 0 0;
  }
}
</style>