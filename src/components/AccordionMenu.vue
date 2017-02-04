<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul class="vertical menu" data-accordion-menu>
      <li>
        <a href="#">Item 1</a>
        <ul class="menu vertical nested">
          <li><a href="#">Item 1A</a></li>
          <li><a href="#">Item 1B</a></li>
        </ul>
      </li>
      <li><a href="#">Item 2</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  mixins: [
    // eslint-disable-next-line
    require('../mixins/foundation'),
  ],
  name: 'accordion-menu',
  data() {
    return {
      msg: 'Accordion Menu',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
