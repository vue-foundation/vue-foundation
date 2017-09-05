<template>
  <div class="grid-container">
    <div class="x-grid">
      <h1>{{ msg }}</h1>
      <div id="reveal-dialog" class="reveal" data-reveal>
        <h1>Awesome. I Have It.</h1>
        <p class="lead">Your couch. It is mine.</p>
        <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
        <button class="close-button" data-close aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <p><a v-on:click="openReveal()">Click me for a modal</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reveal',
  mounted() {
    this.reveal = new Foundation.Reveal($('#reveal-dialog'), {
      // These options can be declarative using the data attributes
      animationIn: 'scale-in-up',
    });
  },
  data() {
    return {
      msg: 'Reveal',
    };
  },
  methods: {
    // Added the below openReveal method for two reasons:
    // 1) There was a bug preventing the reveal from working once
    // you navigated away and back to the reveal component.
    // 2) Most dialogs will need to be opened using code.
    openReveal() {
      this.reveal.open();
    },
  },
  destroyed() {
    this.reveal.destroy();
  },
};
</script>

<style lang="scss" scoped>
</style>
