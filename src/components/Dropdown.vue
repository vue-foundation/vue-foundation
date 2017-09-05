<template>
  <div class="grid-container">
    <div class="x-grid">
      <h1>{{ msg }}</h1>
      <button class="button" type="button" data-toggle="dropdown1">Toggle Dropdown</button>
      <div class="dropdown-pane" id="dropdown1" data-dropdown data-auto-focus="true">
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
      <button class="button" type="button" data-toggle="dropdown2">Hoverable Dropdown</button>
      <div class="dropdown-pane" id="dropdown2" data-dropdown data-hover="true" data-hover-pane="true">
        v-foundation directive doesn't work here
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  mounted() {
    this.dropdown1 = new Foundation.Dropdown($('#dropdown1'), {
      // These options can be declarative using the data attributes
      vOffset: 20,
    });
    this.dropdown2 = new Foundation.Dropdown($('#dropdown2'), {
      hover: true,
    });
  },
  data() {
    return {
      msg: 'Dropdown',
    };
  },
  destroyed() {
    this.dropdown1.destroy();
    this.dropdown2.destroy();
  },
};
</script>

<style lang="scss" scoped>
</style>
