<template>
  <div class="grid-container">
    <div class="x-grid">
      <h1>{{ msg }}</h1>
      <ul id="dropdown-menu" class="dropdown menu" data-dropdown-menu>
        <li>
          <a>Item 1</a>
          <ul class="menu">
            <li><a>Item 1A</a></li>
            <!-- ... -->
          </ul>
        </li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 4</a></li>
      </ul>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown-menu',
  mounted() {
    this.dropdownMenu = new Foundation.DropdownMenu($('#dropdown-menu'), {
      // These options can be declarative using the data attributes
      hoverDelay: 300,
    });
  },
  data() {
    return {
      msg: 'Dropdown Menu',
    };
  },
  destroyed() {
    this.dropdownMenu.destroy();
  },
};
</script>

<style lang="scss" scoped>
</style>
