<template>
  <div class="grid-container">
    <div class="grid-x text-center">
      <div class="cell">
        <img src="../assets/img/vue-yeti.jpg">
      </div>
    </div>
    <div class="grid-x text-center">
      <div class="cell">
        <h1>{{ msg }}</h1>  
        <p>This is a demo integration of Foundation for Sites 6.3 in a VueJS 2.2 single-page application.</p>
        <a class="button secondary call-button" data-toggle="offCanvas"><i class="icon-puzzle"></i>JS Components</a>
        <a class="button secondary hollow call-button" href="https://github.com/vue-foundation/vue-foundation"><i class="icon-github-circled"></i>Source</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Vue + Foundation',
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
