<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Vue.js + Foundation',
    };
  },
};
</script>

<style lang="scss">
  h1 {
    color: $secondary-color;
  }
</style>
