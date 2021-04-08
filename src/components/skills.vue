<template>
  <div class="skill">
    <canvas
      id="canvas"
      width="200"
      height="150"
      style="border: 1px dashed gray;color: red;background-color: #FFF"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "skill",
  data() {
    return {};
  },
  mounted() {
    let cnv = document.getElementById("canvas");
    let cxt = cnv.getContext("2d");

    cxt.moveTo(40, 60);
    cxt.lineTo(100, 60);
    cxt.lineTo(100, 30);
    cxt.lineTo(150, 75);
    cxt.lineTo(100, 120);
    cxt.lineTo(100, 90);
    cxt.lineTo(40, 90);
    cxt.lineTo(40, 60);
    cxt.stroke();
  },
  methods: {},
};
</script>

<style scoped>
.skill {
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0);
}
</style>
