<template>
   <div class="hi" ref="hii">
        <div class="hii">
          <span> 嗨 </span>
        </div>
      </div>
</template>

<script>
export default {
  name: 'hi'
}
</script>

<style scoped>
  .hi {
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 0.6rem;
  border-radius: 1rem;
  padding: 0.05rem;
  background: linear-gradient(130deg, rgba(255,255,255,.8) 1%,rgb(97, 182, 205) 35%, #005e7f 45%);
  transition: 2s opacity ease-in-out;
}
.hii {
  position: relative;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  line-height: 1.9rem;
  background-color: #000;
  font-size: 0.7rem;
  font-weight: 600;
}
.hii span {
  display: block;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  color: transparent;
  background: radial-gradient(
    circle,
    white 1%,
    rgb(97, 182, 205) 25%,
    #005e7f 65%
  );
  background-clip: text;
  -webkit-background-clip: text;
}
</style>