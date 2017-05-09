// Foundation mixin

module.exports = {
  mounted() {
    $(this.$el).foundation();
  },
  beforeDestroy() {
    $(this.$el).foundation('destroy');
  },
};
