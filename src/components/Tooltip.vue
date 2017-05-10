<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ msg }}</h1>
      <p>
      The <span data-tooltip aria-haspopup="true" class="has-tip" tabindex="1" title="Fancy word for a beetle.">scarabaeus</span> hung quite clear of any branches, and, if allowed to fall, would have fallen at our feet. Legrand immediately took the scythe, and cleared with it a circular space, three or four yards in diameter, just beneath the insect, and, having accomplished this, ordered Jupiter to let go the string and come down from the tree.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tooltip',
  mounted() {
    // The following code works however only if showOn: 'all' is set.
    // This is a known bug: https://github.com/zurb/foundation-sites/issues/7554
    // Until this bug is fixed, Use the selector method
    // this.tooltip = new Foundation.Tooltip($('.has-tip'), {
    //   // These options can be declarative using the data attributes
    //   showOn: 'all',
    // });

    // Selector method
    this.tooltip = $('.has-tip').foundation();
  },
  data() {
    return {
      msg: 'Tooltip',
    };
  },
  destroyed() {
    // Due to Selector Method destroy is disabled
    // this.tooltip.destroy();
  },
};
</script>

<style lang="scss" scoped>
</style>
