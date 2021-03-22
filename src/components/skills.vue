<template>
  <div class="skill">
    <div>sadadadadsa</div>
    <div>sadadadadsa</div>
    <div>sadadadadsa</div>
    <div>sadadadadsa</div>
    <div>sadadadadsa</div>
    <div>sadadadadsa</div>
    <div>sadadadadsa</div>
    <div>{{ a }}</div>
  </div>
</template>

<script>
export default {
  name: "skill",
  data() {
    return {
      a: [],
    };
  },
  mounted() {
    this.array();
  },
  methods: {
    array() {
      let a = [3, 53, 12, 22, 32, 15, 34, 4];
      let half = parseInt(a.length / 2);

      for (let gap = half; gap >= 1; gap = parseInt(gap / 2)) {
        console.log(gap);
        for (let i = gap; i < a.length; i++) {
          for (let j = i - gap; j >= 0; j = j - gap) {
            if (a[j] > a[j + gap]) {
              let tmp = a[j + gap];
              a[j+gap] = a[j]
              a[j] = tmp

            }
          }
        }
      }
      console.log(a)
    },
  },
};
</script>

<style scoped>
.skill {
  width: 100%;
  height: 100vh;
  background-color: rgba(243, 243, 246);
}
</style>