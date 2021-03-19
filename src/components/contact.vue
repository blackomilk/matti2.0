<template>
  <div class="contact">
    <div class="title">Contact Me</div>
    <div class="foo">Thank You!</div>
  </div>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style scoped>
.contact {
  width: 100%;
  height: 100vh;
  background-color: #ffcd00;
  padding-top: 1.1rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.title,
.foo {
  padding: 0;
  margin: 0;
  position: relative;
  color: #fff;
  letter-spacing: 0.01rem;
  z-index: 2;
  animation: 5s rotate ease-in-out infinite;
}
.foo {
  font-size: 1rem;
}
.title::before,
.title::after {
  content: "Contact Me";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.title::before {
  color: #009cde;
  animation: 5s title-before ease-in-out infinite;
}
.title::after {
  color: #003c71;
  animation: 5s title-after ease-in-out infinite;
}
@keyframes rotate {
  0%,
  100% {
    transform: rotate3d(0, 1, 0, -10deg);
  }
  50% {
    transform: rotate3d(0, 1, 0, 10deg);
  }
}
@keyframes title-before {
  0%,
  100% {
    transform: translate3d(0.2rem, 0.1rem, -0.1rem);
  }
  50% {
    transform: translate3d(-0.2rem, 0.1rem, -0.1rem);
  }
}
@keyframes title-after {
  0%,
  100% {
    transform: translate3d(0.3rem, 0.15rem, -0.2rem);
  }
  50% {
    transform: translate3d(-0.3rem, 0.15rem, -0.2rem);
  }
}
</style>