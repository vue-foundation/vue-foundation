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
return {
    // ...,
    scss: generateLoaders(['css', 'sass?data=@import "~src/styles/app";']), 
    // ...,
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

# Javascript

This project uses a Vue mixin, in `mixins/foundation.js`, which takes care of initializing and destroying Foundation components at the right time. It can be included in every `.vue` file using a Foundation JS component, as long as it's not initialized more than once on the same UI element. 

### Off-Canvas
As shown in `App.vue`, this component should be directly instantiated using `new Foundation.OffCanvas(element, options)`. This is preferable to using the mixin, as it would initialize Foundation twice on some parts of the DOM.

### Orbit
In order to work properly, [Orbit needs the Motion UI library](http://foundation.zurb.com/sites/docs/orbit.html#using-animation).

### Slider
This component requires listening to Foundation custom events, setting a `v-model` on the hidden input will not work, as explained here: [vuejs/vue#372](https://github.com/vuejs/vue/issues/372) 
