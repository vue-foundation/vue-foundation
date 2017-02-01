<template>
  <div id="app">
    <div class="top-bar">
      <div class="top-bar-left">
        <h4>Vue-Foundation</h4>
      </div>
      <div class="top-bar-right">
      </div>
    </div>
    <div class="wrapper">
      <div class="sidebar">
        <ul class="sidebar-menu">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/reveal">Reveal</router-link></li>
          <li><router-link to="/slider">Slider</router-link></li>
          <li><router-link to="/tooltip">Tooltip</router-link></li>
          <li><router-link to="/dropdown-menu">Dropdown Menu</router-link></li>
          <li><router-link to="/accordion-menu">Accordion Menu</router-link></li>
          <li><router-link to="/icons">Icons</router-link></li>
        </ul>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>



<style lang="scss">  
  @import './styles/global';

  .wrapper {
    @include flex-grid-row();
  }

  .sidebar {
    @include flex-grid-column(2);
  }

    .sidebar-menu {
      @include menu-base();
      @include menu-direction(vertical);
    }

  .content {
    @include flex-grid-column(10);
  }

  a.active {
    color: $warning-color;
  }
</style>
