<template>
  <div class="profile" ref="profile">
    <p class="name">此项目使用Vue搭建</p>
    <div class="mask" ref="mask">
      <span class="one" show>第一行</span>
      <span class="two">第二行</span>
      <span class="three">第三行</span>
      <span class="four">第四行</span>
      <span class="five">第五行</span>
    </div>

    <div id="captcha" ref="captcha">
      <div id="handle" ref="handle">
        <div ref="sp" class="sp"></div>
      </div>
    </div>
    <!-- <img class="vue" src="../assets/vue.png" alt=""> -->
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.loadPlay();
    const top = this.$refs.profile.style.top;
    console.log("toptoptoptop", top);
    if (top === 0) {
      this.$refs.vue.style.display = "block";
      this.$refs.vue.style.animation = "typing 2s 2s steps(15, end)";
    }
  },
  methods: {
    loadPlay() {
      setInterval(() => {
        const show = this.$refs.mask.querySelector("span[show]");
        const next =
          show.nextElementSibling ||
          this.$refs.mask.querySelector("span:first-child");
        const up = this.$refs.mask.querySelector("span[show-up]");

        if (up) {
          up.removeAttribute("show-up");
        }

        show.removeAttribute("show");
        show.setAttribute("show-up", "");
        next.setAttribute("show", "");
      }, 2000);

      let shouldMove = false;
      this.$refs.sp.addEventListener("mousedown", (e) => {
        shouldMove = true;
      })
      window.addEventListener("mousemove", (e) => {
        if (shouldMove) {
          const offsetLeft = this.$refs.handle.getBoundingClientRect().left;
          const buttonWidth = this.$refs.sp.getBoundingClientRect().width;

          this.$refs.captcha.style.setProperty('--moved', `${e.clientX - offsetLeft - buttonWidth / 2}px`)
        }
      })
      window.addEventListener("mouseup", (e) => {
        if (shouldMove) {
          const finalOffset = e.clientX - this.$refs.handle.getBoundingClientRect().left;
          if (finalOffset >= 535 && finalOffset <= 541) {
            this.$refs.captcha.classList.add('passed')
          } else {
            this.$refs.captcha.style.setProperty('--moved', '0px');
          }
        }
        shouldMove = false;
      })
    },
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
#captcha.passed::before, 
#captcha.passed::after, 
#captcha.passed #handle {
  opacity: 0;
}
#captcha {
  --width: 500px;
  --height: 300px;
  --puzzle-width: 80px;
  --puzzle-height: 80px;
  --moved: 0px;

  display: block;
  width: var(--width);
  height: var(--height);
  border-radius: 5px;
  background-image: url(../../public/1128962.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .3);
}
#captcha::after,
#captcha::before {
  position: absolute;
  content: '';
  display: block;
  width: inherit;
  height: inherit;
  background-image: inherit;
  /* background-color: #f00; */
  background-size: inherit;
  background-position: inherit;

  -webkit-clip-path: inset(
    calc((var(--height) - var(--puzzle-height)) / 2)
    calc(var(--puzzle-width) * 2)
    calc((var(--height) - var(--puzzle-height)) / 2)
    calc(var(--width) - var(--puzzle-width) * 3)
  );

  clip-path: inset(
    calc((var(--height) - var(--puzzle-height)) / 2)
    calc(var(--puzzle-width) * 2)
    calc((var(--height) - var(--puzzle-height)) / 2)
    calc(var(--width) - var(--puzzle-width) * 3)
  );
}
#captcha::after {
  transform: translateX(
    clamp(
      calc(var(--width) * -1),
      calc(var(--width) * -1) + var(--moved),
      calc(var(--puzzle-width) * 2)
    )
  );
  transition: .25s all ease-in-out;
}
#captcha:active::after {
  transition: none;
}
#captcha::before {
  background-color: rgba(0, 0, 0, .6);
  background-blend-mode: multiply;
}
#handle {
  width: calc(var(--width) + var(--puzzle-width) * 3);
  height: 30px;
  border-radius: 18px;
  background-color: #eee;
  position: absolute;
  bottom: -50px;
  left: calc(var(--puzzle-width) * 3 * -1);
  box-shadow: inset 0px 0px 12px rgba(0, 0, 0, .2);
  border: 3px solid #ccc;
  box-sizing: content-box;
}
.sp  {
  display: block;
  width: var(--puzzle-width);
  height: inherit;
  border-radius: inherit;
  background-color: #fff;
  box-shadow: inset 0px 0px 6px rgba(0.0.0 0.25), 0px 2px 4px rgba(0, 0, 0, .3);
  position: absolute;
  cursor: move;
  transform: translateX(
    clamp(
      0px,
      var(--moved),
      calc(var(--width) + var(--puzzle-width) * 2)
    )
  );
  transition: .25s all ease-in-out;
}
#captcha:active #handle div {
  transition: none;
}
.one {
  background-image: linear-gradient(45deg, #0ecffe 50%, #07a6f1);
}
.two {
  background-image: linear-gradient(45deg, #18e198 50%, #0ec15d);
}
.three {
  background-image: linear-gradient(45deg, #8a7cfb 50%, #633e9c);
}
.four {
  background-image: linear-gradient(45deg, #0ecffe 50%, #07a6f1);
}
.five {
  background-image: linear-gradient(45deg, #0ecffe 50%, #07a6f1);
}
.mask {
  width: 100%;
  height: 1rem;
  position: relative;
  overflow: hidden;
}
span {
  display: block;
  width: 100%;
  line-height: 1rem;
  position: absolute;
  top: 1rem;
  background-size: 100% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  -webkit-text-fill-color: transparent;
}
.mask span[show] {
  transform: translateY(-1rem);
  transition: 1s transform ease-in-out;
}
.mask span[show-up] {
  transform: translateY(-2rem);
  transition: 1s transform ease-in-out;
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
