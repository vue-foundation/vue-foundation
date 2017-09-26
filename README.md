# vue-foundation

> A boilerplate integrating Foundation for Sites and VueJS

This repository is an example of how to use [Foundation for Sites](https://github.com/zurb/foundation-sites) in a [Vue](https://github.com/vuejs/vue) single-page application. The project is scaffolded using [vue-cli](https://github.com/vuejs/vue-cli), with the [webpack](https://github.com/vuejs-templates/webpack) template, and [vue-router](https://github.com/vuejs/vue-router). 

A detailed description of the project [is available here](https://medium.com/@tommaso.marcelli/setting-up-vue-2-and-foundation-6-3f858b4ad20#.mfkp11mid).

## Warning
The master branch is based on a recent vue-cli template, which makes use of Webpack 2. For a working configuration using Webpack 1, check out the [webpackv1 branch](https://github.com/hal0gen/vue-foundation/tree/webpackv1)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build
```

# CSS/SASS

CSS setup resides in the `src/styles` folder.

`app.scss` gets imported in every Vue component, through modified `cssLoaders` in `build/utils.js` (see [vuejs-templates/webpack#149](https://github.com/vuejs-templates/webpack/issues/149)):

```js

let scssOptions = {
    includePaths: [
      './src/styles'
    ],
    data: '@import "./src/styles/app";'
  }

```

As a result, Foundation mixins are now available in Vue components, without the need for an `@import` statement in every style declaration. In order for this to work, every CSS declaration in components needs to use SCSS:

```html

<style lang="scss">
    // styles
</style>

```

`_settings.scss` is also imported: this is the original Foundation variables file. The only change required to make it work is the import path of Foundation `util`. 

`global.scss` gets imported in the root component. It initializes Foundation, loads custom icon fonts and Motion UI.

`_icons.scss` is a modified Fontello build (all `url`s in `@font-face` declaration). Instead of using the default `static` folder for assets, this project is configured to process fonts and images with custom loaders, in `build/webpack.base.conf.js`.

# JavaScript

The `foundation-sites` JavaScript modules are being initialized and destroyed within the [Vue component lifecycle hooks](https://vuejs.org/v2/api/#Options-Lifecycle-Hooks). Specifically the [mounted](https://vuejs.org/v2/api/#mounted) hook is used to initialize each component while the [destroyed](https://vuejs.org/v2/api/#destroyed) hook is used to destroy them.

There is one exception to this rule; [Tooltips](https://github.com/vue-foundation/vue-foundation/blob/master/src/components/Tooltip.vue) are currently not being destroyed due to a [bug](https://github.com/zurb/foundation-sites/issues/7554) in `foundation-sites`.

You will also notice in the Vue components that a reference is added to the Vue object using `this.component = ...`. This is to allow the destroyed hook to be able to destroy the object without having to use the jQuery selector.

Example from the Accordion component:

```js

export default {
  name: 'accordion',
  mounted() {
    this.accordion = new Foundation.Accordion($('#accordion'), {
      // These options can be declarative using the data attributes
      slideSpeed: 500,
      multiExpand: true,
    });
  },
  data() {
    return {
      msg: 'Accordion',
    };
  },
  destroyed() {
    this.accordion.destroy();
  },
};

```

### Orbit
In order to work properly, [Orbit needs the Motion UI library](http://foundation.zurb.com/sites/docs/orbit.html#using-animation).

### Slider
This component requires listening to Foundation custom events, setting a `v-model` on the hidden input will not work, as explained here: [vuejs/vue#372](https://github.com/vuejs/vue/issues/372) 

## Change Log

_Note: Versions based on the package.json version value_

<<<<<<< HEAD
*   v2.0 [2017-09-05] Upgraded to Foundation 6.4.3 including XY Grid support.
=======
*   v3.0 [2017-09-26] Replaced single foundation import to plugin import.
*   v2.0 [2017-09-05] Upgraded to Foundation 6.4.3 including XY Grid support.
>>>>>>> Foundation64Upgrade
