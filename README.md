# Vue MouseFollower

*Vue plugin for moving background on mouse move*

## Instalation
Get from npm:  ```npm install vue-mousefollower```, from yarn ```yarn vue-mousefollower```
  or from bower ```bower install vue-mousefollower```

## Usage

```javascript
// main.js
import Vue from 'vue'
import { VueMouseFollower } from 'vue-mousefollower'

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
