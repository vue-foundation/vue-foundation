
<template>
  <div class="grid-container">
    <div class="x-grid">
      <h1>{{ msg }}</h1>  
      <div id="slider" class="slider" data-slider v-bind:data-initial-start="this.dataValue" v-bind:data-end="this.dataEnd">
        <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
        <span class="slider-fill" data-slider-fill></span>
        <input type="hidden" class="slider-input">
      </div>
      <p>Value: {{ dataValue }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'slider',
  mounted() {
    this.slider = new Foundation.Slider($('#slider'), {
      // These options can be declarative using the data attributes
      step: 10,
    });
    this.slider.$element.on('moved.zf.slider', () => {
      this.dataValue = this.slider.inputs.val();
    });
  },
  data() {
    return {
      msg: 'Slider',
      dataValue: 50,
      dataEnd: 200,
    };
  },
  destroyed() {
    this.slider.destroy();
  },
};
</script>

<style lang="scss" scoped>
</style>
