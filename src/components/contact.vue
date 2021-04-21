<template>
  <div class="contact" ref="cc" id="cc">
    <div class="title">Contact Me</div>
    <div class="foo">Thank You!</div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      offsetTop: 0
    }
  },
  watch: {
    offsetTop(newVal,oldVal) {
      if(newVal) {
        console.log('newVal',newVal)
      }
    }
  },
  mounted() {
    let cc = document.getElementById('cc')
    this.offsetTop = cc.offsetHeight
    console.log('ccccccccc',cc.offsetHeight)


    
  },
  methods: {
   romanToInt(s) {

    let num = 0
    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000

    }
    let len = s.length
    for(let i = 0;i<len;i++) {
      debugger
        let val = obj[s[i]]
        let nVal = obj[s[i+1]]
        if((i !== len -1 ) && val < nVal) {
            num -= val
        } else {
            num += val
        }
    }
    return num
}
  }
};
</script>

<style scoped>
.contact {
  width: 100%;
  height: 100vh;
  background-color: #ffcd00;
  padding-top: 1.1rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
