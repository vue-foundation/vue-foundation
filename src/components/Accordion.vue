<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ msg }}</h1>
      <ul id="accordion" class="accordion" data-accordion>
        <li class="accordion-item is-active" data-accordion-item>
          <a href="#" class="accordion-title">Accordion 1</a>
          <div class="accordion-content" data-tab-content>
            If you init Foundation in the component, this will work fine.
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
  </div>
</template>

<script>
export default {
  name: 'accordion',
  mounted() {
    this.accordion = new Foundation.Accordion($('#accordion'), {
      // These options can be declarative using the data attributes
      slideSpeed: 500,
      multiExpand: true,
    });
  },
  data() {
    return {
      msg: 'Accordion',
    };
  },
  destroyed() {
    this.accordion.destroy();
  },
};
</script>

<style lang="scss" scoped>
</style>
