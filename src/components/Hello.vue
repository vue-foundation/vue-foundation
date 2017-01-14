<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a id="button" href="#">Click Me</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss">
  @import "../styles/app"; // Import app.scss in the component (duplication is removed during the build)

  #button {
    @include button();
  }
</style>
