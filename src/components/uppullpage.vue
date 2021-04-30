<template>
  <div class="uppull" ref="uppull">
    <div class="shanghuaye" ref="shanghuaye">
      <div class="shanghuaye-sticky" ref="ssticky">
        <!-- <div class="wipe-stack"> -->
        <div class="section1 iphone" ref="section1">
          <div class="s-content">
            <div class="iphone-t"><h5 class="iphone-b-b">有黑色,</h5></div>
            <div class="iphone-b"></div>
          </div>
        </div>
        <div class="section2 iphone" ref="section2">
          <div class="s-content">
            <div class="iphone-t">
              <h5 class="iphone-w-b">有黑色,</h5>
              <h5 class="iphone-w-w">有白色</h5>
            </div>
            <div class="iphone-w"></div>
          </div>
        </div>
        <div class="section3 iphone" ref="section3">
          <div class="s-content">
            <div class="iphone-t">
              <h5 class="iphone-r-b">有黑色,</h5>
              <h5 class="iphone-r-w">有白色,</h5>
              <h5 class="iphone-r-r">还有红色</h5>
            </div>
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
      console.log("1111111111111111", scrolled);
      this.$refs.section2.style.clipPath = `inset(${((0.5 - scrolled) / 0.5) *
        100}% 0px 0px 0px)`;
      this.$refs.section3.style.clipPath = `inset(${((1 - scrolled) / 0.5) *
        100}% 0px 0px 0px)`;
      if (scrolled >= 1) {
        this.$refs.section3.style.overflow = "auto";
      } else {
        this.$refs.section3.style.overflow = "hidden";
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
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
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
  overflow: hidden;
  position: -webkit-sticky;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.wipe-stack {
  height: 100vh;
  position: relative;
}
.visuallyhidden {
  clip: rect(1px, 1px, 1px, 1px);
}
.section1 {
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-color: #000;
  color: #f5f5f7;
}
h5 {
  display: inline-block;
}
.iphone-t {
  width: 100%;
  height: 20vh;
  margin-top: 30%;
  text-align: left;
  font-size: 40px;
  padding-left: 50px;
}
.iphone-b {
  height: 80vh;
  width: 75vw;
  margin: 10% auto 0;
  background-image: url("https://www.apple.com.cn/v/iphone-se/d/images/overview/finishes_black__b06syayq94wi_small_2x.png");
  background-size: 100% auto;
}
.iphone-b-b {
  color: #f5f5f7;
}
.iphone-w {
  height: 80vh;
  width: 75vw;
  margin: 10% auto 0;
  background-image: url("https://www.apple.com.cn/v/iphone-se/d/images/overview/finishes_white__drv9fwq9vzwy_small_2x.png");
  background-size: 100% auto;
}
.iphone-w-b {
  color: #8b8b99;
}
.iphone-w-w {
  color: #1d1d1f;
}
.iphone-r {
  height: 80vh;
  width: 75vw;
  margin: 10% auto 0;
  margin-bottom: -720px;
  background-image: url("https://www.apple.com.cn/iphone-se/images/overview/finishes_red__eqfv1ongy282_small_2x.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.iphone-r-b,
.iphone-r-w {
  color: #e57571;
}
.iphone-r-r {
  color: #f5f5f7;
}
.s-content {
  height: initial;
  background-color: transparent;
  margin-top: 1rem;
}
.section2 {
  clip-path: inset(100% 0px 0px 0px);
  clip-path: -webkit-inset(100% 0px 0px 0px);
  z-index: 3;
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-color: #fff;
  color: #1d1d1f;
}
.section3 {
  clip-path: inset(100% 0px 0px 0px);
  clip-path: -webkit-inset(100% 0px 0px 0px);
  z-index: 4;
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: #960b19;
  overflow-y: scroll;
  overflow-x: hidden;
}
.iphone-r {
  padding-bottom: 667px;
}
</style>
