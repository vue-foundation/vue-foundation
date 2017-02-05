<template>
  <div id="app">
    <div class="off-canvas position-right" id="offCanvas" data-off-canvas>
      <ul class="sidebar-menu" data-close="offCanvas">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/reveal">Reveal</router-link></li>
        <li><router-link to="/slider">Slider</router-link></li>
        <li><router-link to="/tooltip">Tooltip</router-link></li>
        <li><router-link to="/dropdown-menu">Dropdown Menu</router-link></li>
        <li><router-link to="/drilldown-menu">Drilldown Menu</router-link></li>
        <li><router-link to="/accordion-menu">Accordion Menu</router-link></li>
        <li><router-link to="/magellan">Magellan</router-link></li>
        <li><router-link to="/accordion">Accordion</router-link></li>
        <li><router-link to="/simple-dropdown">Dropdown</router-link></li>
        <li><router-link to="/tabs">Tabs</router-link></li>
        <li><router-link to="/orbit">Orbit</router-link></li>
        <li><router-link to="/icons">Icons</router-link></li>
      </ul>          
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
      <div class="top-bar">
        
          <ul class="menu expanded">
            <li class="logo">
              <router-link to="/">Vue-Foundation</router-link>
            </li>
            <li><a class="button small menu-button" data-toggle="offCanvas">Menu</button></li>
          </ul>
        
      </div>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    
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

  li a.menu-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    float: right;
  }

  .content-wrapper {
    padding: 0.75rem 0;
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
