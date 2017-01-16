<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="reveal" id="exampleModal1" data-reveal>
      <h1>Awesome. I Have It.</h1>
      <p class="lead">Your couch. It is mine.</p>
      <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
      <button class="close-button" data-close aria-label="Close modal" type="button">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <p><a data-open="exampleModal1">Click me for a modal</a></p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Vue.js + Foundation',
    };
  },
  // add this when you need Foundation javascript in the component
  mounted() {
    $(this.$el).foundation();
  },
};
</script>

<style lang="scss" scoped>
  h1 {
    color: $secondary-color;
  }
</style>
