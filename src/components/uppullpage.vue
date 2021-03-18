<template>
  <div class="uppull" ref="uppull">
    <div class="shanghuaye" ref="upView">
      <div class="shanghuaye-sticky" ref="ssticky">
        <!-- <div class="wipe-stack"> -->
        <div class="section1">
          <div class="s-content">
            <div>有黑色</div>
            <div class="iphone-b"></div>
          </div>
        </div>
        <div class="section2" ref="section2">
          <div class="s-content">
            <div>有黑色</div>
            <div>有白色</div>
            <div class="iphone-w"></div>
          </div>
        </div>
        <div class="section3" ref="section3">
          <div class="s-content">
            <div>有黑色</div>
            <div>有白色</div>
            <div>还有红色</div>
            <div class="iphone-r"></div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "uppullpage",
  mounted() {
    this.upView = this.$refs.uppull;
    // console.log("scrolled", this.upView.offsetTop - window.scrollTop);

    this.upView.addEventListener("scroll", () => {
      let scrolled =
        this.upView.scrollTop /
        (this.upView.scrollHeight - this.upView.clientHeight);
      console.log("scrolled", scrolled);
      if (scrolled <= 0.5) {
        this.$refs.section2.style.clipPath = `inset(${
          (0.5 - scrolled) * 500
        }% 0px 0px)`;
      }
      if (scrolled <= 0.9) {
        this.$refs.section3.style.clipPath = `inset(${
          (0.9 - scrolled) * 500
        }% 0px 0px)`;
        this.$refs.section3.style.overflowY = "hidden";
      } else {
        this.$refs.section3.style.overflowY = "scroll";
      }
    });
  },
};
</script>

<style scoped>
.uppull {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.shanghuaye {
  position: relative;

  z-index: 1;
  height: calc((3 * 100vh) + 100vh);
  width: 100%;
}
.shanghuaye-sticky {
  height: 100vh;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  overflow: hidden;
}
.wipe-stack {
  height: 100vh;
  position: relative;
}
.section1 {
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-color: #000;
  color: #f5f5f7;
}
.iphone-b {
  height: 80vh;
  width: 75vw;
  margin: 20% auto 0;
  background-image: url("https://www.apple.com.cn/v/iphone-se/d/images/overview/finishes_black__b06syayq94wi_small_2x.png");
  background-size: 100% 100%;
}
.iphone-w {
  height: 80vh;
  width: 75vw;
  margin: 20% auto 0;
  background-image: url("https://www.apple.com.cn/v/iphone-se/d/images/overview/finishes_white__drv9fwq9vzwy_small_2x.png");
  background-size: 100% 100%;
}
.iphone-r {
  height: 80vh;
  width: 75vw;
  margin: 20% auto;
  background-image: url("https://www.apple.com.cn/iphone-se/images/overview/finishes_red__eqfv1ongy282_small_2x.png");
  background-size: 100% 100%;
}
.s-content {
  height: initial;
  background-color: transparent;
  margin-top: 1rem;
}
.section2 {
  clip-path: inset(100% 0px 0px);
  z-index: 3;
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-color: #fff;
  color: #1d1d1f;
}
.section3 {
  clip-path: inset(100% 0px 0px);
  z-index: 4;
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: #960b19;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>