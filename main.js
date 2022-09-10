import { Player } from './player.js';

window.addEventListener('loac', function () {
  const canvas = document.querySelector('#canvas1');
  const ctx = canvas.getContext();
  canvas.width = 500;
  canvas.height = 500;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    update() {

    }
    draw() {

    }
  }
});
