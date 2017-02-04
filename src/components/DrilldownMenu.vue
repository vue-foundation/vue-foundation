<template>
  <div class="row">
    <div class="small-12 columns">
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
  </div>
</template>

<script>
export default {
  mixins: [
    // eslint-disable-next-line
    require('../mixins/foundation'),
  ],
  name: 'drilldown-menu',
  data() {
    return {
      msg: 'Drilldown Menu',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
