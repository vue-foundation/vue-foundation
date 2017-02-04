<template>
  <div class="hello">
    <div class="off-canvas position-top" id="offCanvas" data-off-canvas>
      <h2>Hey! there is something here!</h2>
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
      <h1>{{ msg }}</h1>  
      <p>This is the main content.</p>
      <button type="button" class="button" data-toggle="offCanvas">Open Menu</button>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [
    // eslint-disable-next-line
    require('../mixins/foundation'),
  ],
  name: 'off-canvas',
  data() {
    return {
      msg: 'Off Canvas',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>