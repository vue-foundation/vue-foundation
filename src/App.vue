<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};
</script>



<style lang="scss">  
  @import "./styles/app"; // Import app.scss in the main app

  #app {
    @include grid-row();
  }
</style>
