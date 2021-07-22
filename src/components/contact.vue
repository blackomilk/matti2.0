<template>
  <div class="contact" ref="cc" id="cc">
    <!-- <div class="title">Contact Me</div>
    <div class="foo">Thank You!</div> -->
    <!-- 太阳 -->
    <div class="sun star-line">
      <div class="su-box">
        <img src="../assets/1.png" alt="" />
      </div>
    </div>
    <!-- 水星 -->
    <div class="mercury star-line ball">
      <!-- <div class="me-box">
          <img src="../assets/2.png" alt="" />
        </div> -->
    </div>
    <!-- 金星 -->
    <div class="venus star-line ball ">
      <!-- <div class="ve-box">
          <img src="../assets/3.png" alt="" />
        </div> -->
    </div>
    <!-- 地球 -->
    <div class="earth star-line ball">
      <!-- <div class="ea-box">
          <img src="../assets/4.png" alt="" />
        </div> -->
    </div>
    <!-- 火星 -->
    <div class="mars star-line ball">
      <!-- <div class="ma-box">
          <img src="../assets/5.png" alt="" />
        </div> -->
    </div>
    <!-- 木星 -->
    <div class="jupiter star-line ball">
      <!-- <div class="ju-box">
          <img src="../assets/6.png" alt="" />
        </div> -->
    </div>
    <!-- 土星 -->
    <div class="saturn star-line ball">
      <!-- <div class="sa-box">
          <img src="../assets/7.png" alt="" />
        </div> -->
    </div>
    <!-- 天王星 -->
    <div class="uranus star-line ball">
      <!-- <div class="ur-box">
          <img src="../assets/8.png" alt="" />
        </div> -->
    </div>
    <!-- 海王星 -->
    <div class="neptune star-line ball">
      <!-- <div class="ne-box">
          <img src="../assets/9.png" alt="" />
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      offsetTop: 0,
    };
  },
  watch: {
    offsetTop(newVal, oldVal) {
      if (newVal) {
        console.log("newVal", newVal);
      }
    },
  },
  mounted() {
    let cc = document.getElementById("cc");
    this.offsetTop = cc.offsetHeight;
    console.log("ccccccccc", cc.offsetHeight);
  },
  methods: {
    romanToInt(s) {
      let num = 0;
      let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      };
      let len = s.length;
      for (let i = 0; i < len; i++) {
        debugger;
        let val = obj[s[i]];
        let nVal = obj[s[i + 1]];
        if (i !== len - 1 && val < nVal) {
          num -= val;
        } else {
          num += val;
        }
      }
      return num;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* background-color: #000; */
  /* background-color: #ffcd00; */
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.2rem;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 91vh;
  perspective: 300px;
  perspective-origin: 50% top;
  transform-style: preserve-3d;
}
.co {
  width: 100%;
  height: 50vh;
  background-color: tan;
}
.star-line {
  position: absolute;
  perspective: 300px;
  perspective-origin: 50% top;
  transform-style: preserve-3d;
}
.ball {
  border-radius: 50%;
}
.sun,
.su-box {
  width: 1.5rem;
  height: 1.5rem;
  z-index: 11;
  img {
    width: 100%;
    height: 100%;
  }
}
.mercury {
  position: relative;
  width: 2rem;
  height: 2rem;
  border: 1px solid olive;
  z-index: 10;
  animation: rond 5s linear infinite;

  &::before {
    position: absolute;
    top: -0.07rem;
    left: 50%;
    content: "";
    width: 0.15rem;
    height: 0.15rem;
    background: url("../assets/2.png");
    background-size: 100% 100%;
  }
}
// .me-box {
//   width: 0.2rem;
//   height: 0.2rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// }
.venus {
  width: 2.7rem;
  height: 2.7rem;
  border: 1px solid darkgoldenrod;
  z-index: 9;
  animation: rond 8s linear infinite;

  &::before {
    position: absolute;
    top: -0.125rem;
    left: 51%;
    content: "";
    width: 0.25rem;
    height: 0.25rem;
    background: url("../assets/3.png");
    background-size: 100% 100%;
  }
}
// .ve-box {
//   width: 0.3rem;
//   height: 0.3rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// }
.earth {
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid blue;
  z-index: 8;
  animation: rond 10s linear infinite;

  &::before {
    position: absolute;
    top: -0.17rem;
    left: 52%;
    content: "";
    width: 0.39rem;
    height: 0.35rem;
    background: url("../assets/4.png");
    background-size: 100% 100%;
  }
}
// .ea-box {
//   width: 0.35rem;
//   height: 0.35rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// }
.mars {
  width: 4.1rem;
  height: 4.1rem;
  border: 1px solid orangered;
  z-index: 7;
  animation: rond 20s linear infinite;

  &::before {
    position: absolute;
    top: -0.1rem;
    left: 53%;
    content: "";
    width: 0.29rem;
    height: 0.2rem;
    background: url("../assets/5.png");
    background-size: 100% 100%;
  }
}
// .ma-box {
//   width: 0.4rem;
//   height: 0.4rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// }
.jupiter {
  width: 6.5rem;
  height: 6.5rem;
  border: 1px solid yellow;
  z-index: 6;
  animation: rond 45s linear infinite;

  &::before {
    position: absolute;
    top: -0.65rem;
    left: 55%;
    content: "";
    width: 1.45rem;
    height: 1.3rem;
    background: url("../assets/6.png");
    background-size: 100% 100%;
  }
}
// .ju-box {
//   width: 0.75rem;
//   height: 0.75rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// }
.saturn {
  width: 11rem;
  height: 11rem;
  border: 1px solid tan;
  z-index: 5;
  animation: rond 65s linear infinite;

  &::before {
    position: absolute;
    top: -0.375rem;
    left: 45%;
    content: "";
    width: 0.75rem;
    height: 0.9rem;
    background: url("../assets/7.png");
    background-size: 100% 100%;
  }
}
// .sa-box {
//   width: 0.7rem;
//   height: 0.7rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// }
.neptune {
  width: 15rem;
  height: 15rem;
  border: 1px solid slategrey;
  z-index: 3;
  animation: rond 180s linear infinite;

  &::before {
    position: absolute;
    top: -0.325rem;
    left: 35%;
    content: "";
    width: 0.65rem;
    height: 0.8rem;
    background: url("../assets/9.png");
    background-size: 100% 100%;
  }
}
// .ne-box {
//   width: 0.35rem;
//   height: 0.35rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// }
.uranus {
  width: 22rem;
  height: 22rem;
  border: 1px solid skyblue;
  z-index: 4;
  animation: rond 360s linear infinite;
}
.uranus::before {
  position: absolute;
  top: -0.285rem;
  left: 40%;
  content: "";
  width: 0.75rem;
  height: 0.57rem;
  background: url("../assets/8.png");
  background-size: 100% 100%;
}
// .ur-box {
//   width: 0.35rem;
//   height: 0.35rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// }

@keyframes rond {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
    transform: translate3d(3px, 2px, -2.5px);
  }
  50% {
    transform: translate3d(-3px, 2px, -2.5px);
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
    transform: rotate3d(1, 0, 0, -10deg);
  }
  50% {
    transform: rotate3d(1, 0, 0, 15deg);
  }
}
.foo::before,
.foo::after {
  content: "Thank You!";
  position: absolute;
  top: 0;
  left: 0;
}
.foo::before {
  color: #009cde;
  animation: 2.5s foo-before ease-in-out infinite;
  z-index: -1;
}
.foo::after {
  color: #003c71;
  animation: 2.5s foo-after ease-in-out infinite;
  z-index: -2;
}
@keyframes foo-before {
  0%,
  100% {
    transform: translate3d(1px, 3px, -2.5px);
  }
  50% {
    transform: translate3d(1px, -3px, -2.5px);
  }
}
@keyframes foo-after {
  0%,
  100% {
    transform: translate3d(1px, 5px, -2.5px);
  }
  50% {
    transform: translate3d(1px, -5px, -2.5px);
  }
}
</style>
