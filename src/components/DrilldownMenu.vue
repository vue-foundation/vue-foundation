<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul class="vertical menu" data-drilldown>
      <li>
        <a href="#Item-1">Item 1</a>
        <ul class="vertical menu">
          <li><a href="#Item-1A">Item 1A</a></li>
          <!-- ... -->
        </ul>
      </li>
      <li><a href="#Item-2">Item 2</a></li>
    </ul>    
  </div>
</template>

<script>
export default {
  name: 'drilldown-menu',
  data() {
    return {
      msg: 'Drilldown Menu',
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
