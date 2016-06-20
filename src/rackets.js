import Entity from './entity.js'

export default class Racket extends Entity {
  constructor(game) {
    super()
    this.game = game
    this.width = 20
    this.height = 100
    this.y = game.height / 2 - this.height / 2
  }

  update() {
    super.update()

    this.y = Math.min(Math.max(this.y, 0),
                      this.game.height - this.height)
  }

}

export class Player extends Racket {
  constructor(game) {
    super(game)
    this.points = 0
  }
}

// Probably I'll add a Ready Player One reference later
export class PlayerOne extends Player {
  constructor(game) {
    super(game)
    this.x = 20
    this.speed = 15
    this.height = 10 
  }

  update() {
    if (this.game.keyPressed.up) {
      this.velocityY = -this.speed
    } else if (this.game.keyPressed.down) {
      this.velocityY = this.speed
    } else {
      this.velocityY = 0
    }
    super.update()
  }
}

export class PlayerTwo extends Player {
  constructor(game) {
    super(game)
    this.speed = 5
    this.x = this.game.width - this.width - 20
  }

  update() {
    // Follow the ball
    if (this.y < this.game.ball.y) {
      this.velocityY = this.speed
    } else {
      this.velocityY = -this.speed
    }
    super.update()
  }

}

