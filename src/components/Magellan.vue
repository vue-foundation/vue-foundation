<template>
  <div class="row">
    <div class="small-12 columns">
      <h1>{{ msg }}</h1>
      <ul class="horizontal menu" data-magellan>
        <li><a href="#first">First Arrival</a></li>
        <li><a href="#second">Second Arrival</a></li>
        <li><a href="#third">Third Arrival</a></li>
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
  mixins: [
    // eslint-disable-next-line
    require('../mixins/foundation'),
  ],
  name: 'magellan',
  data() {
    return {
      msg: 'Magellan',
    };
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