// Foundation mixin

module.exports = {
  mounted() {
    // eslint-disable-next-line
    $(this.$el).foundation();
  },
  unmounted() {
    // eslint-disable-next-line
    $(this.$el).foundation.destroy();
  },
};
