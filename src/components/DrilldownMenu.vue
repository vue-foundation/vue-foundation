<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>{{ msg }}</h1>
      <ul class="vertical menu" data-drilldown>
        <li>
          <a>Item 1</a>
          <ul class="vertical menu">
            <li><a>Item 1A</a></li>
            <!-- ... -->
          </ul>
        </li>
        <li><a>Item 2</a></li>
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
