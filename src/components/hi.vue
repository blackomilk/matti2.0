<template>
  <div class="contain">
    <div class="hi" ref="hii">
      <div class="hii">
        <span> 嗨 </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hi",
};
</script>

<style scoped>
.contain {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hi {
  position: absolute;
  width: 2rem;
  height: 2rem;
  font-size: 0.6rem;
  border-radius: 1rem;
  padding: 0.05rem;
  background: linear-gradient(
    130deg,
    rgba(255, 255, 255, 0.8) 2%,
    rgb(97, 182, 205) 30%,
    #005e7f 50%
  );
  transition: 2s opacity ease-in-out;
  animation: hii 3s linear infinite;
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
  animation: iih 3s linear infinite;
}
@keyframes hii {
  to {
    transform: rotate(360deg);
  }
}

@keyframes iih {
  to {
    transform: rotate(-360deg);
  }
}
</style>
