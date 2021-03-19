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
.title {
  padding: 0;
  margin: 0;
  position: relative;
  color: #fff;
  letter-spacing: 0.01rem;
  z-index: 1;
  animation: 5s rotate ease-in-out infinite;
}
.foo {
  padding: 0;
  margin: 0;
  position: relative;
  color: #fff;
  letter-spacing: 0.01rem;
  font-size: 1rem;
  z-index: 1;
  animation: 2.5s foo-ratote ease-in-out infinite;
}
@keyframes foo-ratote {
  0%,
  100% {
    transform: rotate3d(1, 0, 0, -20deg);
  }
  50% {
    transform: rotate3d(1, 0, 0, 20deg);
  }
}
.foo::before,
.foo::after {
  content: "Thank You!";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.foo::before {
  color: #009cde;
  animation: 2.5s foo-before ease-in-out infinite;
}
.foo::after {
  color: #003c71;
  animation: 2.5s foo-after ease-in-out infinite;
}
@keyframes foo-before {
  0%,100% {
    transform: translate3d(1px, 3px, -2.5px);
  }
  50% {
    transform: translate3d(1px, -3px, -2.5px);
  }
}
@keyframes foo-after {
  0%,100% {
    transform: translate3d(1px, 5px, -2.5px);
  }
  50% {
    transform: translate3d(1px, -5px, -2.5px);
  }
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
  z-index: -2;
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
    transform: translate3d(2.5px, 2px, -2.5px);
  }
  50% {
    transform: translate3d(-2.5px, 2px, -2.5px);
  }
}
@keyframes title-after {
  0%,
  100% {
    transform: translate3d(5px, 4px, -5px);
  }
  50% {
    transform: translate3d(-5px, 4px, -5px);
  }
}
</style>