<template>
  <div class="grid-container">
    <div class="x-grid">
      <h1>{{ msg }}</h1>
      <ul id="accordion-menu" class="vertical menu" data-accordion-menu>
        <li>
          <a>Item 1</a>
          <ul class="menu vertical nested">
            <li><a>Item 1A</a></li>
            <li><a>Item 1B</a></li>
          </ul>
        </li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.accordionMenu = new Foundation.AccordionMenu($('#accordion-menu'), {
      // These options can be declarative using the data attributes
      slideSpeed: 500,
      multiOpen: true,
    });
  },
  name: 'accordion-menu',
  data() {
    return {
      msg: 'Accordion Menu',
    };
  },
  destroyed() {
    this.accordionMenu.destroy();
  },
};
</script>

<style lang="scss" scoped>
</style>
