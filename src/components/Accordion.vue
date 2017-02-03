<template>
  <div>
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
</template>

<script>
export default {
  name: 'accordion',
  data() {
    return {
      msg: 'Accordion',
    };
  },
  mounted() {
    $(this.$el).foundation();
  },
  unmounted() {
    $(this.$el).foundation.destroy();
  },
};
</script>

<style lang="scss" scoped>
</style>
