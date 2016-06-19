'use strict';

import Entity from './entity'

export default class Ball extends Entity {
  constructor(game) {
    super();

    this.game = game;

    this.width = 20;
    this.height = 20;

    this.restart();
  }

  update() {
    super.update();

    if (this.y < 0 || this.y + this.height > this.game.height) {
      this.velocityY *= -1
    }
  }

  restart() {
    // Let's put the ball in the middle of the screen with some Spin to i:w

    this.x = this.game.width / 2 - this.width;
    this.y = this.game.height / 2 - this.width;

    let minAngle = -30,
      maxAngle = 30,
      angle = Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle
    let radian = Math.PI / 180,
      speed = 7
    this.velocityX = speed * Math.cos(angle * radian)
    this.velocityY = speed * Math.sin(angle * radian)

    this.velocityX = this._setBallDirection(this.velocityX)
  }

  _setBallDirection(velocity) {
    let direction = Math.random() < 0.5 ? -1 : 1;
    return velocity *= direction;
  }

}
