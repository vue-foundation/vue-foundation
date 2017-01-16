<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/info">Info</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>



<style lang="scss">  
  @include foundation-everything(true); // Init Foundation

  #app {
    @include grid-row();
  }

  a.active {
    color: $warning-color;
  }
</style>
