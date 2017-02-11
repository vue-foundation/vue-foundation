// Foundation mixin

// eslint-disable-next-line
import 'script!jquery/dist/jquery.min';
import 'script!what-input/dist/what-input.min';
import 'script!foundation-sites/dist/js/foundation.min';


module.exports = {
  mounted() {
    $(this.$el).foundation();
  },
  unmounted() {
    $(this.$el).foundation.destroy();
  },
};
