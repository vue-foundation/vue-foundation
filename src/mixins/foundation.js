// Foundation mixin

module.exports = {
  mounted() {
    // eslint-disable-next-line
    $(this.$el).foundation();
  },
  beforeDestroy() {
    // eslint-disable-next-line
    $(this.$el).foundation('destroy');
  },
};
