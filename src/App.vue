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
  @include foundation-everything(true); // Init Foundation

  #app {
    @include grid-row();
  }
</style>
