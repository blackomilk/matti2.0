<template>
  <div class="mattii">
    <div class="stickyDiv">
      <div class="video" ref="video">
        <video
          src="../image/123.mp4"
          ref="video"
          muted
          playsinline
          autoplay
          loop
        ></video>
      </div>
      <p class="p" ref="p">
        Hello <br />
        I'm Matti
      </p>
      <!-- <span>正在努力成为一名前端开发工程师</span>
      <span>©2020</span> -->
      <div class="icon" ref="icon" id="icon">
        <div class="bottomImg" ref="bottomImg"></div>
        <img class="img" ref="img" src="../image/mattti.png" alt="" />
      </div>
      <div class="text" ref="text">
        <span class="span" ref="span">
          我们把 iPhone 11 Pro 的芯， 放到了 iPhone SE 的身体里。 A13
          仿生的速度超快， 因此，无论是打开 app、玩新款游戏，
          还是用增强现实来解锁工作和娱乐的新方式， 都十分流畅。
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "one",
  data() {
    return {
      isShow: true,
    };
  },
  mounted() {
    // window.addEventListener('scroll',this.handleScroll)
    window.addEventListener("scroll", (e) => {
      let scrolled =
        document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      // console.log('scrollTop',document.documentElement.scrollTop);
      // console.log('scrollHeight',document.documentElement.scrollHeight);
      // console.log('clientHeight',document.documentElement.clientHeight);
      console.log(scrolled);
      this.$refs.icon.style.width = this.$refs.icon.style.height =
        document.documentElement.clientWidth *
          70 *
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
        this.$refs.bottomImg.style.backgroundColor = "transparent";
        this.$refs.bottomImg.style.transition = "0s background-color linear";
      } else {
        this.$refs.img.style.opacity = 1;
        this.$refs.bottomImg.style.backgroundColor = "#fff";

        this.$refs.bottomImg.style.transition = "0.5s background-color linear";
      }
      if (scrolled >= 0.5) {
        this.$refs.bottomImg.style.opacity = (0.7 - scrolled) / 0.2;
        this.$refs.icon.classList.add("transparent");
      } else {
        this.$refs.bottomImg.style.opacity = 1;
      }
      if(scrolled > 0.7) {
        this.$refs.video.style.opacity = (0.91 - scrolled) / 0.2
      } else {
        this.$refs.video.style.opacity = 1
      }
      if (scrolled > 0.75) {
        this.$refs.span.style.opacity = (scrolled - 0.75) / 0.2;
        this.$refs.text.style.marginTop = scrolled * 200 * -1 + 'px'
      } else {
        this.$refs.span.style.opacity = 0;
      }
      if (scrolled >= 0.9) {
        this.$refs.video.style.opacity = 0.05
        this.$refs.span.style.opacity = 0.7;
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
.mattii {
  width: 100%;
  height: 5000px;
  background-color: transparent;
}
.stickyDiv {
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: hidden;
  background-color: transparent;
}
.video {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: transparent;
  z-index: 9;
}
.video video {
  width: auto;
  height: 100vh;
}
.p {
  width: 100vw;
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
  background-color: #000;
  box-shadow: 0rem 0rem 0rem 100vw #000, 0rem 0rem 0rem 30vw #000 inset;
}
.icon.transparent {
  background-color: transparent;
}
.img {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  transform: translate(-50%, 0);
  background-color: transparent;
  z-index: 17;
}
.bottomImg {
  position: absolute;
  opacity: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #000;
  /* z-index: 5; */
}
.text {
  position: absolute;
  font-size: 0.47rem;
  font-weight: 600;
  text-align: left;
  background-color: transparent;
  width: 80%;
  height: 3rem;
  top: 100%;
  left: 5%;
  z-index: 800;
  transform: translate(0, -100%);
}
.text span {
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: transparent;
}
</style>