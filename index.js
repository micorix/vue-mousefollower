import MouseFollowerDirective from './directive.js';

const VueMouseFollower = {
  install(Vue, options) {
    Vue.directive('mousefollower', MouseFollowerDirective)
  }
};

export default VueMouseFollower;
