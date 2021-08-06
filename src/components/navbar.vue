<template>
  <div class="navbar" ref="navbar">
    <!-- <input type="checkbox" id="toggler" />
    <label for="toggler">
      <div class="hamburger-container" @click="handleHamburger">
        <span></span>
        <span></span>
      </div>
    </label> -->
    <div class="hamburger-container" @click="handleHamburger()">
      <span class="leftX"></span>
      <span class="rightX"></span>
    </div>
    <div class="items">
      <ul>
        <li @click="routeChange('matti')">Matti - 首页</li>
        <li @click="routeChange('profile')">Profile - 介绍</li>
        <li @click="routeChange('swiper')">Swiper - 轮播</li>
        <li @click="routeChange('upPullPage')">UpPullPage - 上划</li>
        <li @click="routeChange('skill')">Skill - Skill</li>
        <li @click="routeChange('contact')">Contact - 联系</li>
      </ul>
    </div>
    <div class="music" @click="handleMusicPlay">
      <audio autoPlay loop ref="audio">
        <source src="../image/bgm.mp3" type="audio/mpeg" />
      </audio>
      <img
        ref="musicImg"
        :src="
          require(isPlay === true
            ? '../image/music.jpeg'
            : '../image/stop-music.jpg')
        "
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      isPlay: true,
      isShow: true,
    };
  },
  mounted() {
    let _self = this;
    window.interval = setInterval(() => {
      let scrolled = this.$store.state.scrolled
      if (scrolled && scrolled <= 0.13) {
        console.log(111, scrolled)
        _self.$refs.navbar.style.opacity = (0.13 - scrolled) / 0.13;
      }
    }, 100);
  },
  methods: {
    handleMusicPlay() {
      // this.$refs.audio.src = "../image/bgm.mp3";
      // console.log("初始状态", this.$refs.audio.src);
      if (this.$refs.audio) {
        if (this.isPlay) {
          this.$refs.audio.pause();
          this.$refs.musicImg.style.animationPlayState = "paused";
          this.isPlay = false;
        } else {
          this.$refs.audio.play();
          this.isPlay = true;
          this.$refs.musicImg.style.animationPlayState = "running";
        }
      }
    },
    routeChange(route) {
      switch (route) {
        case "matti":
          this.$router.push({
            name: "matti",
          });
          break;
        case "profile":
          this.$router.push({
            name: "profile",
          });
          break;
        case "swiper":
          this.$router.push({
            name: "swiper",
          });
          break;
        case "upPullPage":
          this.$router.push({
            name: "upPullPage",
          });
          break;
        case "skill":
          this.$router.push({
            name: "skill",
          });
          break;
        case "contact":
          this.$router.push({
            name: "contact",
          });
          break;
      }
      this.handleHamburger();
    },
    handleHamburger() {
      this.$emit("clickHamburger");
      this.isShow = !this.isShow;

      const items = document.querySelector(".items");
      const leftX = document.querySelector(".leftX");
      const rightX = document.querySelector(".rightX");
      if (this.isShow) {
        items.style.transform = "";
        items.style.opacity = 0;
        items.style.transition =
          "transform 0.2s ease-in-out, opacity 0.2s ease-in-out";
        leftX.style.transform = "";
        leftX.style.top = "0";
        leftX.style.transition =
          "transition: transform 0.2s ease-in-out, top 0.2s ease-in-out 0.2s";
        rightX.style.transform = "";
        rightX.style.top = "0";
        rightX.style.transition =
          "transition: transform 0.2s ease-in-out, top 0.2s ease-in-out 0.2s";
      } else {
        items.style.transform = "scaleY(1)";
        items.style.opacity = 1;
        items.style.transition =
          "transform 0.2s ease-in-out, opacity 0.2s ease-in-out";
        leftX.style.transform = "rotate(45deg)";
        leftX.style.top = "3px";
        leftX.style.transition =
          "top 0.2s ease-in-out, transform 0.2s ease-in-out 0.2s";
        rightX.style.transform = "rotate(-45deg)";
        rightX.style.top = "-3px";
        rightX.style.transition =
          "top 0.2s ease-in-out, transform 0.2s ease-in-out 0.2s";
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 1rem;
  position: absolute;
  top: 0rem;
  right: 0rem;
  left: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.3rem;
  background-color: transparent;
  padding: 0.5rem 0.3rem 0.3rem;
  z-index: 1000;
  opacity: 1;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
  color: #424245;
}
.hamburger-container {
  width: 15px;
  height: 15px;
}
.music {
  width: 30px;
  height: 30px;
}
.hamburger-container span {
  display: block;
  height: 1px;
  background-color: #fff;
  position: relative;
  top: 0;
  transition: transform 0.2s ease-in-out, top 0.2s ease-in-out 0.2s;
}
.hamburger-container span:nth-child(2) {
  margin-top: 5px;
}
#toggler {
  display: none;
}
#toggler:checked + label .hamburger-container span:nth-child(1) {
  transform: rotate(45deg);
  top: 3px;
  transition: top 0.2s ease-in-out, transform 0.2s ease-in-out 0.2s;
}
#toggler:checked + label .hamburger-container span:nth-child(2) {
  transform: rotate(-45deg);
  top: -3px;
  transition: top 0.2s ease-in-out, transform 0.2s ease-in-out 0.2s;
}
.items {
  background-color: rgba(0, 0, 0);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 1rem;
  left: 0;
  transform: scaleY(0);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transform-origin: 50% 0;
  opacity: 0;
}
#toggler:checked ~ .items {
  transform: scaleY(1);
  opacity: 1;
}
ul {
  padding: 0 0.5rem 0.5rem;
  list-style: none;
}
li {
  width: 100%;
  height: 1.3rem;
  color: #fff;
  text-align: left;
  border-bottom: 1px solid #424245;
  display: flex;
  justify-content: left;
  align-items: center;
}
.music img {
  max-width: 100%;
  border-radius: 0.35rem;
  box-shadow: 0 0 5px #fff;
  border: 1px solid #fff;
}
.music img {
  -webkit-animation: rotate 11s linear infinite;
  animation: rotate 11s linear infinite;
}
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
