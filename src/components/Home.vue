<template>
  <div class="row align-middle">
    <div class="small-10 medium-5 small-offset-1 columns image">
      <img src="../assets/img/vue-yeti.jpg">
    </div>
    <div class="small-12 medium-5 columns">
      <h1>{{ msg }}</h1>  
      <p>This is a demo integration of Foundation for Sites in a VueJS single-page application. This project shows that, with some adjustments, Foundation can work nicely along Vue.</p>
      <button type="button" class="button secondary call-button" data-toggle="offCanvas">Explore Components</button>
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
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .call-button {
    border-radius: 20px;
    padding-left: 2rem;
    padding-right: 2rem; 
    font-weight: 600;
    text-transform: uppercase;
  }


</style>
