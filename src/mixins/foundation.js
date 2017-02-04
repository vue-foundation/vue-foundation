// jQuery and Foundation
// eslint-disable-next-line
import 'script!jquery';
import 'script!what-input';
import 'script!foundation-sites';

module.exports = {
  mounted() {
    $(this.$el).foundation();
  },
  unmounted() {
    $(this.$el).foundation.destroy();
  },
};
