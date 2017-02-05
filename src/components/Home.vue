<template>
  <div class="row align-middle">
    <div class="small-10 medium-5 small-offset-1 columns image">
      <img src="../assets/img/vue-yeti.jpg">
    </div>
    <div class="small-12 medium-5 columns">
      <h1>{{ msg }}</h1>  
      <p>This is a demo integration of Foundation for Sites in a VueJS single-page application. it is meant to show that, with some adjustments, Foundation works nicely along Vue.</p>
      <a class="button secondary call-button" data-toggle="offCanvas">Components</a>
      <a class="button secondary hollow call-button" href="https://github.com/hal0gen/vue-foundation">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Vue.js 2 + Foundation 6',
    };
  },
};
</script>

<style lang="scss" scoped>

  .image {
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .call-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    font-weight: 600;
    text-transform: uppercase;
  }


</style>
