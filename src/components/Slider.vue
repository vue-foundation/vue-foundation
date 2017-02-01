<template>
  <div class="hello">
    <h1>{{ msg }}</h1>  
    <div class="slider" v-foundation data-slider data-initial-start="50" data-end="200">
      <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
      <span class="slider-fill" data-slider-fill></span>
      <input type="hidden" class="slider-input">
    </div>
    <p>Value: {{ dataValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'slider',
  data() {
    return {
      msg: 'Slider',
      dataValue: 0,
    };
  },
  mounted() {
    // This is needed: https://github.com/vuejs/vue/issues/372
    $(this.$el).on('moved.zf.slider', () => {
      // $('.slider-input').triggerHandler('change');
      this.dataValue = $('.slider-input').val();
    });
  },
};
</script>

<style lang="scss" scoped>
</style>