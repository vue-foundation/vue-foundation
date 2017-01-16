<template>
  <div class="info">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'info',
  data() {
    return {
      msg: 'Another View',
    };
  },
};
</script>

<style lang="scss" scoped>
  h1 {
    color: $primary-color;
  }
</style>
