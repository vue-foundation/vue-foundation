<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ msg }}</h1>
      <p>
      The <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover="false" tabindex="1" title="Fancy word for a beetle.">scarabaeus</span> hung quite clear of any branches, and, if allowed to fall, would have fallen at our feet. Legrand immediately took the scythe, and cleared with it a circular space, three or four yards in diameter, just beneath the insect, and, having accomplished this, ordered Jupiter to let go the string and come down from the tree.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [
    // eslint-disable-next-line
    require('../mixins/foundation'),
  ],
  name: 'tooltip',
  data() {
    return {
      msg: 'Tooltip',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
