<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ msg }}</h1>
      <ul id="magellan" class="horizontal menu" data-magellan>
        <li><a href="#first">First</a></li>
        <li><a href="#second">Second</a></li>
        <li><a href="#third">Third</a></li>
      </ul>
      <div class="sections">
        <section id="first" data-magellan-target="first"><span>First Section</span></section>
        <section id="second" data-magellan-target="second"><span>Second Section</span></section>
        <section id="third" data-magellan-target="third"><span>Third Section</span></section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'magellan',
  mounted() {
    this.magellan = new Foundation.Magellan($('#magellan'), {
      // These options can be declarative using the data attributes
      animationEasing: 'swing',
    });
  },
  data() {
    return {
      msg: 'Magellan',
    };
  },
  destroyed() {
    this.magellan.destroy();
  },
};
</script>

<style lang="scss" scoped>
  section {
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    background: $light-gray;
  }

  span {
    font-size: 2rem;
    font-weight: 300;
  }
</style>
