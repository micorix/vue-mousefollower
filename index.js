import MouseFollowerDirective from './directive.js';

const VueMouseFollower = {
  install(Vue, options) {
    Vue.directive('mf', MouseFollowerDirective)
    Vue.directive('mousefollower', MouseFollowerDirective)
  }
};

export default VueMouseFollower;
