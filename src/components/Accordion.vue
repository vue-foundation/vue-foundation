<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ msg }}</h1>
      <ul class="accordion" data-accordion>
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
  mixins: [
    // eslint-disable-next-line
    require('../mixins/foundation'),
  ],
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
