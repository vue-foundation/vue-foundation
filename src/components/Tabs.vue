<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul class="tabs" data-tabs id="deeplinked-tabs">
      <li class="tabs-title is-active"><a href="#panel1d" aria-selected="true">Tab 1</a></li>
      <li class="tabs-title"><a href="#panel2d">Tab 2</a></li>
      <li class="tabs-title"><a href="#panel3d">Tab 3</a></li>
      <li class="tabs-title"><a href="#panel4d">Tab 4</a></li>
    </ul>

    <div class="tabs-content" data-tabs-content="deeplinked-tabs">
      <div class="tabs-panel is-active" id="panel1d">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="tabs-panel" id="panel2d">
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
      </div>
      <div class="tabs-panel" id="panel3d">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt consequatur neque fugit nostrum ratione libero quam iure dolorem, quasi, aliquam vero eveniet. Aliquam repellat quos, at nulla doloremque, assumenda ipsum totam tempore corporis accusantium laboriosam eligendi fugit rerum non facere excepturi dolorem facilis adipisci velit aperiam quasi ipsa. Sint illum laudantium quam quae dignissimos officiis optio quis ab recusandae amet! Provident aspernatur distinctio inventore dolorem suscipit ratione quo repudiandae quae atque, officia qui aliquid molestiae nemo ipsum iusto. Minima perferendis ipsum itaque fugiat numquam, accusamus at, reprehenderit modi ab non debitis maxime nihil eos iste dignissimos! Officia deserunt vitae nihil eum in soluta, non perspiciatis praesentium ut. Laboriosam, voluptatibus, suscipit saepe est maiores repellat ad, veniam eius amet corporis esse aliquam unde reiciendis odio. Laudantium eaque, eius earum dicta deleniti itaque voluptates, eveniet similique excepturi consequuntur sequi est repudiandae placeat nisi nemo laboriosam quam dolor? Voluptatum atque magni nisi necessitatibus voluptates, sit quis ad repellendus aliquid molestias ullam consequuntur obcaecati impedit, amet earum corporis natus! Mollitia perferendis eaque ipsa consequuntur rerum labore, asperiores cupiditate aperiam ab. Eaque nobis fuga, similique impedit ipsam autem ex eligendi. Eius amet quo fuga, eaque corrupti, distinctio quidem neque, id deserunt veniam nisi praesentium, illo!</p>
      </div>
      <div class="tabs-panel" id="panel4d">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [
    // eslint-disable-next-line
    require('../mixins/foundation'),
  ],
  name: 'tabs',
  data() {
    return {
      msg: 'Tabs',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
