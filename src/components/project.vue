<template>
  <div class="shanghuaye">
    <div class="shanghuaye-sticky">
      <div class="wipe-stack">
        <div class="section2">
          <div class="s-content">
            <div>2222222222222222222222</div>
            <div>2222222222222222222222</div>
            <div>2222222222222222222222</div>
            <div>2222222222222222222222</div>
            <div>2222222222222222222222</div>
          </div>
        </div>
        <div class="section3" ref="section3">
          <div class="s-content">
            <div>33333333333333333</div>
            <div>33333333333333333</div>
            <div>33333333333333333</div>
            <div>33333333333333333</div>
            <div>33333333333333333</div>
          </div>
        </div>
        <div class="section4" ref="section4">
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
</template>

<script>
export default {
  name: "uppullpage",
};
</script>

<style scoped>

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
.section2 {
  z-index: 2;
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-color: #000;
  color: #f5f5f7;
}
.s-content {
  height: initial;
  background-color: transparent;
}
.section3 {
  clip-path: inset(100% 0px 0px);
  z-index: 3;
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-color: #f2f2f2;
  color: #1d1d1f;
}
.section4 {
  clip-path: inset(100% 0px 0px);
  z-index: 4;
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: #960b19;
  overflow: hidden;
}
</style>