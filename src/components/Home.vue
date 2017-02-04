<template>
  <div class="hello">
    <h1>{{ msg }}</h1>  
    <div class="row align-middle">
      <div class="column medium-4 medium-offset-4">
        <div class="card">
          <div class="card-section">
            <img src="../assets/img/vue-yeti.jpg">
          </div>
          <div class="card-section">
            <p>This is a demo integration of VueJS with Foundation. This project shows that, with some adjustments, Foundation can work nicely along Vue.</p>
          </div>
      </div>
      </div>    
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

  .card-wrapper {
    @include flex-grid-column(6);
  }


</style>
