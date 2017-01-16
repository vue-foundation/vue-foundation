<template>
  <div class="info">
    <h1>{{ msg }}</h1>
    <h3>
      <i class="icon-github-circled"></i>
      <i class="icon-github"></i>
      <i class="icon-github-squared"></i>
    </h3>
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
