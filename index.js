import MouseFollowerDirective from './directive.js';

const MouseFollower = {
  install(Vue, options) {
    Vue.directive('mousefollower', MouseFollowerDirective)
  }
};

export default MouseFollower;
