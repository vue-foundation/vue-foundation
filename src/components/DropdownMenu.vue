<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ msg }}</h1>
      <ul class="dropdown menu" data-dropdown-menu>
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
  mixins: [
    // eslint-disable-next-line
    require('@/mixins/foundation'),
  ],
  name: 'dropdown-menu',
  data() {
    return {
      msg: 'Dropdown Menu',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
