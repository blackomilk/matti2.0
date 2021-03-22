<template>
  <div class="uppull" ref="uppull">
    <div class="shanghuaye" ref="shanghuaye">
      <div class="shanghuaye-sticky" ref="ssticky">
        <!-- <div class="wipe-stack"> -->
        <div class="section1 iphone">
          <div class="s-content">
            <h3>有黑色</h3>
            <div class="iphone-b"></div>
          </div>
        </div>
        <div class="section2 iphone" ref="section2">
          <div class="s-content">
            <h3>有黑色</h3>
            <h3>有白色</h3>
            <div class="iphone-w"></div>
          </div>
        </div>
        <div class="section3 iphone" ref="section3">
          <div class="s-content">
            <h3>有黑色</h3>
            <h3>有白色</h3>
            <h3>还有红色</h3>
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
    let noStickyOffset = this.upView.clientHeight * 2;

    this.upView.addEventListener("scroll", () => {
      let scrolled = this.upView.scrollTop / noStickyOffset;
      // console.log("scrolled", scrolled);
      this.$refs.section2.style.clipPath = `inset(${
        ((0.5 - scrolled) / 0.5) * 100
      }% 0px 0px 0px)`;

      this.$refs.section3.style.clipPath = `inset(${
        ((1 - scrolled) / 0.5) * 100
      }% 0px 0px 0px)`;
      if (scrolled >= 1) {
        this.$refs.ssticky.classList.add("no-sticky");
      } else {
        this.$refs.ssticky.classList.remove("no-sticky");
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
  font-family: Helvetica, sans-serif;
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
.shanghuaye-sticky.no-sticky {
  position: relative;
  overflow: visible;
}
.shanghuaye-sticky.no-sticky .iphone {
  position: relative;
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
.iphone-b {
  height: 80vh;
  width: 75vw;
  /* margin: 20% auto 0; */
  display: block;
  margin-bottom: -720px;
  background-image: url("https://www.apple.com.cn/v/iphone-se/d/images/overview/finishes_black__b06syayq94wi_small_2x.png");
  background-size: 100% 100%;
}
.iphone-w {
  height: 80vh;
  width: 75vw;
  /* margin: 20% auto 0; */
  display: block;
  margin-bottom: -720px;
  background-image: url("https://www.apple.com.cn/v/iphone-se/d/images/overview/finishes_white__drv9fwq9vzwy_small_2x.png");
  background-size: 100% 100%;
}
.iphone-r {
  height: 80vh;
  width: 75vw;
  /* margin: 20% auto; */
  display: block;
  margin-bottom: -720px;
  background-image: url("https://www.apple.com.cn/iphone-se/images/overview/finishes_red__eqfv1ongy282_small_2x.png");
  background-size: 100% 100%;
}
.s-content {
  height: initial;
  background-color: transparent;
  margin-top: 1rem;
}
.section2 {
  clip-path: inset(100% 0px 0px 0px);
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
  z-index: 4;
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: #960b19;
  overflow-y: scroll;
  overflow-x: hidden;
}
.iphone-r {
  padding-bottom: 720px;
}
</style>