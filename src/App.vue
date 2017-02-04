<template>
  <div id="app">
    <div class="off-canvas position-right" id="offCanvas" data-off-canvas>
      <ul class="sidebar-menu" data-close="offCanvas">
        <li><router-link to="/vue-foundation/home">Home</router-link></li>
        <li><router-link to="/vue-foundation/reveal">Reveal</router-link></li>
        <li><router-link to="/vue-foundation/slider">Slider</router-link></li>
        <li><router-link to="/vue-foundation/tooltip">Tooltip</router-link></li>
        <li><router-link to="/vue-foundation/dropdown-menu">Dropdown Menu</router-link></li>
        <li><router-link to="/vue-foundation/drilldown-menu">Drilldown Menu</router-link></li>
        <li><router-link to="/vue-foundation/accordion-menu">Accordion Menu</router-link></li>
        <li><router-link to="/vue-foundation/magellan">Magellan</router-link></li>
        <li><router-link to="/vue-foundation/accordion">Accordion</router-link></li>
        <li><router-link to="/vue-foundation/simple-dropdown">Dropdown</router-link></li>
        <li><router-link to="/vue-foundation/tabs">Tabs</router-link></li>
        <li><router-link to="/vue-foundation/orbit">Orbit</router-link></li>
        <li><router-link to="/vue-foundation/icons">Icons</router-link></li>
      </ul>          
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
      <div class="top-bar">
        <div class="top-bar-left">
          <h4 class="logo">
            <router-link to="/vue-foundation/home">Vue-Foundation</router-link>
          </h4>
        </div>
        <div class="top-bar-right">
          <ul class="menu show-for-medium">
            <button type="button" class="button small menu-button" data-toggle="offCanvas">Menu</button>
          </ul>
        </div>

      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted() {
    // eslint-disable-next-line
    this.offCanvas = new Foundation.OffCanvas($('#offCanvas'));
  },
};
</script>



<style lang="scss">  
  @import './styles/global';
  
  // Chrome Reset 
  a:focus {
    outline: none;
  }

  .logo, .logo a {
    color: $white;
    font-weight: normal;
  }

  .menu-button {
    border-radius: 20px;
    padding-left: 2rem;
    padding-right: 2rem; 
    font-weight: 600;
    text-transform: uppercase;
  }

  .wrapper {
    @include flex-grid-row();
  }

  .sidebar-menu {
    @include menu-base();
    @include menu-direction(vertical);
    a {
      color: $secondary-color;
      font-weight: normal;
    }
    a.active {
      font-weight: 600;
      color: $primary-color;
    }
  }

  // Github corner
  .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
</style>
