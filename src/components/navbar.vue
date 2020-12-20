<template>
  <div class="navbar">
    <div class="icon">
      <img src="../image/matti.png" alt="" />
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
    };
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
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0rem;
  right: 0rem;
  left: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.1rem;
  background-color: transparent;
  padding-top: 0.5rem;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  z-index: 1000;
}
.icon,
.music {
  width: 0.7rem;
  height: 0.7rem;
}
.icon img,
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