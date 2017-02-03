<template>
  <div>
    <h1>{{ msg }}</h1>
    <button class="button" type="button" data-toggle="example-dropdown">Toggle Dropdown</button>
    <div class="dropdown-pane" id="example-dropdown" data-dropdown data-auto-focus="true">
      Example form in a dropdown.
      <form>
        <div class="row">
          <div class="medium-6 columns">
            <label>Name
              <input type="text" placeholder="Kirk, James T.">
            </label>
          </div>
          <div class="medium-6 columns">
            <label>Rank
              <input type="text" placeholder="Captain">
            </label>
          </div>
        </div>
      </form>
    </div>
    <button class="button" type="button" data-toggle="example-dropdown-1">Hoverable Dropdown</button>
    <div class="dropdown-pane" id="example-dropdown-1" data-dropdown data-hover="true" data-hover-pane="true">
      v-foundation directive doesn't work here
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  data() {
    return {
      msg: 'Dropdown',
    };
  },
  mounted() {
    $(this.$el).foundation();
  },
  unmounted() {
    $(this.$el).foundation.destroy();
  },
};
</script>

<style lang="scss" scoped>
</style>
