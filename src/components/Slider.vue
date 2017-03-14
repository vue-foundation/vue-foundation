
<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ msg }}</h1>  
      <div class="slider" data-slider v-bind:data-initial-start="this.dataValue" v-bind:data-end="this.dataEnd">
        <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
        <span class="slider-fill" data-slider-fill></span>
        <input type="hidden" class="slider-input">
      </div>
      <p>Value: {{ dataValue }}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */

export default {
  mixins: [
    // eslint-disable-next-line
    require('@/mixins/foundation'),
  ],
  name: 'slider',
  data() {
    return {
      msg: 'Slider',
      dataValue: 50,
      dataEnd: 200,
    };
  },
  mounted() {
    // This is needed: https://github.com/vuejs/vue/issues/372
    $(this.$el).on('moved.zf.slider', () => {
      this.dataValue = $('.slider-input').val();
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
