# Vue MouseFollower

*Vue plugin for moving background on mouse move*  
*Inspired by https://codepen.io/vajkri/pen/grgQmb*

[DEMO available](https://jsfiddle.net/micorix/v9u8p54e/)

## Instalation

Get from npm:  ```npm install vue-mousefollower``` or from yarn ```yarn add vue-mousefollower```

## Usage

```javascript
// main.js
import Vue from 'vue'
import VueMouseFollower from 'vue-mousefollower'

Vue.use(VueMouseFollower)
```
```html
<!-- <template> in component.vue -->
<div id="bg" v-mousefollower></div>
```
```css
/* <style> in component.vue */
#bg{
  width:200px;
  height: 200px;
  background: url(example-background.png);
}
```

## Customizing

- Set custom friction with ```v-mousefollower:[custom number]``` (ex. ```v-mousefollower:60```, default is 30)

- You can use ```v-mf``` instead of ```v-mousefollower```
