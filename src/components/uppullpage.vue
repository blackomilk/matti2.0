<template>
  <div class="uppull" ref="upView">
    <div class="shanghuaye">
      <div class="shanghuaye-sticky" ref="ssticky">
        <div class="wipe-stack">
          <div class="section1">
            <div class="s-content">
              <div>2222222222222222222222</div>
              <div>2222222222222222222222</div>
              <div>2222222222222222222222</div>
              <div>2222222222222222222222</div>
              <div>2222222222222222222222</div>
            </div>
          </div>
          <div class="section2" ref="section2">
            <div class="s-content">
              <div>33333333333333333</div>
              <div>33333333333333333</div>
              <div>33333333333333333</div>
              <div>33333333333333333</div>
              <div>33333333333333333</div>
            </div>
          </div>
          <div class="section3" ref="section3">
            <div class="s-content">
              <div>444444444444</div>
              <div>444444444444</div>
              <div>444444444444</div>
              <div>444444444444</div>
              <div>444444444444</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "uppullpage",
  mounted() {
    this.upView = this.$refs.upView;
    // console.log("scrolled", this.upView.offsetTop - window.scrollTop);

    this.upView.addEventListener("scroll", () => {
      let scrolled =
        this.upView.scrollTop /
        (this.upView.scrollHeight - this.upView.clientHeight);
      console.log("scrolled", scrolled);
      if (scrolled == 0) {
        this.$refs.section2.style.clipPath = `inset(${
          (0.33 - scrolled) * 1000
        }% 0px 0px)`;
      }
      if (scrolled > 0.33) {
        this.$refs.section3.style.clipPath = `inset(${
          (0.66 - scrolled) * 1000
        }% 0px 0px)`;
      }
    });
  },
};
</script>

<style scoped>
.uppull {
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  /* overflow-y: scroll; */
}
.shanghuaye {
  position: relative;
  z-index: 1;
  height: calc((3 * 100vh) + 100vh);
}
.shanghuaye-sticky {
  height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  overflow: hidden;
  top: 0;
}
.wipe-stack {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.section1 {
  z-index: 2;
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-color: skyblue;
  color: #1d1d1f;
}
.s-content {
  height: initial;
  background-color: transparent;
}
.section2 {
  clip-path: inset(100% 0px 0px);
  z-index: 3;
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-color: #1d1d1f;
  color: #f5f5f7;
}
.section3 {
  clip-path: inset(100% 0px 0px);
  z-index: 4;
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: #960b19;
  overflow: hidden;
}
</style>