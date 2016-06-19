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

// Probably I'll add a Ready Player One reference later
export class PlayerOne extends Racket {
  constructor(game) {
    super(game)
    this.x = 20
    console.log(this.game)
  }

}


