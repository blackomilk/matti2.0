<template>
  <div class="mattii">
    <div class="bottom" ref="bottom">
      <video src="../image/123.mp4" muted playsinline autoplay loop></video>
    </div>
    <p class="p" ref="p">
      Hello <br />
      I'm Matti
    </p>
    <!-- <span>正在努力成为一名前端开发工程师</span>
      <span>©2020</span> -->
    <div class="icon" ref="icon">
      <div class="bottomImg" ref="bottomImg"></div>
      <img class="img" ref="img" src="../image/mattti.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "one",
  mounted() {
    window.addEventListener("scroll", (e) => {
      let scrolled =
        document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientWidth);
      console.log(scrolled);
      this.$refs.icon.style.width = this.$refs.icon.style.height =
        document.documentElement.clientWidth *
          20 *
          (scrolled * scrolled * scrolled) +
        "px";

      if (scrolled <= 0.1) {
        this.$refs.p.style.opacity = (0.1 - scrolled) / 0.1;
        this.$refs.p.style.marginTop = scrolled * 1000 * -1 + "px";
      } else {
        this.$refs.p.style.opacity = 0;
      }
      if (scrolled <= 0.2) {
        this.$refs.img.style.opacity = (scrolled - 0.1) / 0.1;
        this.$refs.bottomImg.style.opacity = (scrolled - 0.1) / 0.1;
        this.$refs.bottomImg.style.backgroundColor = "transparent";
        this.$refs.bottomImg.style.transition = "0s background-color linear";
      } else {
        this.$refs.img.style.opacity = 1;
        this.$refs.bottomImg.style.backgroundColor = "#fff";
        this.$refs.bottomImg.style.transition = "0.5s background-color linear";
      }
      if (scrolled >= 0.4) {
        this.$refs.bottomImg.style.opacity = (0.9 - scrolled) / 0.4;
        console.log('透明度',this.$refs.bottomImg.style.opacity)
      } else {
        this.$refs.bottomImg.style.opacity = 1;
      }
    });
  },
};
</script>

<style scoped>
.mattii {
  width: 100%;
  height: 100%;
  background-color: red;
}
.bottom {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #000;
}
.bottom video {
  width: auto;
  height: 100vh;
}
.p {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.07rem;
  background: linear-gradient(
    75deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 33.33%,
    rgba(255, 255, 255, 0) 66.67%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 300% 100%;
  background-position-x: 90%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: 2s background-position-x ease-in-out;
}
.icon {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 2rem;
  min-height: 2rem;
  box-shadow: 0rem 0rem 0rem 100vw #000, 0rem 0rem 0rem 30vw #000 inset;
  /* margin-top: 3rem;
  background-color: transparent;
  border-radius: 1.7rem;
  text-align: center;
  box-shadow: 8px 8px 11px -11px #0366d6, -8px -8px 21px -11px #0366d6;
  background-image: linear-gradient(
    -40deg,
    transparent,
    transparent 70px,
    rgba(49, 141, 141, 0.5) 90px,
    rgba(49, 141, 141, 0.5) 110px,
    transparent 130px
  );
  background-repeat: no-repeat !important;
  -webkit-transition: all 1.7s;
  transition: all 1.7s;
  overflow: hidden; */
}
.img {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  transform: translate(-50%, 0);
  z-index: 7;
}
.bottomImg {
  position: absolute;
  opacity: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #000;
  z-index: 5;
}
</style>