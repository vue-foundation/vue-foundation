<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul class="accordion" data-accordion v-foundation>
      <li class="accordion-item" data-accordion-item>
        <a href="#" class="accordion-title">Accordion 1</a>
        <div class="accordion-content" data-tab-content>
          Apparently, having an open pane at page load doesn't work.
        </div>
      </li>
      <li class="accordion-item" data-accordion-item>
        <a href="#" class="accordion-title">Accordion 2</a>
        <div class="accordion-content" data-tab-content>
          I need to be clicked, in order to show up.
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  data() {
    return {
      msg: 'Accordion',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
