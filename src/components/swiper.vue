<template>
  <div class="swiper">
    <ul class="slides">
      <input type="radio" id="con1" name="con" checked />
      <input type="radio" id="con2" name="con" />
      <input type="radio" id="con3" name="con" />
      <input type="radio" id="con4" name="con" />
      <input type="radio" id="con5" name="con" />

      <li class="slide">
        <img src="../assets/swiper1.jpg" alt="" />
      </li>
      <li class="slide">
        <img src="../assets/swiper2.jpg" alt="" />
      </li>
      <li class="slide">
        <img src="../assets/swiper3.jpg" alt="" />
      </li>
      <li class="slide">
        <img src="../assets/swiper4.jpg" alt="" />
      </li>
      <li class="slide">
        <img src="../assets/swiper4.jpg" alt="" />
      </li>
      <div class="con-vis">
        <label for="con1"></label>
        <label for="con2"></label>
        <label for="con3"></label>
        <label for="con4"></label>
        <label for="con5"></label>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "swiper",
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 11rem;
  position: relative;
  background-color: #fff;
}
.slides {
  position: relative;
  width: 100%;
  height: 11rem;
  list-style: none;
  margin: 0rem;
  padding: 0rem;
  background-color: #000;
  overflow: hidden;
}
.slide {
  margin: 0rem;
  padding: 0rem;
  width: 100%;
  height: 10rem;
  position: absolute;
  top: 0rem;
  left: 0rem;
  bottom: 1rem;
  font-family: Helvetica, sans-serif;
  font-size: 1rem;
  color: #000;
  transition: 0.5s transform ease-in-out;

  animation: fade 3.5s linear;
  animation-iteration-count: infinite;
}
.slide img {
  /* width: 100%; */
  height: 100%;
  max-width: 7.5rem;
  background-position: center center;
}
.slide:nth-of-type(1) {
  /* background-color: #f2e205; */
  background-color: #fff;
}
.slide:nth-of-type(2) {
  /* background-color: #f25c05; */
  background-color: #fff;

  left: 100%;
}
.slide:nth-of-type(3) {
  /* background-color: #495f8c; */
  background-color: #fff;

  left: 200%;
}
.slide:nth-of-type(4) {
  /* background-color: #f2e205; */
  background-color: #fff;

  left: 300%;
}
.slide:nth-of-type(5) {
  /* background-color: #f25c05; */
  background-color: #fff;

  left: 400%;
}
input {
  position: relative;
  z-index: 100;
  display: none;
}
.con-vis {
  position: absolute;
  padding-right: 0.5rem;
  width: 100%;
  height: 0.3rem;
  bottom: 0.5rem;
  text-align: right;
  font-size: 0.2rem;
}
.con-vis label {
  display: inline-block;
  position: relative;
  width: 0.16rem;
  height: 0.16rem;
  background-color: rgba(134, 134, 139, 0.4);
  border-radius: 50%;
  margin: 0 0.2rem;
  /* border: 0.01rem solid rgba(134, 134, 139, 0.4); */
}
.slides
  input[type="radio"]:nth-of-type(1):checked
  ~ .con-vis
  label:nth-of-type(1) {
  background-color: #333;
}
.slides
  input[type="radio"]:nth-of-type(2):checked
  ~ .con-vis
  label:nth-of-type(2) {
  background-color: #333;
}
.slides
  input[type="radio"]:nth-of-type(3):checked
  ~ .con-vis
  label:nth-of-type(3) {
  background-color: #333;
}
.slides
  input[type="radio"]:nth-of-type(4):checked
  ~ .con-vis
  label:nth-of-type(4) {
  background-color: #333;
}
.slides
  input[type="radio"]:nth-of-type(5):checked
  ~ .con-vis
  label:nth-of-type(5) {
  background-color: #333;
}
.slides input[type="radio"]:nth-of-type(1):checked ~ .slide {
  transform: translateX(0%);
}
.slides input[type="radio"]:nth-of-type(2):checked ~ .slide {
  transform: translateX(-100%);
}
.slides input[type="radio"]:nth-of-type(3):checked ~ .slide {
  transform: translateX(-200%);
}
.slides input[type="radio"]:nth-of-type(4):checked ~ .slide {
  transform: translateX(-300%);
}
.slides input[type="radio"]:nth-of-type(5):checked ~ .slide {
  transform: translateX(-400%);
}
@keyframes fade {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}
</style>