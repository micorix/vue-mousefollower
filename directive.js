import Vue from 'vue';

const defaults = {
  friction: 30,
  overflow: 'hidden',
  base: window
}
const moveData = {
  lFollowX: 0,
  lFollowY: 0,
  x: 0,
  y: 0
}
function moveBackground() {
  moveData.x += (moveData.lFollowX - moveData.x) / defaults.friction;
  moveData.y += (moveData.lFollowY - moveData.y) / defaults.friction;


  element.style.transform = 'translate(' + moveData.x + 'px, ' + moveData.y + 'px) scale(1.1)';
console.log(element.style.transform);
  window.requestAnimationFrame(moveBackground)
}
let element;
// Initialize the annoying-background directive.
const MouseFollowerDirective = {
  bind(el, binding, vnode) {
    console.log('dziala');
    // el might not be present for server-side rendering.
    if (el) {
       element = el;

         el.style.overflow = 'hidden';

      window.addEventListener('mousemove', (e) => {
        let lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
        let lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
        moveData.lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
        moveData.lFollowY = (10 * lMouseY) / 100;
        console.log(moveData.lFollowX)
      });
      moveBackground();
    }
  }
}
export default MouseFollowerDirective;
